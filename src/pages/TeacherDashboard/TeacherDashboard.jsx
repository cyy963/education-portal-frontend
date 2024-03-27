import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import NavbarTwo from '../../common/NavbarTwo.jsx';

export default function TeacherDashboard() {  

  return (
    <>
        {/* top nav */}
        <NavbarTwo user='teacher' />
        
        {/* dashboard + content */}
        <Dashboard user="teacher" teacherName='JasminaSalvador' />

        {/* footer */}
        <footer>FOOTER</footer>
    </>
  );
}
