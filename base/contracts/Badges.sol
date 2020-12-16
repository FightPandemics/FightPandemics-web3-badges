pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ECR721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

/// @title Fight Pandemics Badges
/// SPDX-License-Identifier: MIT
/// Daniel Ses ses.capital  for fithtPandemics.com
contract Badges is ERC721("FightPandemics.com Badges", "FPB"), Ownable {
    using SafeMath for uint256;

    struct Badge {
        uint256 priceFinney;
    }

    Badge[] public badges;

    bool public isMintable = true;

    modifier mintable {
        require(
            isMintable == true,
            "New badge are no longer mintable on this contract."
        );
        _;
    }

    constructor() public {
        // If the array is new, skip over the first index.
        if (badges.length == 0) {
            Badge memory _dummyBadge = Badge({priceFinney: 0});
            badges.push(_dummyBadge);
        }
    }

    function mint(
        address _to,
        uint256 _priceFinney,
        string memory _tokenURI
    ) public mintable onlyOwner returns (uint256 tokenId) {
        Badge memory _badge = Badge({priceFinney: _priceFinney});
        // The new badge is pushed onto the array and minted
        // Note that Solidity uses 0 as a default value when an item is not found in a mapping.
        badges.push(_badge);
        tokenId = badges.length - 1;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
    }

    function burn(uint256 _tokenId) public onlyOwner {
        //  Badge memory _badge = badges[_tokenId];
        _burn(_tokenId);
        delete badges[_tokenId];
    }

    function setPrice(uint256 _tokenId, uint256 _newPriceFinney)
        public
        onlyOwner
    {
        //  require(_exists(_tokenId), "ERC721: The token donse not exist");
        Badge memory _badge = badges[_tokenId];

        _badge.priceFinney = _newPriceFinney;
        badges[_tokenId] = _badge;
    }

    function setTokenURI(uint256 _tokenId, string memory _tokenURI)
        public
        onlyOwner
    {
        _setTokenURI(_tokenId, _tokenURI);
    }

    function getBadgesById(uint256 _tokenId)
        public
        view
        returns (uint256 priceFinney, string memory tokenURIinfo)
    {
        Badge memory _badge = badges[_tokenId];
        priceFinney = _badge.priceFinney;
        tokenURIinfo = tokenURI(_tokenId);
    }

    function getLatestId() public view returns (uint256 tokenId) {
        if (badges.length == 0) {
            tokenId = 0;
        } else {
            tokenId = badges.length - 1;
        }
    }

    function distroyContract() public onlyOwner {
        selfdestruct(msg.sender);
    }
}
