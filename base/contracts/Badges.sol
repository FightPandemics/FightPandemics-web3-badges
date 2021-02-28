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
        uint256 numClonesAllowed;
        uint256 numClonesInWild;
        uint256 cloneFromId;
    }

    Badge[] public badges;
    mapping(uint256 => uint256[]) public originalToClones;
    bool public isMintable = true;

    modifier mintable {
        require(
            isMintable == true,
            "New badge are no longer mintable on this contract."
        );
        _;
    }

    constructor () public {
        // If the array is new, skip over the first index.
        if (badges.length == 0) {
            Badge memory _dummyBadge = Badge({
                numClonesAllowed: 0,
                numClonesInWild: 0,
                cloneFromId: 0
            });
            badges.push(_dummyBadge);
        }
    }

    function mint(
        address _to,
        uint256 _numClonesAllowed,
        string memory _tokenUri
    ) public mintable onlyOwner returns (uint256 tokenId) {
        Badge memory _badge = Badge({
            numClonesAllowed: _numClonesAllowed,
            numClonesInWild: 0,
            cloneFromId: 0
        });

        _tokenIds.increment();
        tokenId = _tokenIds.current();

        badges.push(_badge);
        badges[tokenId].cloneFromId = tokenId;

        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _tokenUri);
    }

    function clone(
        address _to,
        uint256 _tokenId,
        uint256 _numClonesRequested
    ) public
    mintable
    onlyOwner {
        Badge memory _badge = badges[_tokenId];
        require(_badge.numClonesInWild + _numClonesRequested <= _badge.numClonesAllowed,
            "No. of clones requested exceed no. of clones allowed"
        );

        uint256[] memory cloneIds = new uint256[](_numClonesRequested);
        _badge.numClonesInWild += _numClonesRequested;
        badges[_tokenId] = _badge;

        for (uint i = 0; i < _numClonesRequested; i++) {
            _tokenIds.increment();
            uint256 newTokenId = _tokenIds.current();
            cloneIds[i] = newTokenId;
            _safeMint(_to, newTokenId);

            string memory  _tokenUri = tokenURI(_tokenId);
            _setTokenURI(newTokenId, _tokenUri);
        }

        originalToClones[_tokenId] = cloneIds;
    }

    function getOriginalToCloneMapping(
        uint256 _tokenId
    ) public
    view
    returns (uint256[] memory) {
        return originalToClones[_tokenId];
    }

    function burn(uint256 _tokenId) public onlyOwner {
        Badge memory _badge = badges[_tokenId];
        uint256 originalId = _badge.cloneFromId;
        if (_tokenId != originalId) {
            Badge memory _originalBadge = badges[originalId];
            _originalBadge.numClonesInWild -= 1;
            badges[originalId] = _originalBadge;
        }
        delete badges[_tokenId];
        _burn(_tokenId);
    }

    function setTokenURI(uint256 _tokenId, string memory _tokenURI)
        public
        onlyOwner
    {
        _setTokenURI(_tokenId, _tokenURI);
    }

    function getBadgeById(uint256 _tokenId)
        public
        view
        returns (uint256 numClonesAllowed,
            uint256 numClonesInWild,
            uint256 cloneFromId,
            string memory tokenUriInfo
        )
    {
        Badge memory _badge = badges[_tokenId];
        numClonesAllowed = _badge.numClonesAllowed;
        numClonesInWild = _badge.numClonesInWild;
        cloneFromId = _badge.cloneFromId;
        tokenUriInfo = tokenURI(_tokenId);
    }

    function getLatestBadgeId() public view returns (uint256 tokenId) {
        if (badges.length == 0) {
            tokenId = 0;
        } else {
            tokenId = badges.length - 1;
        }
    }

    function setMintable(bool _isMintable) public onlyOwner {
        isMintable = _isMintable;
    }

    function sendBadge(
        address _from,
        address _to,
        uint256 _tokenId
    ) public onlyOwner {
        safeTransferFrom(_from, _to, _tokenId);
    }
}
