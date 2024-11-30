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
  id?: string
  date: string
  startTime: string
  endTime: string
  duration: number
  category: 'Listening' | 'Reading'
  immersionType: string
  immersionSource: string
}

const JapaneseTimeLogger: React.FC = () => {
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')
  const [category, setCategory] = useState<'Listening' | 'Reading'>('Listening')
  const [immersionType, setImmersionType] = useState<string>('TV Show')
  const [immersionSource, setImmersionSource] = useState<string>('')
  const [studyLogs, setStudyLogs] = useState<StudyLogEntry[]>([])

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

    const startDateTime = new Date(`1970-01-01T${startTime}`)
    const endDateTime = new Date(`1970-01-01T${endTime}`)

    // Calculate duration in hours
    const duration = Math.abs(endDateTime.getTime() - startDateTime.getTime()) / (1000 * 60 * 60)

    const newEntry: StudyLogEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      startTime,
      endTime,
      duration,
      category,
      immersionType,
      immersionSource
    }

    setStudyLogs([...studyLogs, newEntry])

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

      {studyLogs.length > 0 && (
        <Box>
          <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
            Study Log History
          </Typography>
          {studyLogs.map((log) => (
            <Box
              key={log.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'background.surface',
                p: 1,
                borderRadius: 'sm',
                mb: 1
              }}
            >
              <Box>
                <Typography level="body-sm">
                  {formatDate(log.date)} | {log.startTime} - {log.endTime} ({log.duration.toFixed(2)} hours)
                </Typography>
                <Typography level="body-xs" color="neutral">
                  {log.category} | {log.immersionType}: {log.immersionSource}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default JapaneseTimeLogger