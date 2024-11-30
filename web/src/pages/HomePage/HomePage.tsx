import { Box, Sheet } from '@mui/joy'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import AnimeBg from 'src/components/AnimeBg/AnimeBg'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()

  const handleLogout = () => {
    logOut()
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <AnimeBg>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            p: 3,
            height: 'calc(100vh - 48px)', // Subtract bottom spacing
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            boxSizing: 'border-box',
            mb: 6, // Margin bottom to create spacing at the page bottom
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              flex: { xs: '1', md: '0 0 20%' },
              height: '100%',
              py: 2,
              px: 4,
              borderRadius: 'sm',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              overflowY: 'auto',
            }}
          >
            <NavigationBar
              user={{
                name: currentUser.username,
                email: currentUser.email,
                avatar: '/path/to/avatar.jpg',
              }}
              // onNavigate={(path) => navigate(path)}
              onLogout={() => handleLogout()}
            />
          </Sheet>
          <Sheet
            variant="outlined"
            sx={{
              flex: 1,
              height: '100%',
              py: 3,
              px: 4,
              borderRadius: 'sm',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              overflowY: 'auto',
            }}
          >
            Main Content
          </Sheet>
        </Box>
      </AnimeBg>
    </>
  )
}

export default HomePage
