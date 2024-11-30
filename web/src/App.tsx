import type { ReactNode } from 'react'

import { CssVarsProvider, extendTheme } from '@mui/joy/styles'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'

import { AuthProvider, useAuth } from './auth'

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: 'var(--joy-palette-neutral-900)',
          surface: 'var(--joy-palette-neutral-800)',
        },
      },
    },
  },
})

import './index.css'
import './scaffold.css'


interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <CssVarsProvider defaultMode="dark" theme={theme}>
          <RedwoodApolloProvider useAuth={useAuth}>{children}</RedwoodApolloProvider>
        </CssVarsProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
