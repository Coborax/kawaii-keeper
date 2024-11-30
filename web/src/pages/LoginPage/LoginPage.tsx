import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy'

import { Metadata } from '@redwoodjs/web'

import bgImage from './bg.jpg'
import mascotImage from './mascot.png'

const LoginPage = () => {
  return (
    <>
      <Metadata title="Login" description="Login page" />

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
        <Sheet
          variant="outlined"
          sx={{
            width: 300,
            py: 3,
            px: 4,
            borderRadius: 'sm',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={mascotImage}
            alt="Mascot"
            sx={{
              width: 80,
              height: 80,
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: 1,
            }}
          />
          <Typography
            level="h4"
            component="h1"
            sx={{
              mb: 2,
              mt: 5,
              textAlign: 'center',
              width: '100%',
            }}
          >
            Kawaii Keeper
          </Typography>

          <form onSubmit={(e) => e.preventDefault()}>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" required />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                required
              />
            </FormControl>

            <Button type="submit" fullWidth sx={{ mt: 1 }}>
              Sign in
            </Button>
          </form>
        </Sheet>
      </Box>
    </>
  )
}

export default LoginPage
