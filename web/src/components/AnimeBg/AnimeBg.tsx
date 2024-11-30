import { Box } from '@mui/joy'
import bgImage from './bg.jpg'

const AnimeBg = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: 'background.body',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </Box>
  )
}

export default AnimeBg
