import { ethers } from "ethers"
import { BN, getsign } from "./web3Provider"

const tronWeb = (window as any).tronWeb;

const TRXAlphaProtectAbi = [
	'function _processDeposit()  internal override',
	'function _processWithdraw( address payable _recipient, address payable _relayer, uint256 _fee, uint256 _refund) internal override',
]
export const getTRXAlphaProtectAddress = (_chainId: number) => {
	if (_chainId === 2 ) return 'TBqZEqe6oFfE7U2mBNFkuhBEZYVcajpARa'

	return 'TBqZEqe6oFfE7U2mBNFkuhBEZYVcajpARa'
}
export const getTRXAlphaProtectcontract = (currChain: number) => {
	const sign = getsign()
	const TRXAlphaProtectAddr = getTRXAlphaProtectAddress(currChain)
	return new tronWeb.contract(TRXAlphaProtectAddr, TRXAlphaProtectAbi, sign)
}

export const _proccesDepositToTRXAlphaProtect = async (tokenType: string, tokenAddr: string, amounts: ethers.BigNumber[]) => {
	try {
        const sign = getsign()
		const currChain = await sign.getChainId()
		const trxAlphaProtectcontract = getTRXAlphaProtectcontract(currChain)
		let txn
		if (tokenType === 'trx') {
			let totalAmount = BN('0')
			for (let i = 0; i < amounts.length; i++) {
				totalAmount = totalAmount.add(amounts[i])
			}
			txn = await trxAlphaProtectcontract._processDeposit(amounts)
		}
		else if (tokenType === 'trc20') {
			txn = await trxAlphaProtectcontract._processDeposit(tokenAddr, amounts)
		} else {
			return { isTransferred: false, hash: '' }
		}
		await txn.wait()
		return { isTransferred: true, hash: txn.hash }
	} catch (err) {
		console.log(err)
		return { isTransferred: false, hash: '' }
	}
}