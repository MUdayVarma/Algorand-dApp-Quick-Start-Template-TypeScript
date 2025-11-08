import React from 'react';

interface ESGReportProps {
  metrics: { creditsEarned: number; co2Reduced: number; verifiedProjects: number; tokenizedCredits: number }
  projects: Array<{ id: string; name: string; credits: number; verified: boolean }>
}

const ESGReport: React.FC<ESGReportProps> = ({ metrics, projects }) => {
  const downloadCSV = () => {
    const headers = ['metric','value']
    const metricRows = Object.entries(metrics).map(([k, v]) => [k, String(v)])
    const projectRows = projects.map((p) => [`project:${p.name}`, String(p.credits)])
    const rows = [headers, ...metricRows, ...projectRows]
    const csv = rows.map((r) => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'esg-report.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div className="mb-2">
        <div className="text-sm font-medium">ESG & Compliance</div>
        <div className="text-xs text-gray-500">Download a simplified ESG report (CSV) suitable for review and onboarding.</div>
      </div>

      <div className="flex gap-2">
        <button onClick={downloadCSV} className="flex-1 bg-indigo-600 text-white py-2 rounded">Download CSV report</button>
        <button className="flex-1 border py-2 rounded">Request PDF (coming soon)</button>
      </div>
    </div>
  )
}

export default ESGReport
