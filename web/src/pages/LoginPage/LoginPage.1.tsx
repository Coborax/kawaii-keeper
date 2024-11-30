import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel, Sheet,
  Typography,
  Link as JoyLink
} from '@mui/joy';
import { Form, useForm } from '@redwoodjs/forms';
import { Link as RouterLink, navigate, routes } from '@redwoodjs/router';
import { toast } from '@redwoodjs/web/toast';
import { useAuth } from 'src/auth';
import mascotImage from './mascot.png';
import { Metadata } from '@redwoodjs/web';
import AnimeBg from 'src/components/AnimeBg/AnimeBg';
import JoyInput from 'src/components/JoyInput/JoyInput';

export const LoginPage = () => {
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const formMethods = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await logIn({
        username: data.username,
        password: data.password
      });
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success('Welcome back!');
        navigate(routes.home());
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Metadata title="Login" description="Login page" />

      <AnimeBg>
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
            }} />
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

          <Form formMethods={formMethods} onSubmit={onSubmit}>
            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Username</FormLabel>
              <JoyInput
                type="username"
                name="username"
                placeholder="Enter your Username"
                required />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Password</FormLabel>
              <JoyInput
                type="password"
                name="password"
                placeholder="Enter your password"
                required />
            </FormControl>

            <Button type="submit" fullWidth sx={{ mt: 1 }} loading={loading}>
              Sign in
            </Button>
          </Form>

          <Typography
            level="body-sm"
            sx={{
              mt: 2,
              textAlign: 'center',
            }}
          >
            Don't have an account?{' '}
            <JoyLink component={RouterLink} to={routes.signup()}>
              Sign up
            </JoyLink>
          </Typography>
        </Sheet>
      </AnimeBg>
    </>
  );
};
