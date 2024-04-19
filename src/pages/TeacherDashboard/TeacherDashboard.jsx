//component imports
import NavbarTwo from "../../common/Navbar2/NavbarTwo.jsx";
import Dashboard from "../../common/Dashboard/Dashboard.jsx";
import FooterTwo from "../../common/FooterTwo.jsx";

export default function TeacherDashboard() {
  return (
    <>
      {/* top nav */}
      <NavbarTwo user="teacher" />

      {/* dashboard + content */}
      <Dashboard user="teacher" teacherName="JasminaSalvador" />

      {/* footer */}
      <FooterTwo />
    </>
  );
}
