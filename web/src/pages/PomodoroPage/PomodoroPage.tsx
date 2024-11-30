// import { Link, routes } from '@redwoodjs/router'
import { Typography } from '@mui/joy'
import { Metadata } from '@redwoodjs/web'
import PomodoroTimer from 'src/components/PomodoroTimer/PomodoroTimer'

const PomodoroPage = () => {
  return (
    <>
      <Metadata title="Pomodoro" description="Pomodoro page" />

      <Typography level="h1" sx={{ mb: 2 }}>
        Pomodoro Timer
      </Typography>

      <PomodoroTimer />
    </>
  )
}

export default PomodoroPage
