import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4b50b3'
    },
    secondary: {
      main: '#3fc45e'
    }
  },
  typography: {
    h3: {
      fontSize: '6vw',
        '@media (min-width:870px)': {
        fontSize: '3rem',
      },
      // [theme.breakpoints.up('md')]: {
      //   fontSize: '2rem',
      // },
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
