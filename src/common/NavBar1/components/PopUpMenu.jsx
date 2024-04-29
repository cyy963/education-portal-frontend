import styles from "./PopUpMenu.module.css";
import { Link } from "react-router-dom";

export default function PopUpMenu(props) {
  return (
    <div>
      {/* Div for popup arrow */}
      <div className={props.arrowClassName}></div>

      {/* Div for popup menu */}
      <div className={props.menuClassName}>

        {/* My profile link div */}
        <Link to={props.profileLink} className={styles.link}>My Profile</Link>

        {/* Settings link div */}
        <Link to={props.settingsLink} className={styles.link}>Settings</Link>

        {/* Logout/homepage link div */}
        <Link to="/" className={styles.link}>Log out</Link>
      </div>
    </div>
  );
}
