import React from 'react';
import HabitLogger from '../components/HabitLogger';
import ReflectionEditor from '../components/ReflectionEditor';
import StreakTracker from '../components/StreakTracker';
import NotificationBanner from '../components/NotificationBanner';

const StudentDashboard = () => (
  <div>
    <h2>Student Dashboard</h2>
    <NotificationBanner message="Don't forget to log today!" />
    <StreakTracker streak={1} />
    <HabitLogger />
    <ReflectionEditor />
  </div>
);

export default StudentDashboard;