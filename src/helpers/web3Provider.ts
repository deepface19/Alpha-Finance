import { trx } from "../@types/@tronweb-typings";

const tronWeb = (window as any).tronWeb;

declare global {
	interface Window {
		sign: trx["sign"]
		chainId: 2
		wallet: string
	}
}

export const BN = tronWeb.BigNumber.from

export const getsign = () => {
	const provider = new tronWeb.providers.Web3Provider(window.tronLink)
	return provider.getsign()
}
export const isFunction = (obj: unknown): obj is (...args: any[]) => any => obj instanceof Function;

export const loadWeb3 = async (setWallet: any, setChainId: any, setWalletMsg: any) => {
	if (!window.tronLink) {
	} else {
		const sign = getsign()
		const chainId = await sign.getChainId()
		setChainId(chainId)
		const accounts = window.tronLink.request({ method: 'tron_requestAccounts' })
		handleAccountChanged(accounts, setWallet, setWalletMsg)
		window.tronLink.on('chainChanged', () => window.location.reload())
		window.tronLink.on('accountsChanged', (accounts: string[]) => handleAccountChanged(accounts, setWallet, setWalletMsg))
	}
}
export const handleAccountChanged = (accounts: string[],
	setWallet: any, setWalletMsg: any,) => {
	if (accounts.length > 0) {
		setWallet(accounts[0])
		setWalletMsg('')
	}
	else {
		setWallet('')
	}
}

export const getExplorerUrls = (_chainId: number) => {
	if (_chainId === 2) return 'https://shasta.tronscan.org/'
	if (_chainId === 1) return 'https://tronscan.io/'
	return ''
}
export const getTokenUrlPrefix = (_chainId: number) => {
	if (_chainId === 2) return 'https://shasta.tronscan.org//address/'

	if (_chainId === 1) return 'https://tronscan.io//address/'

	return ''
}

