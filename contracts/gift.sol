// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GiftToArtist {
    address public owner;

    struct Gift {
        string spaceTitle;
        address artistAddress;
        string artistName;
        uint256 amount;
        string comments;
        bool claimed;
    }

    mapping(address => Gift) public gifts;

    event GiftSent(
        string spaceTitle,
        address indexed artistAddress,
        string artistName,
        uint256 amount,
        string comments
    );

    event GiftClaimed(address indexed artistAddress, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier notClaimed(address artistAddress) {
        require(!gifts[artistAddress].claimed, "Gift already claimed");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function sendGift(
        string memory _spaceTitle,
        address _artistAddress,
        string memory _artistName,
        uint256 _amount,
        string memory _comments
    ) external onlyOwner notClaimed(_artistAddress) {
        gifts[_artistAddress] = Gift({
            spaceTitle: _spaceTitle,
            artistAddress: _artistAddress,
            artistName: _artistName,
            amount: _amount,
            comments: _comments,
            claimed: false
        });

        emit GiftSent(_spaceTitle, _artistAddress, _artistName, _amount, _comments);
    }

    function claimGift() external {
        require(gifts[msg.sender].claimed == false, "Gift already claimed");
        require(gifts[msg.sender].amount > 0, "No gift available for claiming");

        gifts[msg.sender].claimed = true;
        payable(msg.sender).transfer(gifts[msg.sender].amount);

        emit GiftClaimed(msg.sender, gifts[msg.sender].amount);
    }
}