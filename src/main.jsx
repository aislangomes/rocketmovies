import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme';
import { ThemeProvider } from 'styled-components'

import {Register} from './pages/Register'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Register />
    </ThemeProvider>
  </React.StrictMode>,
)
