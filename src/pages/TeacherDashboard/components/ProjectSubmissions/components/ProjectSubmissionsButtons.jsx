// Import styles
import styles from "../ProjectSubmissions.module.css";

export default function ProjectSubmissionsButtons({ type }) {
  if (type === "download") {
    return (
      <button className={styles.btn}>
        <h4 className={styles.btnText}>DOWNLOAD</h4>
      </button>
    );
  } else if (type === "complete") {
    return (
      <button className={styles.btn}>
        <h4 className={styles.btnText}>MARK AS COMPLETE PROJECT</h4>
      </button>
    );
  } else {
    return <p>Something went wrong</p>;
  }
}
