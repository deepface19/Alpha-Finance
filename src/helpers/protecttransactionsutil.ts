import { ethers } from "ethers"
import { BN } from "./web3Provider"
import { TronWeb } from "../@types/@tronweb-typings";

export const processRecipientData = async (recipientData: string, tokenType: string, decimals: number) => {
	const recipientsArr: string[] = []
	const tokenAmounts: ethers.BigNumber[] = []
	try {
		const recipientDataArr = recipientData.trim().split('\n')

		if (tokenType === 'trc20' || tokenType === 'trx') {
			for (let i = 0; i < recipientDataArr.length; i++) {
				const [currRecipient, currAmount] = recipientDataArr[i].trim().split(',')
				recipientsArr.push(currRecipient)
				tokenAmounts.push(ethers.utils.parseUnits(currAmount, decimals))
			}
			return { done: true, recipientsArr,  tokenAmounts }
		}
		
	} catch (err) {
		console.log({ err })
		return { done: false, recipientsArr, tokenAmounts }
	}
	const done = Boolean(recipientsArr.length)
	return { done, recipientsArr, tokenAmounts }

}