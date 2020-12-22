// const Badges = artifacts.require("./Badges.sol");
const { expect, assert } = require("chai")
// const { ethers } = require("ethers")


let factory
let contract
let accounts
let priceFinney = 2
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
    assert.ok(contract.address) // ok makes an asumtion that whatever we pass as a argument that value exists
    assert.notEqual(contract.address, 0x0)
    assert.notEqual(contract.address, "")
    assert.notEqual(contract.address, null)
    assert.notEqual(contract.address, undefined)
  })

  // test case 2
  it("Mints badges", async function() {
    // mint a new token
    await contract.mint(accounts[1], priceFinney, tokenURI, {from: accounts[0]})

    // get latest badge ID
    let badgeId = (await contract.getLatestId()).toNumber()

    // get badge by ID
    let badge = await contract.getBadgesById(badgeId)
    let actualBadge = [badge[0].toNumber(), badge[1]] // formated for assertions

    // the badge that we expect
    let expectedBadge = [priceFinney, tokenURI]

    assert.deepEqual(actualBadge, expectedBadge)
    assert.equal(await contract.tokenURI(badgeId), tokenURI)
    assert.equal(await contract.ownerOf(badgeId), accounts[1])
  })

  // test case 3
  it("Burns badges", async function() {
    // mint badge first
    await contract.mint(accounts[1], priceFinney, tokenURI, {from: accounts[0]})

    // check supply
    let totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 1, 'total supply 1')

    let latestId = await contract.getLatestId()
    // burn it
    // console.log(latestID.toNumber())
    await contract.burn(latestId.toNumber());

    //check total supply
    totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 0, 'token was burned')
  })

  //test case 4
  it("Can set price", async function() {
    // mint badge with token price 0
    await contract.mint(accounts[1], 0, tokenURI, {from: accounts[0]})
    // // token price
    const newBadgePrice = 1020;

    const latestId = (await contract.getLatestId()).toNumber()

    // set token price using setPrice() function
    await contract.setPrice(latestId, newBadgePrice)

    // extract priceFinney from badge
    const badge = await contract.getBadgesById(latestId)
    const badgePrice = badge[0].toNumber()

    assert.equal(badgePrice, newBadgePrice)
  })
})

/*
let accounts;
let latestId;
beforeEach(async () => {

  accounts = await web3.eth.getAccounts();
  contract = await Badges.deployed()
  latestId = await contract.getLatestId();
});

describe('Deploy', () => {
  it('contract has an address', () => {
    assert.ok(contract.address) // ok makes an asumtion that whatever we pass as a argument that value exists
    assert.notEqual(contract.address, 0x0)
    assert.notEqual(contract.address, '')
    assert.notEqual(contract.address, null)
    assert.notEqual(contract.address, undefined)
  })
})

describe('Token mint', () => {
  it('can mint', async () => {
    // mint a new token
    const result = await contract.mint('0xf17f52151EbEF6C7334FAD080c5704D77216b732', 0, 'http://sticlalux.ro/bedge.json')
    const totalSupply = await contract.totalSupply()
    const event = result.logs[0].args
    console.log()
    // check
    assert.equal(totalSupply, 1)
    assert.equal(event.tokenId.toNumber(), 1, 'id is correct') // result.logs[0].args.tokenId.toNumber()
    assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
    assert.equal(event.to, accounts[1], 'to is correct')
  });
  after
})

describe('Token burn', () => {
  it('can burn', async () => {
    // check supply
    let totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 1, 'total supply 1')
    // burn it

    // console.log(latestID.toNumber())
    await contract.burn(latestId.toNumber());

    //check total supply
    totalSupply = await contract.totalSupply()
    assert.equal(totalSupply.toNumber(), 0, 'token was burned')
  })
})
describe('Set Price', () => {
  // it('total supply 0', async () => {
  //   // check if the total supply is 0
  //   const totalSupply = await contract.totalSupply()
  //   assert.strictEqual(totalSupply.toNumber(), 0)

  // })

  it('It can set a price', async () => {
    // mint a new token with price: 0
    await contract.mint('0xf17f52151EbEF6C7334FAD080c5704D77216b732', 0, 'http://sticlalux.ro/bedge.json')
    // token price
    const tokenPrice = 1020;

    // set token price using setPrice() function
    const result = await contract.setPrice(latestId.toNumber(), tokenPrice)
    const status = result.receipt.status;
    const totalSupply = await contract.totalSupply();
    // check the transaction
    assert.strictEqual(status, true)
    const ownerOf = await contract.ownerOf(2)
    console.log(totalSupply.toNumber(), latestId.toNumber(), ownerOf)
    // await contract.burn(1);

  })

})




  // it('It can set a tokenURI', async () => {
  //   // mint a new token
  //   const totalSupply = await contract.totalSupply()
  //   // set token URI using setTokenURI() function
  //   // const result = await contract.setTokenURI(1, 'http://sticlalux.ro/bedge.json')
  //   const tokenURIinfo = await contract.tokenURI(2);
  //   const tokenExist = await contract._exists(2)
  //   //  const status = result.receipt.status;
  //   // check the transaction
  //   console.log(tokenExist)
  //   console.log(totalSupply.toNumber())
  //   console.log(tokenURIinfo)

  //console.log(result);
  //assert.strictEqual(status, true)
  //})

*/
