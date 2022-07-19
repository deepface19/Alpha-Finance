/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useContext, useState } from 'react';

interface ITronLinkContext {
  trxBalance: number;
  wallet: string;
  walletName: string;
  isConnected: boolean;
  isMainNet: boolean;
  connectToWallet(): Promise<boolean>;
}

const TronlinkContext = createContext<ITronLinkContext>({} as ITronLinkContext);

const checkIsMainNet = () => {
  const { host } = window?.tronWeb?.eventServer;

  if (host.includes('shasta')) {
    return true;
  }

  return false;
};

const TronLinkProvider: React.FC = ({ children }) => {
  const [trxBalance, setTrxBalance] = useState(0);
  const [isMainNet, setIsMainNet] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [wallet, setWallet] = useState<string>('');
  const [walletName, setWalletName] = useState<string>('');

  const connectToWallet = useCallback(async (): Promise<boolean> => {
    if (window.tronLink) {
      await window.tronLink.request({ method: 'tron_requestAccounts' });
    }

    if (!window.tronWeb) return false;

    const { name, base58 } = window.tronWeb.defaultAddress;

    if (base58) {
      const isMainnet = checkIsMainNet();

      setWallet(base58);
      setWalletName(name || '');
      setIsConnected(true);
      setIsMainNet(isMainnet);

      const trxAmount = await window.tronWeb.trx.getBalance(base58);

      setTrxBalance(trxAmount);

      tronLinkEventListener();
      return true;
    }

    setIsConnected(false);
    return false;
  }, []);

  const cleanData = useCallback(() => {
    setTrxBalance(0);
    setIsMainNet(false);
    setIsConnected(false);
    setWallet('');
    setWalletName('');
  }, []);

  const tronLinkEventListener = useCallback(() => {
    window.addEventListener('load', connectToWallet);

    window.addEventListener('message', async (msg) => {
      const { message } = msg.data;

      if (!message) return;

      if (
        message.action === 'setAccount' ||
        message.action === 'setNode' ||
        message.action === 'tabReply' ||
        message.action === 'accountsChanged'
      ) {
        if (message.data.address) {
          connectToWallet();
        }

        if (message.action !== 'tabReply' && !message.data.address) {
          cleanData();
        }
      }
    });
  }, []);

  return (
    <TronlinkContext.Provider
      value={{
        wallet,
        walletName,
        connectToWallet,
        isConnected,
        isMainNet,
        trxBalance,
      }}
    >
      {children}
    </TronlinkContext.Provider>
  );
};

const useTronLink = (): ITronLinkContext => {
  const context = useContext(TronlinkContext);

  if (!context) throw new Error('TronLink provider, was not defined');

  return context;
};

export { useTronLink, TronLinkProvider };
