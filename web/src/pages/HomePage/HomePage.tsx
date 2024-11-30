import { Metadata, useMutation, useQuery } from '@redwoodjs/web'
import { Typography, Divider } from '@mui/joy'
import JapaneseTimeLogger from 'src/components/JapaneseTimeLogger/JapaneseTimeLogger'
import WeeklyStudyGraph from 'src/components/WeeklyStudyGraph/WeeklyStudyGraph'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'

const HomePage = () => {
  const { currentUser } = useAuth()

  const CREATE_STUDY_LOG = gql`
    mutation CreateStudyLog($input: CreateStudyLogInput!) {
      createStudyLog(input: $input) {
        id
      }
    }
  `
  const [createStudyLog] = useMutation(CREATE_STUDY_LOG)

  const handleLogStudy = (studyLog) => {
    console.log(studyLog)

    const log = {
      userId: currentUser.id,
      ...studyLog,
    }

    createStudyLog({ variables: { input: log } })
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Typography level="h1" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <JapaneseTimeLogger onLogStudy={handleLogStudy} />
      <Divider sx={{ my: 2 }} />
      <WeeklyStudyGraph userId={currentUser.id} />
    </>
  )
}

export default HomePage