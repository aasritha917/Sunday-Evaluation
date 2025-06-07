import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import MentorDashboard from './pages/MentorDashboard';
import JournalPage from './pages/JournalPage';
import InsightsPage from './pages/InsightsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<StudentDashboard />} />
      <Route path="/mentor" element={<MentorDashboard />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/insights" element={<InsightsPage />} />
    </Routes>
  </Router>
);

export default App;