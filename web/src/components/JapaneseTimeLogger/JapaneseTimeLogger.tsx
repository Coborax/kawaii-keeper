import React, { useState } from 'react'
import {
  Box,
  Button,
  Input,
  Typography,
  Select,
  Option
} from '@mui/joy'

interface StudyLogEntry {
  userId?: string
  startTime: Date
  endTime: Date
  category: 'Listening' | 'Reading'
  immersionType: string
  immersionSource: string
}

interface JapaneseTimeLoggerProps {
  onLogStudy: (studyLog: StudyLogEntry) => void
}

const JapaneseTimeLogger: React.FC = ({ onLogStudy }: JapaneseTimeLoggerProps) => {
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')
  const [category, setCategory] = useState<'Listening' | 'Reading'>('Listening')
  const [immersionType, setImmersionType] = useState<string>('TV Show')
  const [immersionSource, setImmersionSource] = useState<string>('')

  const immersionTypes = [
    'TV Show',
    'Anime',
    'Movie',
    'Podcast',
    'YouTube',
    'Streaming',
    'Visual Novel',
    'Other'
  ]

  const handleLogStudy = () => {
    if (!startTime || !endTime) {
      alert('Please enter both start and end times')
      return
    }

    // Create date objects from input strings today's date
    const today = new Date()
    const startDateTime = new Date(`${today.toISOString().split('T')[0]}T${startTime}`)
    const endDateTime = new Date(`${today.toISOString().split('T')[0]}T${endTime}`)

    // Calculate duration in hours
    const duration = Math.abs(endDateTime.getTime() - startDateTime.getTime()) / (1000 * 60 * 60)

    const newEntry: StudyLogEntry = {
      startTime: startDateTime,
      endTime: endDateTime,
      category,
      immersionType,
      immersionSource
    }

    onLogStudy(newEntry)

    // Reset form
    setStartTime('')
    setEndTime('')
    setCategory('Listening')
    setImmersionType('TV Show')
    setImmersionSource('')
  }

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString()
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="title-lg">Japanese Time Logger</Typography>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          sx={{ flex: 1 }}
          label="Start Time"
        />
        <Input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          sx={{ flex: 1 }}
          label="End Time"
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Select
          value={category}
          onChange={(_, newValue) => setCategory(newValue || 'Listening')}
          sx={{ flex: 1 }}
        >
          <Option value="Listening">Listening</Option>
          <Option value="Reading">Reading</Option>
        </Select>

        <Select
          value={immersionType}
          onChange={(_, newValue) => setImmersionType(newValue || 'TV Show')}
          sx={{ flex: 1 }}
        >
          {immersionTypes.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>
      </Box>

      <Input
        placeholder="Immersion Source"
        value={immersionSource}
        onChange={(e) => setImmersionSource(e.target.value)}
      />

      <Button onClick={handleLogStudy}>Log Study Time</Button>
    </Box>
  )
}

export default JapaneseTimeLogger