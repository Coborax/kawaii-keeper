import type { ReactNode } from 'react'

import { CssVarsProvider, extendTheme } from '@mui/joy/styles'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'

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

interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <CssVarsProvider defaultMode="dark" theme={theme}>
        <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
      </CssVarsProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
