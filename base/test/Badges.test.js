const assert = require('chai').assert;

let factory
let contract
let accounts
let numClonesAllowed = 1
let tokenURI = "http://sticlalux.ro/bedge.json"
// start test block
describe("Badges contract", function() {
  // get contract instance
  before(async function() {
    factory = await ethers.getContractFactory("Badges")
    accounts = await ethers.provider.listAccounts()
  })

  // deploy contract before each test
  beforeEach(async function() {
    contract = await factory.deploy()
  })

  // test case 1
  it("Deploys", async function() {
    assert.ok(contract.address) // ok makes an asumtion that we pass as a argument that value exists
    assert.notEqual(contract.address, 0x0)
    assert.notEqual(contract.address, "")
    assert.notEqual(contract.address, null)
    assert.notEqual(contract.address, undefined)
  })

  // test case 2
  it("Mints badge", async function() {
    await contract.mint(accounts[1], numClonesAllowed, tokenURI, { from: accounts[0] })

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
  /*
  // test case 3
  it("Burns badges", async function() {
    // mint badge first
    await contract.mint(accounts[1], priceFinney, tokenURI, { from: accounts[0] })

    // check supply
    let totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 1, "total supply 1")

    let latestId = await contract.getLatestId()
    // burn it
    // console.log(latestID.toNumber())
    await contract.burn(latestId.toNumber())

    //check total supply
    totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 0, "token was burned")
  })

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
