import React from 'react';
import { TronLinkProvider } from '../contexts/tronlink';

const ContextsProvider: React.FC = ({ children }) => {
  return <TronLinkProvider>{children}</TronLinkProvider>;
};

export default ContextsProvider;
