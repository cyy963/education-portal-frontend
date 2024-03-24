import styles from "./NavbarTwo.module.css";

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
        <img src={logo} alt="Logo" className={styles.logo} />
        {/* If student display NavbarTwoProject */}
        {props.page === "student" ? <NavbarTwoProject /> : ""}
      </div>
      <div className={styles.grid}>
        {props.page === "student" ? (
          <div className={`${styles.grid} ${styles.flex}`}>
            {/* Three buttons for student */}
            <NavbarTwoButtons type="start" />
            <NavbarTwoButtons type="ask-for-help" />
            <ToLibrary type="more-projects" />
          </div>
        ) : (
          <div className={styles.grid}>
            {/* Two buttons for teacher */}
            <NavbarTwoButtons type="help-centre" />
            <ToLibrary type="more-projects" />
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
