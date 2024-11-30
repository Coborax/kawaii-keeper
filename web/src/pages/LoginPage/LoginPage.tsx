import { useRef, useState } from 'react'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy'

import { Form } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import bgImage from './bg.jpg'
import mascotImage from './mascot.png'
import { Metadata } from '@redwoodjs/web'

const LoginPage = () => {
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await logIn({ ...data })
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Welcome back!')
        navigate(routes.home())
      }
    } catch (error) {
      toast.error('An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

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

          <Form onSubmit={onSubmit}>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="username"
                placeholder="Enter your email"
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </FormControl>

            <Button type="submit" fullWidth sx={{ mt: 1 }} loading={loading}>
              Sign in
            </Button>
          </Form>
        </Sheet>
      </Box>
    </>
  )
}

export default LoginPage
