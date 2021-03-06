import React from 'react'
import ReactDOM from 'react-dom'
import Application from './App'
import reportWebVitals from './reportWebVitals'
import ThemeProvider from '@mui/styles/ThemeProvider'
import main from '../src/themes/main'

ReactDOM.render(
  <ThemeProvider theme={main}>
    <Application />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
