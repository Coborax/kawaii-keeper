import React from 'react'
import { Box, Typography } from '@mui/joy'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// Sample data structure for study time
interface StudyData {
  day: string
  hours: number
  color?: string
}

// Default color scheme
const COLOR_SCHEME = [
  '#3182CE', // Blue for lower study times
  '#48BB78', // Green for moderate study times
  '#38B2AC', // Teal for higher study times
  '#4FD1C5'  // Lighter teal for peak study times
]

interface WeeklyStudyGraphProps {
  data?: StudyData[]
  title?: string
}

const WeeklyStudyGraph: React.FC<WeeklyStudyGraphProps> = ({
  title = 'Japanese Study Time',
  data = [
    { day: 'Mon', hours: 1.5 },
    { day: 'Tue', hours: 2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 2.2 },
    { day: 'Fri', hours: 1.6 },
    { day: 'Sat', hours: 3 },
    { day: 'Sun', hours: 2.5 }
  ]
}) => {
  // Enhance data with colors based on study hours
  const enhancedData = data.map((item, index) => ({
    ...item,
    color: COLOR_SCHEME[Math.min(Math.floor(item.hours), COLOR_SCHEME.length - 1)]
  }))

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm" color="neutral">
          Weekly Japanese Study Time (Hours)
        </Typography>
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={enhancedData}>
          <XAxis dataKey="day" />
          <YAxis
            label={{
              value: 'Hours',
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip
            formatter={(value) => [`${value} hours`, 'Study Time']}
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              color: 'white'
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2
        }}
      >
        <Typography level="body-sm" color="neutral">
          Total Weekly Study: {data.reduce((sum, day) => sum + day.hours, 0).toFixed(1)} hours
        </Typography>
        <Typography level="body-sm" color="primary">
          Average: {(data.reduce((sum, day) => sum + day.hours, 0) / data.length).toFixed(1)} hours/day
        </Typography>
      </Box>
    </Box>
  )
}

export default WeeklyStudyGraph