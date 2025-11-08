import React from 'react'

interface MetricsCardProps {
  label: string
  value: number | string
}

const MetricsCard: React.FC<MetricsCardProps> = ({ label, value }) => {
  return (
    <div className="p-4 bg-gray-50 border rounded">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
    </div>
  )
}

export default MetricsCard
