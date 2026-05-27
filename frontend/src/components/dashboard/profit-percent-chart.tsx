import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { type MonthlyDataPoint } from '@/lib/financial-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface ProfitPercentChartProps {
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

  const value = payload[0]?.value ?? 0

  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-lg text-sm">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: 'var(--chart-profit)' }}
        />
        <span className="text-muted-foreground">Profit margin:</span>
        <span className="font-medium text-foreground ml-auto pl-4">{value.toFixed(1)}%</span>
      </div>
    </div>
  )
}

export function ProfitPercentChart({ data, loading }: ProfitPercentChartProps) {
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

  const profitPercents = data.map((d) => d.profitPercent)
  const minValue = Math.min(...profitPercents)
  const maxValue = Math.max(...profitPercents)

  const hasLongXAxisLabels = data.some((d) => String(d.month).length > 4)

  return (
    <Card className="border-border/60" role="region" aria-label="Profit Percent Chart">
      <CardHeader className="pb-4">
        <CardTitle>Profit Percent</CardTitle>
        <CardDescription>Monthly profit margin as a percentage</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: 8, minHeight: 84 }}>
          <span style={{ color: '#ef4444', fontWeight: 500, fontSize: 13 }}>{`Min: ${minValue.toFixed(1)}%`}</span>
          <span style={{ color: '#22c55e', fontWeight: 500, fontSize: 13, marginTop: 2 }}>{`Max: ${maxValue.toFixed(1)}%`}</span>
        </div>
        <ResponsiveContainer width="100%" height={320} minWidth={420} minHeight={320}>
          <LineChart
            data={data}
            role="img"
            aria-label="Line chart showing monthly profit percent"
            margin={{ bottom: hasLongXAxisLabels ? 40 : 16, left: 16, right: 16, top: 16 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              angle={hasLongXAxisLabels ? -45 : 0}
              textAnchor={hasLongXAxisLabels ? 'end' : 'middle'}
              interval={0}
              tick={{ fontSize: 11 }}
            />
            <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ right: 0 }} />
            <Line type="monotone" dataKey="profitPercent" stroke="#3b82f6" name="Profit Percent" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
