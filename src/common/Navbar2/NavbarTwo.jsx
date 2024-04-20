import styles from "./NavbarTwo.module.css";
import { Link, useLocation } from "react-router-dom";

//Import images from assets
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";

// Import components
import NavbarTwoProject from "./components/NavbarTwoProject";
import NavbarTwoButtons from "./components/NavbarTwoButtons";
import ToLibrary from "../ToLibrary";
import { useEffect, useState } from "react";

export default function NavbarTwo(props) {
  // Controls whether button is start, submit or submitted
  const [status, setStatus] = useState("start");
  const [isDisabled, setIsDisabled] = useState(false);
  let location = useLocation();

  useEffect(() => {
    location.pathname === "/student-dashboard/make-project"
      ? setStatus("submit")
      : setStatus(status);
  }, [location]);

  return (
    <div className={styles.flex}>
      <div className={`${styles.grid} ${styles.flex}`}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        {/* If student display NavbarTwoProject */}
        {props.user === "student" ? (
          <NavbarTwoProject currentProjectId={props.currentProjectId} />
        ) : (
          ""
        )}
      </div>

      <div className={styles.grid}>
        {props.user === "student" ? (
          <div className={`${styles.grid} ${styles.flex}`}>
            {/* Three buttons for student */}
            <Link
              to={
                status === "start"
                  ? "/student-dashboard/make-project"
                  : "/student-dashboard/submit-project"
              }
            >
              {/* Make link and type variable (when button pressed they change) */}
              <NavbarTwoButtons
                type="start"
                status={status}
                setStatus={setStatus}
                isDisabled={isDisabled}
                setIsDisabled={setIsDisabled}
              />
            </Link>
            <NavbarTwoButtons type="ask-for-help" />
            <Link to="/project-library">
              <ToLibrary type="more-projects" />
            </Link>
          </div>
        ) : (
          <div className={`${styles.grid} ${styles.flex}`}>
            {/* Two buttons for teacher */}
            <Link to="/teacher-dashboard/help-requests">
              <NavbarTwoButtons type="help-centre" />
            </Link>
            <Link to="/project-library">
              <ToLibrary type="more-projects" />
            </Link>
          </div>
        )}
        <div className={styles.flexFlag}>
          <img src={nzFlag} alt="NZ flag" className={styles.flag} />
          <img src={maoriFlag} alt="Maori flag" className={styles.flag} />
        </div>
      </div>
    </div>
  );
}
