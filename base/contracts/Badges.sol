pragma solidity 0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Badges is ERC721("FightPandemics.com Badges", "FPB"), Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    struct Badge {
        uint256 priceFinney;
        uint256 numClonesAllowed;
        uint256 numClonesInWild;
        uint256 cloneFromId;
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

    function mint(
        address _to,
        uint256 _priceFinney,
        uint256 _numClonesAllowed,
        string memory _tokenURI
    ) public mintable onlyOwner returns (uint256 tokenId) {
        Badge memory _badge = Badge({
            priceFinney: _priceFinney,
            numClonesAllowed: _numClonesAllowed,
            numClonesInWild: 0,
            cloneFromId: 0
        });

        _tokenIds.increment();
        tokenId = _tokenIds.current();

        badges.push(_badge);
        badges[tokenId].cloneFromId = tokenId;

        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);

        return tokenId;
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
