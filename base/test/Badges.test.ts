// const assert = require('chai').assert;
import chai, { assert, expect } from "chai"
import { describe, before, beforeEach } from "mocha"
import { ethers } from "hardhat"
import { solidity } from "ethereum-waffle"

chai.use(solidity)

let factory: any
let contract: any
let accounts: any
const numClonesAllowed = 100
const numClonesRequested = 50
const tokenURI = "http://sticlalux.ro/bedge.json"

let contractOwner: string
// start test block
describe("Badges contract", function() {
  // get contract instance
  before(async function() {
    factory = await ethers.getContractFactory("Badges")
    accounts = await ethers.provider.listAccounts()
    contractOwner = accounts[0]
  })

  // deploy contract before each test
  beforeEach(async function() {
    contract = await factory.deploy()
  })

  it("Deploys", async function() {
    assert.ok(contract.address) // ok makes an asumtion that we pass as a argument that value exists
    assert.notEqual(contract.address, 0x0)
    assert.notEqual(contract.address, "")
    assert.notEqual(contract.address, null)
    assert.notEqual(contract.address, undefined)
  })

  it("Mints badge", async function() {

    // expect Minted(tokenId, numClonesAllowed, numClonesInWild, tokenURI, owner) event
    expect(await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner }))
      .to.emit(contract, "BadgeMinted")
      .withArgs(1, numClonesAllowed, 0, tokenURI, contractOwner)
  })


  it("Has badge owner", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const badgeId = (await contract.getLatestBadgeId()).toNumber()
    const actualBadgeOwner = await contract.ownerOf(badgeId)
    assert.equal(actualBadgeOwner, contractOwner)
  })

  it("Sets token URI", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })

    const newTokenURI = "https://fightpandemics.com"
    const latestId = (await contract.getLatestBadgeId()).toNumber()
    await contract.setTokenURI(latestId, newTokenURI)

    const actualBadge = await contract.getBadgeById(latestId)
    const actualTokenUri = actualBadge[3]
    assert.equal(actualTokenUri, newTokenURI)
  })


  it("Clones badge", async function() {

    // mint badge first
    await contract.mint(contractOwner, numClonesRequested, tokenURI, { from: contractOwner })

    // expect two events:
    // 1. OriginalBadgeUpdated(originalTokenId, numClonesInWild)
    // 2. BadgeCloned(clonedTokenId, cloneFromId, tokenUri, owner)
    expect(await contract.clone(contractOwner, 1, numClonesRequested))
      .to.emit(contract, "OriginalBadgeUpdated")
        .withArgs(1, numClonesRequested)
      .to.emit(contract, "BadgeCloned")
        .withArgs(2, 1, tokenURI, contractOwner)
  })

  /*
  it("Burns badge", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const originalBadgeId = (await contract.getLatestBadgeId()).toNumber()
    await contract.clone(contractOwner, originalBadgeId, numClonesRequested)

    const currentSupply = (await contract.totalSupply()).toNumber()
    const actualBadgeIdOfClone = (await contract.getLatestBadgeId()).toNumber()
    await contract.burn(actualBadgeIdOfClone)

    const actualOriginalBadge = await contract.getBadgeById(originalBadgeId);
    const actualNumClonesInWild = actualOriginalBadge[1].toNumber()

    assert.equal(actualNumClonesInWild, numClonesRequested - 1)
  })

  it("Transfers badge", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const receiver = accounts[1]
    const tokenId = (await contract.getLatestBadgeId()).toNumber()
    await contract.sendBadge(contractOwner, receiver, tokenId)
    const newOwner = await contract.ownerOf(tokenId)
    assert.equal(newOwner, receiver)
  })
  */
})
