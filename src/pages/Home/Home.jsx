import { Link } from "react-router-dom";
import NavBarOne from "../../common/NavBar1/NavBarOne";
import styles from "./Home.module.css";

export default function Home() {
  const togglePopUp = (e) => {
    console.log("Register/login clicked");
  };
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.navBarSpace}>
          <NavBarOne
            text="FEATURES"
            userImage="src/assets/NavBar/Avatar-white.png"
            alt="White silhouette of a person"
            userName="REGISTER | LOGIN"
            function={togglePopUp}
          />
        </div>
        <h1 className={styles.title}>home</h1>
        <div className={styles.links}>
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
      </div>
    </div>
  );
}
