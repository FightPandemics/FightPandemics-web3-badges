// const assert = require('chai').assert;
import { assert } from "chai"
import { describe, before, beforeEach } from "mocha"
import { ethers } from "hardhat"

let factory: any
let contract: any
let accounts: any
const numClonesAllowed = 100
const numClonesRequested = 50
const tokenURI = "http://sticlalux.ro/bedge.json"

let contractOwner: any
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
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const badgeId = (await contract.getLatestBadgeId()).toNumber()
    const actualBadge = await contract.getBadgeById(badgeId)
    const actualNumClonesAllowed = actualBadge[0].toNumber()
    const actualNumClonesInWild = actualBadge[1].toNumber()
    const actualCloneFromId = actualBadge[2].toNumber()
    const actualTokenUri = actualBadge[3]

    assert.equal(badgeId, 1)
    assert.equal(actualNumClonesAllowed, numClonesAllowed)
    assert.equal(actualNumClonesInWild, 0)
    assert.equal(actualCloneFromId, badgeId)
    assert.equal(actualTokenUri, tokenURI)
  })

  it("Has badge owner", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const badgeId = (await contract.getLatestBadgeId()).toNumber()
    const actualBadgeOwner = await contract.ownerOf(badgeId)
    assert.equal(actualBadgeOwner, contractOwner)
  })

  it("Clones badge", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const originalBadgeId = (await contract.getLatestBadgeId()).toNumber()
    await contract.clone(contractOwner, originalBadgeId, numClonesRequested)
    const cloneIds = await contract.getOriginalToCloneMapping(originalBadgeId)

    const actualOriginalBadge = await contract.getBadgeById(originalBadgeId);
    const actualNumClonesInWild = actualOriginalBadge[1].toNumber()
    assert.equal(actualNumClonesInWild, numClonesRequested)

    const actualBadgeIdOfClone = (await contract.getLatestBadgeId()).toNumber()
    const actualClonedBadge = await contract.getBadgeById(actualBadgeIdOfClone)
    const actualTokenUriOfClonedBadge = actualClonedBadge[3]
    assert.equal(actualTokenUriOfClonedBadge, tokenURI)

  })

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

  it("Sets token URI", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })

    const newTokenURI = "https://fightpandemics.com"
    const latestId = (await contract.getLatestBadgeId()).toNumber()
    await contract.setTokenURI(latestId, newTokenURI)

    const actualBadge = await contract.getBadgeById(latestId)
    const actualTokenUri = actualBadge[3]
    assert.equal(actualTokenUri, newTokenURI)
  })

  it("Transfers badge", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const receiver = accounts[1]
    const tokenId = (await contract.getLatestBadgeId()).toNumber()
    await contract.sendBadge(contractOwner, receiver, tokenId)
    const newOwner = await contract.ownerOf(tokenId)
    assert.equal(newOwner, receiver)
  })
})
