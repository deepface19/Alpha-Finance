/* global artifacts */
const TRXAlphaProtect = artifacts.require('TRXAlphaProtect')
const Verifier = artifacts.require('IVerifier')
const Hasher = artifacts.require('IHasher')

module.exports = function (deployer) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, TRX_AMOUNT } = process.env
    const verifier = await Verifier.deployed()
    const hasher = await Hasher.deployed()
    const alphaprotect = await deployer.deploy(
      TRXAlphaProtect,
      verifier.address,
      hasher.address,
      TRX_AMOUNT,
      MERKLE_TREE_HEIGHT,
    )
    console.log('TRXAlphaProtect address', alphaprotect.address)
  })
}