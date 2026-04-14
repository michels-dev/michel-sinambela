import { useEffect, useState } from 'react'
import './App.css'
import Router from './router'
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, [])
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App