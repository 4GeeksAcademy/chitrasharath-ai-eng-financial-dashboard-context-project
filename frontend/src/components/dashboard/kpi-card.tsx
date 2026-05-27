interface KPICardProps {
  label: string
  value: string
  helperText: string
  icon: React.ComponentType
  variant: 'income' | 'outcome' | 'profit' | 'profitPercent'
  loading?: boolean
  role?: string
  'aria-label'?: string
}

export function KPICard({ label, value, helperText, icon: Icon, variant, loading, role, ...ariaProps }: KPICardProps) {
  return (
    <div
      className="kpi-card focus-visible:outline focus-visible:ring"
      role={role}
      tabIndex={0}
      {...ariaProps}
    >
      <div className="icon" aria-hidden="true">
        <Icon />
      </div>
      <div className="label">
        {label}
      </div>
      <div className="value">
        {value}
      </div>
      <div className="helper-text">
        {helperText}
      </div>
    </div>
  )
}
