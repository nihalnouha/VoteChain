//SPDX-License-Identifier:UNLICENSED

// pragma solidity ^0.8.18;

// import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
// import "hardhat/console.sol";
// contract votingCantract{

// using Counters for Counters.Counter;
// Counters.Counter public _voterId;
// Counters.Counter public _candidateId;
// address public votingOrganizer;
// //candidate for voting
// struct Candidate{
//     uint256 candidateId;
//     string age;
//     string name;
//     string image;
//     uint256 voteCount;
//     address _address;
//     string ipfs;
// }
// event CandidateCreate(
//      uint256  indexed candidateId,
//     string age,
//     string name,
//     string image,
//     uint256 voteCount,
//     address _address,
//     string ipfs

// );
// address[] public candidateAddress;
// mapping(address=>Candidate) public candidates;
// //End of candidate data//
// //----------VOTER DATA-------------------------------//
// address[] public  votedVoters;
// address[] public votersAddress;

// mapping(address=>Voter) public voters;
// struct Voter{
//     uint256 voter_voterId;
//     string voter_name;
//     string voter_image;
//     address voter_address;

//     uint256 voter_allowed;
//     bool voter_voted;
//     uint256 voter_vote;
//     string voter_ipfs;
// }
// event VoterCreated(

//      uint256  indexed voter_voterId,
//     string voter_name,
//     string voter_image,
//     address voter_address,

//     uint256 voter_allowed,
//     bool voter_voted,
//     uint256 voter_vote,
//     string voter_ipfs
// );
// //end of voter data
// constructor(){
//    votingOrganizer=msg.sender;
// }
// function setCandidate(address  _address,string memory _age,string memory _name,string memory _image,string memory _ipfs) public{
//     require(votingOrganizer==msg.sender,"sorry!! only organiser can create a candidat");
//     _candidateId.increment();
//     uint256 idNumber=_candidateId.current();
//     Candidate storage candidate = candidates[_address];
//     candidate.age=_age;
//      candidate.name=_name;
//      candidate.candidateId=idNumber;
//       candidate.image=_image;
//        candidate.voteCount=0;
//         candidate._address=_address;
//      candidate.ipfs=_ipfs;
//      candidateAddress.push(_address);
//      emit CandidateCreate(
//        idNumber,
//        _age,
//         _name,
//        _image,
//        candidate.voteCount,
//       _address,
//       _ipfs
//      );
// }
// function getCandidate() public view returns(address[] memory ){

//     return candidateAddress;    
// }
// function getCandidateLength()public view returns(uint256){
//     return candidateAddress.length;
// }
// function getCandidatedata(address _address) public view returns( string memory,string memory,uint256,string memory,uint256,string memory,address){
//     return(
//         candidates[_address].age,
//         candidates[_address].name,
//         candidates[_address].candidateId,
//         candidates[_address].image,
//         candidates[_address].voteCount,
//          candidates[_address].ipfs,
//           candidates[_address]._address

//     );

// }
// ////////////////////VOTER SECTION ///////////////////////////////////

// function voterRight(address _address,string memory _name,string  memory  _image,string memory _ipfs ) public {

//     require(votingOrganizer==msg.sender,"sorry!! only organizer can create voter");
//     _voterId.increment();
//     uint256 idNumber=_voterId.current();
//     Voter storage voter =voters[_address];
//     require(voter.voter_allowed==0);
//     voter.voter_allowed=1;
//     voter.voter_name=_name;
//     voter.voter_image=_image;
//     voter.voter_address=_address;
//     voter.voter_voterId=idNumber;
//     voter.voter_vote=1000;
//     voter.voter_voted=false;
//     voter.voter_ipfs=_ipfs;
//     votersAddress.push(_address);
//     emit VoterCreated(
//      idNumber,
//      _name, 
//      _image,
//      _address,
//      voter.voter_allowed,
//     voter.voter_voted,
//     voter.voter_vote,
//     _ipfs);
// }
// function vote(address _candidateAddress, uint256 _candidateVoteId) external{
//     Voter storage voter = voters[msg.sender];
//     require(!voter.voter_voted,"You have already voted");
//     require(voter.voter_allowed!=0,"You haven't right to vote");
//     voter.voter_voted=true;
//     voter.voter_vote=_candidateVoteId;
//     votedVoters.push(msg.sender);
//     candidates[_candidateAddress].voteCount += voter.voter_allowed;


// }
// function getVoterLength() public view returns(uint256){
//     return votersAddress.length;
// }
// function getVoterdata(address _address)public view returns(uint256,
// string memory,
// string memory,
// address ,
// string memory ,
// uint256,
// bool )
// {
//     return (
//         voters[_address].voter_voterId,
//         voters[_address].voter_name,
//         voters[_address].voter_image,
//         voters[_address].voter_address,
//         voters[_address].voter_ipfs,
//         voters[_address].voter_allowed,
//         voters[_address].voter_voted

//     );
// }
// function getVotedVoterList()public view returns(address[] memory){
//     return votedVoters;
// }

// function getVoterList()public view returns(address[] memory){
//     return votersAddress;

// }




// }
// --------

pragma solidity ^0.8.18;

import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract votingCantract {
    using Counters for Counters.Counter;
    Counters.Counter public _voterId;
    Counters.Counter public _candidateId;
    address public votingOrganizer;

    // Candidate for voting
    struct Candidate {
        uint256 candidateId;
        string age;
        string name;
        string image;
        uint256 voteCount;
        address _address;
        string ipfs;
    }

    event CandidateCreate(
        uint256 indexed candidateId,
        string age,
        string name,
        string image,
        uint256 voteCount,
        address _address,
        string ipfs
    );

    address[] public candidateAddress;
    mapping(address => Candidate) public candidates;

    // Voter data
    address[] public votedVoters;
    address[] public votersAddress;
    mapping(address => Voter) public voters;

    struct Voter {
        uint256 voter_voterId;
        string voter_name;
        string voter_image;
        address voter_address;
        uint256 voter_allowed;
        bool voter_voted;
        uint256 voter_vote;
        string voter_ipfs;
    }

    event VoterCreated(
        uint256 indexed voter_voterId,
        string voter_name,
        string voter_image,
        address voter_address,
        uint256 voter_allowed,
        bool voter_voted,
        uint256 voter_vote,
        string voter_ipfs
    );

    constructor() {
        votingOrganizer = msg.sender;
    }

    function setCandidate(
        address _address,
        string memory _age,
        string memory _name,
        string memory _image,
        string memory _ipfs
    ) public {
        require(votingOrganizer == msg.sender, "Sorry!! Only organizer can create a candidate");
        _candidateId.increment();
        uint256 idNumber = _candidateId.current();
        Candidate storage candidate = candidates[_address];
        candidate.age = _age;
        candidate.name = _name;
        candidate.candidateId = idNumber;
        candidate.image = _image;
        candidate.voteCount = 0;
        candidate._address = _address;
        candidate.ipfs = _ipfs;
        candidateAddress.push(_address);
        emit CandidateCreate(
            idNumber,
            _age,
            _name,
            _image,
            candidate.voteCount,
            _address,
            _ipfs
        );
    }

    function getCandidate() public view returns (address[] memory) {
        return candidateAddress;
    }

    function getCandidateLength() public view returns (uint256) {
        return candidateAddress.length;
    }

    function getCandidateData(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            uint256,
            string memory,
            address
        )
    {
        Candidate memory candidate = candidates[_address];
        return (
            candidate.age,
            candidate.name,
            candidate.candidateId,
            candidate.image,
            candidate.voteCount,
            candidate.ipfs,
            candidate._address
        );
    }

    function voterRight(
        address _address,
        string memory _name,
        string memory _image,
        string memory _ipfs
    ) public {
        require(votingOrganizer == msg.sender, "Sorry!! Only organizer can create voter");
        _voterId.increment();
        uint256 idNumber = _voterId.current();
        Voter storage voter = voters[_address];
        require(voter.voter_allowed == 0, "Voter already exists");
        voter.voter_voterId = idNumber;
        voter.voter_name = _name;
        voter.voter_image = _image;
        voter.voter_address = _address;
        voter.voter_allowed = 1;
        voter.voter_voted = false;
        voter.voter_vote = 0;
        voter.voter_ipfs = _ipfs;
        votersAddress.push(_address);
        emit VoterCreated(
            idNumber,
            _name,
            _image,
            _address,
            voter.voter_allowed,
            voter.voter_voted,
            voter.voter_vote,
            _ipfs
        );
    }

    function getVoter() public view returns (address[] memory) {
        return votersAddress;
    }

    function getVoterLength() public view returns (uint256) {
        return votersAddress.length;
    }

    function getVoterData(address _address)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            address,
            uint256,
            bool,
            uint256,
            string memory
        )
    {
        Voter memory voter = voters[_address];
        return (
            voter.voter_voterId,
            voter.voter_name,
            voter.voter_image,
            voter.voter_address,
            voter.voter_allowed,
            voter.voter_voted,
            voter.voter_vote,
            voter.voter_ipfs
        );
    }
}
//---------------
// using Counters for Counters.Counter;
// Counters.Counter public _voterId;
// Counters.Counter public _candidateId;
// address public votingOrganizer;
// //candidate for voting
// struct Candidate{
//     uint256 candidateId;
//     string age;
//     string name;
//     string image;
//     uint256 voteCount;
//     address _address;
//     string ipfs;
// }
// event CandidateCreate(
//      uint256  indexed candidateId,
//     string age,
//     string name,
//     string image,
//     uint256 voteCount,
//     address _address,
//     string ipfs

// );
// address[] public candidateAddress;
// mapping(address=>Candidate) public candidates;
// //End of candidate data//
// //----------VOTER DATA-------------------------------//
// address[] public  votedVoters;
// address[] public voterAddress;

// mapping(address=>Voter) public voters;
// struct Voter{
//     uint256 voter_voterId;
//     string voter_name;
//     string voter_image;
//     address voter_address;

//     uint256 voter_allowed;
//     bool voter_voted;
//     uint256 voter_vote;
//     string voter_ipfs;
// }
// event VoterCreated(

//      uint256  indexed voter_voterId,
//     string voter_name,
//     string voter_image,
//     address voter_address,

//     uint256 voter_allowed,
//     bool voter_voted,
//     uint256 voter_vote,
//     string voter_ipfs
// );
// //end of voter data
// constructor(){
//    votingOrganizer=msg.sender;
// }
// function setCandidate(address  _address,string memory _age,string memory _name,string memory _image,string memory _ipfs) public{
//     require(votingOrganizer==msg.sender,"sorry!! only organiser can create a candidat");
//     _candidateId.increment();
//     uint256 idNumber=_candidateId.current();
//     Candidate storage candidate = candidates[_address];
//     candidate .age=_age;
//      candidate .name=_name;
//      candidate.candidateId=idNumber;
//       candidate .image=_image;
//        candidate .voteCount=0;
//         candidate ._address=_address;
//      candidate.ipfs=_ipfs;
//      candidateAddress.push(_address);
//      emit CandidateCreate(
//        idNumber,
//        _age,
//         _name,
//        _image,
//        candidate.voteCount,
//       _address,
//       _ipfs
//      );
// }
// function getCandidate() public view returns(address[] memory ){

//     return candidateAddress;
// }
// function getCandidateLength()public view returns(uint256){
//     return candidateAddress.length;
// }
// function getCandidatedata(address _address) public view returns( string memory,string memory,uint256,string memory,uint256,string memory,address){
//     return(
//         candidates[_address].age,
//         candidates[_address].name,
//         candidates[_address].candidateId,
//         candidates[_address].image,
//         candidates[_address].voteCount,
//          candidates[_address].ipfs,
//           candidates[_address]._address

//     );

// }
// ////////////////////VOTER SECTION ///////////////////////////////////

// function voterRight(address _address,string memory _name,string  memory  _image,string memory _ipfs ) public {

//     // require(votingOrganizer==msg.sender,"sorry!! only organizer can create voter");
//     _voterId.increment();
//     uint256 idNumber=_voterId.current();
//     Voter storage voter =voters[_address];
//     require(voter.voter_allowed==0);
//     voter.voter_allowed=1;
//     // voter.voter_voterId=idNumber;
//     voter.voter_name=_name;
//     voter.voter_image=_image;
//     // voter.voter_ipfs=_ipfs;
//     voter.voter_address=_address;
//     voter.voter_vote=1000;
//     voter.voter_voted=false;
//     voter.voter_ipfs=_ipfs;
//     voterAddress.push(_address);
//     emit VoterCreated(
//         idNumber,
//      _name, 
//      _image,
//      _address,
//        voter.voter_allowed,
//        voter.voter_voted,
//           voter.voter_vote,
//         _ipfs);
// }
// function vote(address _candidateAddress, uint256 _candidatevoteId) external{
//     Voter storage voter = voters[msg.sender];
//     require(!voter.voter_voted,"You have already voted");
//     require(voter.voter_allowed!=0,"You have not right to vote");
//     voter.voter_voted=true;
//     voter.voter_vote=_candidatevoteId;
//     votedVoters.push(msg.sender);
//     candidates[_candidateAddress].voteCount += voter.voter_allowed;


// }
// function getVoterLength() public view returns(uint256){
//     return voterAddress.length;
// }
// function getVoterdata(address _address)public view returns(uint256,
// string memory,
// string memory,
// address ,
// string memory ,
// uint256,
// bool )
// {
//     return (
//         voters[_address].voter_voterId,
//         voters[_address].voter_name,
//         voters[_address].voter_image,
//         voters[_address].voter_address,
//            voters[_address].voter_ipfs,
//         voters[_address].voter_allowed,
//         voters[_address].voter_voted

//     );
// }
// function getVotedVoterList()public view returns(address[] memory){
//     return votedVoters;
// }

// function getVoterList()public view returns(address[] memory){
//     return voterAddress;

// }

// }








