import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { type MonthlyDataPoint } from '@/lib/financial-types'
import { formatCurrency } from '@/lib/financial-utils'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface IncomeOutcomeChartProps {
  data: MonthlyDataPoint[]
  loading?: boolean
}

interface TooltipPayload {
  name: string
  value: number
  color: string
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-lg text-sm">
      <p className="font-semibold text-foreground mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 py-0.5">
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground capitalize">{entry.name}:</span>
          <span className="font-medium text-foreground ml-auto pl-4">{formatCurrency(entry.value)}</span>
        </div>
      ))}
    </div>
  )
}


export function IncomeOutcomeChart({ data, loading }: IncomeOutcomeChartProps) {
  if (loading) {
    return (
      <Card className="border-border/60" aria-hidden="true">
        <CardHeader className="pb-4">
          <Skeleton className="h-5 w-52" />
          <Skeleton className="h-3 w-64 mt-1" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[280px] w-full rounded-lg" />
        </CardContent>
      </Card>
    )
  }

  const incomes = data.map((d) => d.income)
  const outcomes = data.map((d) => d.outcome)
  const minIncome = Math.min(...incomes)
  const maxIncome = Math.max(...incomes)
  const minOutcome = Math.min(...outcomes)
  const maxOutcome = Math.max(...outcomes)

  return (
    <Card className="border-border/60" role="region" aria-label="Income and Outcome Chart">
      <CardHeader className="pb-4">
        <CardTitle>Income vs Outcome</CardTitle>
        <CardDescription>Monthly income and outcome trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: 8, minHeight: 84 }}>
          <span style={{ color: '#22c55e', fontWeight: 500, fontSize: 13 }}>{`Income Min: ${formatCurrency(minIncome)}`}</span>
          <span style={{ color: '#22c55e', fontWeight: 500, fontSize: 13, marginTop: 2 }}>{`Income Max: ${formatCurrency(maxIncome)}`}</span>
          <span style={{ color: '#ef4444', fontWeight: 500, fontSize: 13, marginTop: 4 }}>{`Outcome Min: ${formatCurrency(minOutcome)}`}</span>
          <span style={{ color: '#ef4444', fontWeight: 500, fontSize: 13, marginTop: 2 }}>{`Outcome Max: ${formatCurrency(maxOutcome)}`}</span>
        </div>
        <ResponsiveContainer width="100%" height={320} minWidth={420} minHeight={320}>
          <LineChart data={data} role="img" aria-label="Line chart showing monthly income and outcome" margin={{ bottom: 36, left: 16, right: 16, top: 16 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ right: 0 }} />
            <Line type="monotone" dataKey="income" stroke="#22c55e" name="Income" />
            <Line type="monotone" dataKey="outcome" stroke="#ef4444" name="Outcome" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
