# Silkey SDK for NodeJS

![Silkey Logo](https://raw.githubusercontent.com/Silkey-Team/brand/master/silkey-word-black.png)

[![GitHub version](https://badge.fury.io/gh/Silkey-Team%2Fsilkey-sdk.svg)](https://badge.fury.io/gh/Silkey-Team%2Fsilkey-sdk)
[![npm version](https://badge.fury.io/js/%40silkey%2Fsdk.svg)](https://badge.fury.io/js/%40silkey%2Fsdk)

SDK package for integrate with Silkey standard of Decentralised SSO.

[See list of all available methods](./DOCS.md).

## SDK for other platforms

- [Silkey SDK for Ruby](https://rubygems.org/gems/silkey-sdk) [![Gem Version](https://badge.fury.io/rb/silkey-sdk.svg)](https://badge.fury.io/rb/silkey-sdk)

## Smart Contracts

### registryAddress
- Sandbox/Rinkeby: [0x885B924491Fa7dF268f20df91B06b2C23D68490F](https://rinkeby.etherscan.io/address/0x885B924491Fa7dF268f20df91B06b2C23D68490F)

## Usage

### Sign In With Silkey

Redirect user to Silkey with parameters:

| Parameter           | Required  | Type     | Desc 
| ------------------- |:---------:| -------- | ----- 
| ssoSignature        | yes       | string   | Domain owner signature
| ssoTimestamp        | yes       | number   | Time of signing SSO request
| ssoRedirectUrl      | yes       | string   | Where to redirect user with token after sign in
| ssoCancelUrl        | yes       | string   | Where to redirect user on error
| ssoRedirectMethod   | no        | GET/POST | How to redirect user after sign in, default is POST
| ssoRefId            | no        | string   | It will be return with user token, you may use it to identify request
| ssoScope            | no        | string   | Scope of data to return in a token payload: `id` (default) returns only user address, `email` returns address + email


#### Redirect URLs

- Live: soon
- Sandbox: https://athena-sandbox.silkey.io

When user back to you page with JWT token, validate it and login user.

### Installation

```shell script
npm i --save @silkey/sdk
```

### Silkey Integration Guide

#### Services

From developer perspective, there are two main services you should care about:
1. Apollo - which registers the domain name of your application
2. Athena - which you redirect to and authenticates the user

When user *Sign In with Silkey*, Athena do background check for your website (using your domain name).
If your request for Sign In is valid (signature match the domain owner) Athena proceeds with Sign In.

##### Information About Sandbox vs. Production

The version of Apollo that is used is determined by the Athena version, and isn't specified by the developer.
Sandbox uses an ethereum test network, where the ether has no monetary value, and the Production is on the main ethereum network.

When in development, the sandbox version of Athena should be used.

##### Services URLs

The Sandbox 
- https://athena-sandbox.silkey.io
- https://apollo-sandbox.silkey.io
- https://demo-sandbox.silkey.io (go and try it!)

The Production
- Soon

#### Needed Preperations:

1. Generate an ethereum wallet for the application, this wallet will be linked to the web domain of the application

    - Visit https://metamask.io
    - Download and add the extension to your browser
    - Create an account for the application
    - Click on account details then export private key to view and write down the private key
    
1. Authenticate the domain of the application in Apollo with the generated wallet:

   Visit the propper Apollo url (see above), there is a wizzard that will guide you through all this steps:
    - Login with metamask
    - Click on Register Domain and enter domain of your application
    - Click "Connect Existing Wallet" to use the metamask account
    - Generate a challenge and add it into the DNS TXT record of the domain
    - Verify the domain with DNS TXT records challenge
    - Add logo url that will be displayed when a user is loging in using silkey
    - Send a transaction which will save the registration

    Some amount of ether is used to send transaction to blockchain.
    To obtain free ether on the Sandbox (Rinkeby test network) visit https://faucet.rinkeby.io/
    
3.  Export private key from MetaMask and store it in a secure way inside your application. You will need it to generate the request for *Silkey Sing In*.

#### On SignIn page

```javascript
import silkeySdk from "@silkey/sdk";

// The needed data varaibles are:
// ssoRedirectUrl: Where the user is redirected after auth
// ssoCancelUrl: Where the user is redirected if they cancel authentication
// ssoScope: "email" or "id" email if you want access to the users email, otherwise id
// ssoRefId: (optional) This data will be returned to the program after authentication, 
//   and can be used to track previous actions before signup
// ssoTimestamp: (Optional) Time when params were generated, will be automatically generated if not present

// Example:
const requestParams = silkeySdk.generateSSORequestParams(privateKey, {
  ssoRedirectUrl: "https://domain/callback",
  ssoCancelUrl: "https://domain/cancel",
  ssoScope: "email",
  ssoRefId: "54321",
});

// Add the generated params to silkey url as queryString.
// ATHENA_URL: The url of the Athena webpage that is authenticating the user

// Example:
const silkeyRedirect = new URL((ATHENA_URL = "https://athena-sandbox.silkey.io"));

Object.entries(requestParams).forEach(([key, param]) => {
  silkeyRedirect.searchParams.append(key, param);
});

// Rediect to silkeyRedirect
```

#### On Callback Page 

Callback will be done via POST (default) or GET, based on `ssoRedirectMethod`.

Callback params contains all sso parameters that were used to make SSO call + `token`.

`token` - get if from request params

`ssoRequestParams` - get if from request params (it can be send via POST or GET, based on `ssoRedirectMethod`) 

```javascript
import silkeySdk from "@silkey/sdk";

// providerUri: A web3 provider URI. ie: 'https://infura.io/v3/:infuraId' register at infura.io to get infuraId
// registryAddress: Address of silkey smart contract registry, see list of addresses in the registryAddress section of README.md
const silkeyEthAddress = await silkeySdk.fetchSilkeyEthAddress(providerUri, registryAddress);

// this simple example is for GET method, we recommend using POST as `ssoRedirectMethod`
const callbackParams = new URL(window.location).searchParams;

const {token} = callbackParams;

// Using silkeyEthAddress is optional but recomended for ssoScope=email
const jwtPayload = silkeySdk.tokenPayloadVerifier(token, callbackParams, 'websiteOwnerEthAddress', silkeyEthAddress);

if (jwtPayload === null) {
  // authorization failed
} else {
  const { address, email, migration } = jwtPayload;
  // address - use this as ID of the user

  if (migration) {
    // do migration: see Migration section of this document
  } else {
    // login or sign in user as usual
  }
}
```

`jwtPayload` is type of `silkeySdk.Models.JwtPayload`, [see details for properties](./DOCS.md) :

## Recommendations

Each time you get user token, you should check is user data are up to date. 

Currently, we only support `scope:email` so you should check if email in token payload changed. 
If yes, you should update it, because old email might be not valid any more.

## Migration

Migration process assumes, that your website is already prepared to *Sing in With Silkey*.

When user already has account on your website, he can migrate to Silkey and use *Sing in With Silkey* from now on.

Migration process can vary and it depends entirely on how your website operates. 
But this is the general flow how it should look like:

1. User click *Sign In with Silkey* on your website as usual. Nothing changes here.
1. When user get back to you with a token, you need to run migration check:
    ```javascript
   const { migration } = jwtPayload;

   if (migration) {
     // do migration
   } else {
     // login or sign in user as usual
   }
   ```
1. When you detect that this is a migration, you need to do the following:
    1. store token in current user session
    1. redirect user to login page but **hide Silkey option** - user must login to his account using his current credentials
    1. when user logins in, update user profile with Silkey ID from the token
    1. migration is over - from now user will be able to login with Silkey.
