import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import NavbarTwo from '../../common/NavbarTwo.jsx';

export default function TeacherDashboard() {
  

  return (
    <>
        {/* top nav */}
        <NavbarTwo user='student' />
        
        {/* dashboard + content */}
        <Dashboard user="student" studentName='AidenAndrews' />

        {/* footer */}
        <footer>FOOTER</footer>
    </>
  );
}