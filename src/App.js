import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Sample from "./components/Sample"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Sample/>
    </BrowserRouter>
  )
}

export default App