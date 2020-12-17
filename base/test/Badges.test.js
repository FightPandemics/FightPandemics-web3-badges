// const Badges = artifacts.require("./Badges.sol");
const { expect, assert } = require("chai")
// const { ethers } = require("ethers")


let factory
let badge
// start test block
describe("Badges contract", function() {
  // get contract instance
  before(async function() {
    factory = await ethers.getContractFactory("Badges")
  })

  // deploy contract before each test
  beforeEach(async function() {
    badge = await factory.deploy()
  })

  // test case 1
  it("Deploys", async function() {
    assert.ok(badge.address) // ok makes an asumtion that whatever we pass as a argument that value exists
    assert.notEqual(badge.address, 0x0)
    assert.notEqual(badge.address, "")
    assert.notEqual(badge.address, null)
    assert.notEqual(badge.address, undefined)
  })

  // test case 2
  it("Mints badges", async function() {
    // mint a new token
    const result = await badge.mint("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", 0, "http://sticlalux.ro/bedge.json")
    const totalSupply = await badge.totalSupply()
    const event = result.logs[0].args
    console.log()
    // check
    assert.equal(totalSupply, 1)
    assert.equal(event.tokenId.toNumber(), 1, 'id is correct') // result.logs[0].args.tokenId.toNumber()
    assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
    assert.equal(event.to, accounts[1], 'to is correct')
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
