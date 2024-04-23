import NavbarTwo from "../../common/Navbar2/NavbarTwo.jsx";
import Dashboard from "../../common/Dashboard/Dashboard.jsx";
import FooterTwo from "../../common/FooterTwo.jsx";

// React router dom
import { useParams } from "react-router-dom";

export default function TeacherDashboard() {
  const params = useParams();
  return (
    <>
      {/* top nav */}
      <NavbarTwo user="student" currentProjectId={params.projectId} />

      {/* dashboard + content */}
      <Dashboard user="student" studentName="AidenAndrews" />

      {/* footer */}
      <FooterTwo />
    </>
  );
}
