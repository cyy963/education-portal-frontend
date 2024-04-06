// Import images
import submitIcon from "../../../../../assets/StudentDashboard/sendPhoto.png";
import callIcon from "../../../../../assets/StudentDashboard/callTeacher.png";

// Import stylsheet
import styles from "../SubmitProject.module.css";

export default function SubmitProjectButtons({ type }) {
  if (type === "photo") {
    return (
      <div>
        <button className={styles.button}>
          <img src={submitIcon} alt="submit photo icon" />
          <p className={styles.btnText}>Send photo</p>
        </button>
      </div>
    );
  } else if (type === "call") {
    return (
      <div>
        <button className={styles.button}>
          <img src={callIcon} alt="submit photo icon" />
          <p className={styles.btnText}>Call teacher</p>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Something went wrong</h3>
      </div>
    );
  }
}
