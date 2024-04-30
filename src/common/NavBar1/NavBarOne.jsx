import { Link } from "react-router-dom";
import styles from "./NavBarOne.module.css";

// Image imports
import logo from "/src/assets/NavBar/LevelUpWorks-white.png";
import NZFlag from "/src/assets/NavBar/NZFlag.png";
import MaoriFlag from "/src/assets/NavBar/MaoriFlag.png";
import NavBarLink from "./components/NavBarLink";

export default function NavBarOne(props) {
  return (
    <div className={styles.navBarOne}>
      {/* Level up Works Logo */}
      <Link className={styles.logoDiv} to="/">
        <img className={styles.logo} src={logo} alt="Level Up Works Logo" />
      </Link>

      {/* Links in center of nav bat */}
      <div className={styles.navLinks}>
        <NavBarLink link="/" text="HOME" />
        {/* Centre and right text and links are different depending on page */}
        <NavBarLink link={props.link} text={props.text} />
        <NavBarLink text="TEACHERS" />
      </div>

      {/* Languages */}
      <div className={styles.languages}>
        <p className={styles.lang}>LANG</p>
        <img className={styles.flag} src={NZFlag} alt="NZ Flag" />
        <img className={styles.flag} src={MaoriFlag} alt="Maori Flag" />
      </div>

      {/* User name and profile pic */}
      {/* These are different depending on page and who is logged in */}
      <input
        type="checkbox"
        id="userBtn"
        onChange={props.onChange}
        className={styles.userBtn}
      />
      <label htmlFor="userBtn" className={styles.user}>
        <img
          className={styles.userImage}
          src={props.userImage}
          alt={props.alt}
        />
        {props.userName}
      </label>
    </div>
  );
}
