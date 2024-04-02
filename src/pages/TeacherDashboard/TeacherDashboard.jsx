import React from 'react';
import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import ProgressTracker from './components/ProgressTracker/ProgressTracker.jsx';
import styles from './TeacherDashboard.module.css';
import { useState } from 'react';
import FooterTwo from '../../common/FooterTwo.jsx'

export default function TeacherDashboard() {
  // Assuming you have the teacher's name stored somewhere, 
  // replace 'teacherNameValue' with the actual name value
  const teacherName = 'teacherNameValue';

  return (
    <>
        {/* top nav */}
        <header style={{ outline: '2px solid black' }}>TOP NAV</header>
        
        {/* dashboard + body */}
        <Dashboard user="teacher" teacherName='JasminaSalvador' />

        {/* footer */}
        <FooterTwo />
    </>
  );
}
