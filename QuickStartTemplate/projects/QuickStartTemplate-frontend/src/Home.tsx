/*
  Home.tsx - Carbon Credit Tokenization dashboard (simplified)
  This file replaces the original cyberpunk demo UI with a clearer dashboard
  focused on non-technical users: credits earned, CO2 reduced, verified projects
  and a simple ESG report generator. The components are intentionally minimal
  and use mock data for a demo/prototype. Integrate real APIs and contract
  calls later.
*/

import { useWallet } from '@txnlab/use-wallet-react'
import React from 'react'
import ConnectWallet from './components/ConnectWallet'
import Dashboard from './components/Dashboard'

const Home: React.FC = () => {
  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-green-600 text-white flex items-center justify-center font-bold">CC</div>
          <div>
            <div className="text-lg font-semibold">CarbonChain</div>
            <div className="text-xs text-gray-500">Transparent carbon credit tokenization</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600">{activeAddress ?? 'No wallet connected'}</div>
          <ConnectWallet openModal={false} closeModal={() => {}} />
        </div>
      </nav>

      <main className="w-full max-w-6xl px-6 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">CarbonChain dashboard</h1>
          <p className="text-gray-600 mt-1 max-w-2xl">An intuitive interface to tokenize verified carbon credits, track retirements, and generate ESG-compliant reports. Built on Algorand and designed for DPI-first integrations.</p>
        </header>

        <Dashboard address={activeAddress ?? null} />
      </main>

      <footer className="w-full max-w-6xl px-6 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} CarbonChain — prototype. For demo only.
      </footer>
    </div>
  )
}

export default Home
