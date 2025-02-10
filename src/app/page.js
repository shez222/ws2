// app/page.js
'use client'; // This directive is required for client-side interactivity in Next.js 13 App Router

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Solana Wallet Integration with Next.js 13+</h1>
      {/* WalletMultiButton displays options for Phantom, Solflare, etc. */}
      <WalletMultiButton />
      {publicKey ? (
        <div style={{ marginTop: '1rem' }}>
          <p>
            <strong>Wallet Address:</strong> {publicKey.toBase58()}
          </p>
        </div>
      ) : (
        <p style={{ marginTop: '1rem' }}>Please connect your wallet.</p>
      )}
    </div>
  );
}
