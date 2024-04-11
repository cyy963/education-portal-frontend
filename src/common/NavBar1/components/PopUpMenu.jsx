import styles from "./PopUpMenu.module.css";
import { Link } from "react-router-dom";

export default function PopUpMenu(props) {
  return (
    <div>
      <div className={props.arrowClassName}></div>
      <div className={props.menuClassName}>
        <Link to={props.profileLink} className={styles.link}>
          My Profile
        </Link>
        <Link to={props.settingsLink} className={styles.link}>
          Settings
        </Link>
        <Link to="/" className={styles.link}>
          Log out
        </Link>
      </div>
    </div>
  );
}
