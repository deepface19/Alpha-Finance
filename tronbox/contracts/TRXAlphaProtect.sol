pragma solidity ^0.7.0;

import "./Alphaprotect.sol";

contract TRXAlphaProtect is AlphaProtect {
  constructor(
    IVerifier _verifier,
    IHasher _hasher,
    uint256 _denomination,
    uint32 _merkleTreeHeight
  ) AlphaProtect(_verifier, _hasher, _denomination, _merkleTreeHeight){}

  function _processDeposit() internal override {
    require(msg.value == denomination, "Please send `mixDenomination` TRX along with transaction");
  }

  function _processWithdraw(
    address payable _recipient,
    address payable _relayer,
    uint256 _fee,
    uint256 _refund
  ) internal override {
    // sanity checks
    require(msg.value == 0, "Message value is supposed to be zero for ETH instance");
    require(_refund == 0, "Refund value is supposed to be zero for ETH instance");

    (bool success, ) = _recipient.call{ value: denomination - _fee }("");
    require(success, "payment to _recipient did not go thru");
    if (_fee > 0) {
      (success, ) = _relayer.call{ value: _fee }("");
      require(success, "payment to _relayer did not go thru");
    }
  }
}