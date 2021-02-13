const assert = require('chai').assert;

let factory
let contract
let accounts
const numClonesAllowed = 5
const numClonesRequested = 2
const tokenURI = "http://sticlalux.ro/bedge.json"
let contractOwner
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
    const actualBadgeOwner = await contract.getBadgeOwner(badgeId)
    assert.equal(actualBadgeOwner, contractOwner)
  })

  it("Clones badge", async function() {
    await contract.mint(contractOwner, numClonesAllowed, tokenURI, { from: contractOwner })
    const originalBadgeId = (await contract.getLatestBadgeId()).toNumber()
    await contract.clone(contractOwner, originalBadgeId, numClonesRequested)

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
  /*
  //test case 4
  it("Can set price", async function() {
    // mint badge with token price 0
    await contract.mint(accounts[1], 0, tokenURI, { from: accounts[0] })
    // // token price
    const newBadgePrice = 1020

    const latestId = (await contract.getLatestId()).toNumber()

    // set token price using setPrice() function
    await contract.setPrice(latestId, newBadgePrice)


    const badge = await contract.getBadgesById(latestId)
    const badgePrice = badge[0].toNumber()  // extract priceFinney from badge

    assert.equal(badgePrice, newBadgePrice)
  })

  // test case 5
  it("Can set token URI", async function() {
    // mint badge
    await contract.mint(accounts[1], priceFinney, tokenURI, { from: accounts[0] })

    const newTokenURI = "https://fightpandemics.com"
    const latestId = (await contract.getLatestId()).toNumber()

    // set new token URI
    await contract.setTokenURI(latestId, newTokenURI)

    const badge = await contract.getBadgesById(latestId)
    assert.equal(badge[1], newTokenURI)
  })
  */
})
