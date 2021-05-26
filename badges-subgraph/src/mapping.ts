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
