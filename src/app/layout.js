// app/layout.js
"use client";
import './globals.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for wallet adapter UI components
import { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { clusterApiUrl } from '@solana/web3.js';

export default function RootLayout({ children }) {
  // Set the network. Use 'mainnet-beta' for production.
  const network = WalletAdapterNetwork.Devnet;

  // Get the endpoint (you can also specify a custom RPC endpoint)
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Configure the wallets you want to support
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <html lang="en">
      <head>
        <title>Solana Wallet Integration</title>
      </head>
      <body>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              {children}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
