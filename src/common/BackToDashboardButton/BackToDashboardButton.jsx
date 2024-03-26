import { Link } from "react-router-dom";
import styles from "./BackToDashboardButton.module.css";

export default function BackToDashboardButton() {
  return (
    <div>
      {/* Need to make link dynamic depending on teacher or student user */}
      <Link to="/teacher-dashboard">
        <button className={styles.btn}>BACK TO DASHBOARD</button>
      </Link>
    </div>
  );
}
