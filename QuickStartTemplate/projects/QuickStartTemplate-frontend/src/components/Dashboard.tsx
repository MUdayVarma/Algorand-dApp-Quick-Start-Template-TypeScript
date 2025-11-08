import React, { useMemo } from 'react'
import ESGReport from './ESGReport'
import MetricsCard from './MetricsCard'

interface DashboardProps {
  address: string | null
}

// Mock data for initial prototype. Replace with real contract/API calls.
const mockMetrics = {
  creditsEarned: 1250.5, // in tonnes CO2e
  co2Reduced: 1250.5, // same unit
  verifiedProjects: 8,
  tokenizedCredits: 1024,
}

const projects = [
  { id: 'proj-1', name: 'Mangrove Restoration - Bali', credits: 420.5, verified: true },
  { id: 'proj-2', name: 'Solar Microgrid - Kenya', credits: 300, verified: true },
  { id: 'proj-3', name: 'Efficient Cookstoves - India', credits: 200, verified: true },
]

const Dashboard: React.FC<DashboardProps> = ({ address }) => {
  const metrics = useMemo(() => mockMetrics, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 bg-white p-6 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Your impact</h2>
            <p className="text-sm text-gray-500">Overview of tokenized credits and environmental outcomes</p>
          </div>
          <div className="text-sm text-gray-600">{address ?? 'Guest view'}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <MetricsCard label="Credits (tCO2e)" value={metrics.creditsEarned} />
          <MetricsCard label="CO₂ Reduced (t)" value={metrics.co2Reduced} />
          <MetricsCard label="Verified Projects" value={metrics.verifiedProjects} />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Verified projects</h3>
          <ul className="space-y-2">
            {projects.map((p) => (
              <li key={p.id} className="p-3 border rounded flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-gray-500">Credits: {p.credits} tCO₂e • {p.verified ? 'Verified' : 'Pending'}</div>
                </div>
                <div>
                  <button className="text-sm px-3 py-1 bg-green-600 text-white rounded">View</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <aside className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-medium mb-3">Quick actions & reports</h3>
        <div className="space-y-3">
          <ESGReport metrics={metrics} projects={projects} />
          <div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Tokenize credits</button>
          </div>
          <div>
            <button className="w-full border py-2 rounded">Retire credits</button>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Dashboard
