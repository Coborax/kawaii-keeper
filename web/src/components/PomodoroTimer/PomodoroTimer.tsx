import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Typography,
  Select,
  Option,
  CircularProgress,
  Input,
} from '@mui/joy'

interface PomodoroSession {
  id?: string
  date: string
  duration: number
  category: 'Listening' | 'Reading'
  immersionType: string
  immersionSource: string
}

const PomodoroTimer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes default
  const [workDuration, setWorkDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [category, setCategory] = useState<'Listening' | 'Reading'>('Listening')
  const [immersionType, setImmersionType] = useState('Study')
  const [immersionSource, setImmersionSource] = useState('')
  const [sessions, setSessions] = useState<PomodoroSession[]>([])

  const immersionTypes = [
    'TV Show',
    'Anime',
    'Movie',
    'Podcast',
    'YouTube',
    'Streaming',
    'Visual Novel',
    'Other',
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (isRunning && timeLeft === 0) {
      if (!isBreak) {
        // Work session ended, start break
        setIsBreak(true)
        setTimeLeft(breakDuration * 60)
      } else {
        // Break ended, reset for next session
        setIsBreak(false)
        setTimeLeft(workDuration * 60)
      }
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isRunning, timeLeft, isBreak, workDuration, breakDuration])

  const handleLogSession = () => {
    const duration = workDuration / 60 // Convert to hours

    const newSession: PomodoroSession = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      duration,
      category,
      immersionType,
      immersionSource,
    }

    setSessions([...sessions, newSession])

    // Reset form and timer
    setCategory('Listening')
    setImmersionType('TV Show')
    setImmersionSource('')
    setIsRunning(false)
    setIsBreak(false)
    setTimeLeft(workDuration * 60)
  }

  // Format time as MM:SS
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Calculate progress percentage
  const totalSessionTime = isBreak ? breakDuration * 60 : workDuration * 60
  const progressValue = ((totalSessionTime - timeLeft) / totalSessionTime) * 100

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString()
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Timer Display */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <CircularProgress
          determinate
          value={progressValue}
          size="lg"
          sx={{
            '--CircularProgress-size': '200px',
            '--CircularProgress-trackThickness': '12px',
            '--CircularProgress-progressThickness': '12px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography
              level="h2"
              sx={{ color: isBreak ? 'success.500' : 'primary.500' }}
            >
              {formatTime(timeLeft)}
            </Typography>
            <Typography level="body-sm" sx={{ color: 'neutral' }}>
              {isBreak
                ? 'Break'
                : category === 'Reading'
                  ? 'Reading'
                  : 'Listening'}
            </Typography>
          </Box>
        </CircularProgress>
      </Box>

      {/* Category and Immersion Type Selectors */}
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

      {/* Immersion Source Input */}
      <Input
        placeholder="Immersion Source"
        value={immersionSource}
        onChange={(e) => setImmersionSource(e.target.value)}
      />

      {/* Control Buttons */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          color={isRunning ? 'neutral' : 'primary'}
          onClick={() => setIsRunning(!isRunning)}
          sx={{ flex: 1 }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button color="success" onClick={handleLogSession} sx={{ flex: 1 }}>
          Log Session
        </Button>
      </Box>

      {/* Session History */}
      {sessions.length > 0 && (
        <Box>
          <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
            Session History
          </Typography>
          {sessions.map((session) => (
            <Box
              key={session.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'background.surface',
                p: 1,
                borderRadius: 'sm',
                mb: 1,
              }}
            >
              <Box>
                <Typography level="body-sm">
                  {formatDate(session.date)} | {session.duration.toFixed(2)}{' '}
                  hours
                </Typography>
                <Typography level="body-xs" color="neutral">
                  {session.category} | {session.immersionType}:{' '}
                  {session.immersionSource}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default PomodoroTimer
