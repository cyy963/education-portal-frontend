import { Link } from "react-router-dom";
import { useState } from "react";
import NavBarOne from "../../common/NavBar1/NavBarOne";
import FooterOne from "../../common/Footer1/FooterOne";
import styles from "./Home.module.css";
import LoginSignup from "./components/LoginSignup";
import x from "../../assets/Home/x.svg";

export default function Home() {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const showLogin = (e) => setVisibleLogin(true);
  const hideLogin = () => setVisibleLogin(false);
  // console.log("visibleLogin: ", visibleLogin);
  return (
    <div
    // onClick={hideLogin}
    >
      <div className={styles.main}>
        <div className={styles.navBarSpace}>
          <NavBarOne
            text="FEATURES"
            userImage="src/assets/NavBar/Avatar-white.png"
            alt="White silhouette of a person"
            userName="REGISTER | LOGIN"
            onChange={showLogin}
          />
        </div>
        {visibleLogin && (
          <LoginSignup
            // containerOnClick={showLogin}
            xOnClick={hideLogin}
          />
        )}
        <h1 className={styles.title}>home</h1>
        <div className={styles.links}>
          <Link to="/teacher-dashboard">Go to Teacher Dashboard</Link>
          <br />
          <Link to="/student-dashboard/1/learning-objectives">
            Go to Student Dashboard
          </Link>
          <br />
          <Link to="/project-library">Go to Project Library</Link>
          <br />
          <Link to="/student-profile-viewer">Go to Student Profile Viewer</Link>
          <br />
          <Link to="/teacher-profile-viewer">Go to Teacher Profile Viewer</Link>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}
