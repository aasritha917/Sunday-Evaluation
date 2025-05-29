import React from 'react'
import Home from './pages/Home'
import Analytics from './pages/Analytics'

function App() {
  return (
    <>
      <Router>
        <nav style={{padding:"10px", borderBottom:"1px solid red"}}>
          <link to="/">SnackSelf</link> 
          <link to="/analytics">Analytics</link>
        </nav>
        <Router>
          <Route path="/" element={<Home />}/>
          <Route path="/analytics" element={<Analytics />}/>
        </Router>
      </Router>
    </>
  )
}

export default App
