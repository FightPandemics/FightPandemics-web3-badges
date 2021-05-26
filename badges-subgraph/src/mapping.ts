import { BigInt, Value } from "@graphprotocol/graph-ts"
import {
  Badges,
  Approval,
  ApprovalForAll,
  BadgeCloned,
  BadgeMinted,
  OriginalBadgeUpdated,
  OwnershipTransferred,
  Transfer
} from "../generated/Badges/Badges"
import { CloneBadge, MainBadge } from "../generated/schema"

/*
export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.badges(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.getApproved(...)
  // - contract.getBadgeById(...)
  // - contract.getLatestBadgeId(...)
  // - contract.isApprovedForAll(...)
  // - contract.isMintable(...)
  // - contract.mint(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - c
  */

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBadgeCloned(event: BadgeCloned): void {
  let mainBadgeId = event.params.cloneFromId.toString()
  let mainBadge = MainBadge.load(mainBadgeId)
  if (mainBadge !== null) {
    let cloneBadge = new CloneBadge(event.params.clonedTokenId.toString())
    cloneBadge.owner = event.params.owner.toHex()
    cloneBadge.cloneFromId = event.params.cloneFromId.toString()
    mainBadge.clones.push(cloneBadge.id)
    mainBadge.save()
    cloneBadge.save()
  } else {
    throw new Error("Main badge does not exist")
  }
}

export function handleBadgeMinted(event: BadgeMinted): void {
  let id = event.params.tokenId.toString()
  let mainBadge = MainBadge.load(id)
  if (mainBadge === null) {
    mainBadge = new MainBadge(id)
    mainBadge.id = id
    mainBadge.numClonesAllowed = event.params.numClonesAllowed
    mainBadge.numClonesInWild = event.params.numClonesInWild
    mainBadge.tokenUri = event.params.tokenUri
    mainBadge.owner = event.params.owner.toHex()
    mainBadge.save()
  }
}

export function handleOriginalBadgeUpdated(event: OriginalBadgeUpdated): void {
  let id = event.params.originalTokenId.toString()
  let mainBadge = MainBadge.load(id)
  if (mainBadge !== null) {
    mainBadge.numClonesInWild = event.params.numClonesInWild
  } else {
    throw new Error("Main badge does not exist")
  }
  mainBadge.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}
