import { Metadata } from '@redwoodjs/web'
import { Typography, Divider } from '@mui/joy'
import JapaneseTimeLogger from 'src/components/JapaneseTimeLogger/JapaneseTimeLogger'
import WeeklyStudyGraph from 'src/components/WeeklyStudyGraph/WeeklyStudyGraph'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Typography level="h1" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <JapaneseTimeLogger />
      <Divider sx={{ my: 2 }} />
      <WeeklyStudyGraph />
    </>
  )
}

export default HomePage