import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme';
import { ThemeProvider } from 'styled-components'

import {Perfil} from './pages/Perfil'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Perfil />
    </ThemeProvider>
  </React.StrictMode>,
)
