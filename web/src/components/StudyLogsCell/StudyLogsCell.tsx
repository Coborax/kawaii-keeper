import type { StudyLogsQuery, StudyLogsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const QUERY: TypedDocumentNode<StudyLogsQuery, StudyLogsQueryVariables> =
  gql`
    query StudyLogsQuery(
      $userId: Int!
      $startTime: DateTime!
      $endTime: DateTime!
    ) {
      studyLogs(userId: $userId, startTime: $startTime, endTime: $endTime) {
        id
        startTime
        endTime
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ studyLogs }: CellSuccessProps<StudyLogsQuery>) => {

  // Monday to Sunday for the week
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = days.map((day) => ({
    day,
    hours: studyLogs.filter((log) => new Date(log.startTime).toLocaleDateString('en-US', { weekday: 'short' }) === day).reduce((sum, log) => sum + (new Date(log.endTime).getTime() - new Date(log.startTime).getTime()) / 1000 / 60 / 60, 0),
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis
          label={{
            value: 'Hours',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip
          formatter={(value) => [`${value} hours`, 'Study Time']}
          contentStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
          }}
        />
        <Bar
          dataKey="hours"
          barSize={30}
          radius={[4, 4, 0, 0]}
          fill="#8884d8"
          activeBar={{ fill: '#3182CE' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
