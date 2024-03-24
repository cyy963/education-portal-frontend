import styles from "./NavbarTwo.module.css";
import { Link } from "react-router-dom";

//Import images from assets
import logo from "../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../assets/NavBar/NZFlag.png";
import maoriFlag from "../assets/NavBar/MaoriFlag.png";

// Import components
import NavbarTwoProject from "./NavbarTwoProject";
import NavbarTwoButtons from "./NavbarTwoButtons";
import ToLibrary from "./ToLibrary";

export default function NavbarTwo(props) {
  return (
    <div className={styles.flex}>
      <div className={`${styles.grid} ${styles.flex}`}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        {/* If student display NavbarTwoProject */}
        {props.page === "student" ? <NavbarTwoProject /> : ""}
      </div>

      <div className={styles.grid}>
        {props.page === "student" ? (
          <div className={`${styles.grid} ${styles.flex}`}>
            {/* Three buttons for student */}
            <Link to="/student-dashboard/make-project">
              <NavbarTwoButtons type="start" />
            </Link>
            <NavbarTwoButtons type="ask-for-help" />
            {/* ^^ backend function */}
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
