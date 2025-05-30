import React from 'react'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid red" }}>
        <Link to="/" style={{ marginRight: "10px" }}>SnackSelf</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
