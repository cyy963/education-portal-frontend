import styles from "../../NavBar1/NavBarOne.module.css";
import { Link } from "react-router-dom";

export default function NavBarLink(props) {
  return (
    <Link className={styles.link} to={props.link}>
      {props.text}
    </Link>
  );
}
