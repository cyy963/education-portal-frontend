import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link to="/teacher-dashboard">Go to Teacher Dashboard</Link>
      <br />
      <Link to="/student-dashboard">Go to Student Dashboard</Link>
      <br />
      <Link to="/project-library">Go to Project Library</Link>
      <br />
      <Link to="/student-profile-viewer">Go to Student Profile Viewer</Link>
      <br />
      <Link to="/teacher-profile-viewer">Go to Teacher Profile Viewer</Link>
    </div>
  );
}
