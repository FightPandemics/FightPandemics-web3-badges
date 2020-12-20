# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2020-12-16
### Added
- additional verification for token: 
  - verify token age
  - verify sso params
  - website signature
- support for migration
- `jwt` and `queryParams` config moved from toolbox
- prepend `0x` when verifying signed message, to avoid `signature missing v and recoveryParam`

### Changed
- all SSO params have prefix `sso`

### Fixed
- issue with a name of `JwtPayload.ts` file

### Removed
- `refId` is not longer part of token

## [0.4.4] - 2020-12-09
### Fixed
- fix invalid publish of dist/models/JwtPayload file

## [0.4.3] - 2020-12-05
### Removed
- remove default export

## [0.4.2] - 2020-12-04
### Fixed
- make abi part of the source code, so we don't need to use `fs` as it will not work for React

## [0.4.1] - 2020-12-04
### Fixed
- fix restriction about required node version

## [0.4.0] - 2020-12-04
### Changed
- rewrite code to TypeScript

### Fixed
- fix test for `fetchSilkeyEthAddress()`

### Removed
- remove `isEmpty` method from utils

## [0.3.2] - 2020-11-26
### Added
- `generateSSORequestParams` throws on empty PK

### Changed
- join operator for `messageToSign` is now `&`
- `messageToSign` ignores data that are not set (`null` or `undefined`)

### Fixed
- ensure testing `throws` is working correctly

## [0.3.1] - 2020-11-25
### Added
- Logo and badges to README

## [0.3.0] - 2020-11-24
### Added
- option for not checking silkey signature on token verification
- add `userSignatureTimestamp` to jwtPayload model
- support for `redirectMethod` param

### Changed
- change naming convention from `timestamp` to `sigTimestamp`
- change timestamp name for SSO param to `ssoTimestamp`
- `generateSSORequestParams` throws when `redirectUrl` or `cancelUrl` empty

### Fixed
- import ethers lib in a way that is supported by both: react and nodejs app

## [0.2.0] - 2020-11-04
### Added
- eslint
- Methods for signing SSO request 
- jsdocs
- new model: `JwtPayload`
- support for scope:email
- method to fetch silkey public key

### Changed
- Change package name from `silkey-jwt` to `silkey-sdk`

### Removed 
- Token generator

## [0.1.0] - 2020-10-06
### Added 
- Initial version of Silkey generator and validator for JWT
