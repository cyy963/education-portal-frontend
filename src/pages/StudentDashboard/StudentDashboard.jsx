import { useState } from 'react';
import NavbarTwo from '../../common/NavbarTwo.jsx';
import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import FooterTwo from '../../common/FooterTwo.jsx'

export default function TeacherDashboard() {
  return (
    <>
        {/* top nav */}
        <NavbarTwo user='student' />
        
        {/* dashboard + content */}
        <Dashboard user="student" studentName='AidenAndrews' />

        {/* footer */}
        <FooterTwo />
    </>
  );
}