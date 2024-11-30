import { useEffect, useRef, useState } from 'react'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Link as JoyLink,
} from '@mui/joy'

import { Form } from '@redwoodjs/forms'
import { useForm } from '@redwoodjs/forms'
import { Link as RouterLink, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import JoyInput from 'src/components/JoyInput/JoyInput'
import AnimeBg from 'src/components/AnimeBg/AnimeBg'
import mascotImage from '../LoginPage/mascot.png'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const formMethods = useForm()

  const onSubmit = async (data: Record<string, string>) => {
    setLoading(true)
    try {
      const response = await signUp({
        username: data.username,
        password: data.password,
        email: data.email,
      })

      if (response.message) {
        toast(response.message)
      } else if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Welcome!')
      }
    } catch (error) {
      toast.error('An error occurred during signup')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <AnimeBg>
        {' '}
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
            }}
          >
            Create Account
          </Typography>

          <Form
            formMethods={formMethods}
            onSubmit={onSubmit}
            className="rw-form-wrapper"
          >
            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Username</FormLabel>
              <JoyInput
                name="username"
                register={formMethods.register}
                validation={{ required: true }}
                autoComplete="username"
              />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Email</FormLabel>
              <JoyInput
                type="email"
                name="email"
                register={formMethods.register}
                validation={{
                  required: true,
                  pattern: {
                    value: /^[^@]+@[^.]+\..+$/,
                    message: 'Please enter a valid email address',
                  },
                }}
                autoComplete="email"
              />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Password</FormLabel>
              <JoyInput
                type="password"
                name="password"
                register={formMethods.register}
                validation={{ required: true }}
                autoComplete="new-password"
              />
            </FormControl>

            <Button type="submit" fullWidth sx={{ mt: 1 }} loading={loading}>
              Sign up
            </Button>
          </Form>

          <Typography
            level="body-sm"
            sx={{
              mt: 2,
              textAlign: 'center',
            }}
          >
            Already have an account?{' '}
            <JoyLink component={RouterLink} to={routes.login()}>
              Sign in
            </JoyLink>
          </Typography>
        </Sheet>
      </AnimeBg>
    </>
  )
}

export default SignupPage
