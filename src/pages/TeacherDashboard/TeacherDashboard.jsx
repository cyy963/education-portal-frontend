import { useState } from 'react';
import styles from './TeacherDashboard.module.css';
//component imports
import NavbarTwo from '../../common/NavbarTwo.jsx';
import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import FooterTwo from '../../common/FooterTwo.jsx'

export default function TeacherDashboard() {  
  return (
    <>
        {/* top nav */}
        <NavbarTwo user='teacher' />
        
        {/* dashboard + content */}
        <Dashboard user="teacher" teacherName='JasminaSalvador' />

        {/* footer */}
        <FooterTwo />
    </>
  );
}
