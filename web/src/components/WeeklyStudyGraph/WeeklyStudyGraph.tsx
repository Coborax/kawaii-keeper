import React from 'react'
import { Box, Typography } from '@mui/joy'
import StudyLogsCell from 'src/components/StudyLogsCell'

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
  userId: number
}

const WeeklyStudyGraph: React.FC<WeeklyStudyGraphProps> = ({
  userId
}) => {
  // // Enhance data with colors based on study hours
  // const enhancedData = data.map((item, index) => ({
  //   ...item,
  //   color: COLOR_SCHEME[Math.min(Math.floor(item.hours), COLOR_SCHEME.length - 1)]
  // }))

  const today = new Date()
  const dayOfWeek = today.getDay()

  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - dayOfWeek)
  startOfWeek.setHours(0, 0, 0, 0)

  const endOfWeek = new Date(today)
  endOfWeek.setDate(today.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography level="title-lg">Weekly Overview</Typography>
        <Typography level="body-sm" color="neutral">
          Weekly Japanese Study Time (Hours)
        </Typography>
      </Box>

      <StudyLogsCell userId={userId} startTime={startOfWeek.toISOString()} endTime={endOfWeek.toISOString()}></StudyLogsCell>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2
        }}
      >
        {/* <Typography level="body-sm" color="neutral">
          Total Weekly Study: {data.reduce((sum, day) => sum + day.hours, 0).toFixed(1)} hours
        </Typography>
        <Typography level="body-sm" color="primary">
          Average: {(data.reduce((sum, day) => sum + day.hours, 0) / data.length).toFixed(1)} hours/day
        </Typography> */}
      </Box>
    </Box>
  )
}

export default WeeklyStudyGraph