import styles from "./SubmitProject.module.css";

// Import images
import projectImg from "../../../../assets/StudentDashboard/makeProject-screenshot.png";
import submitPojectImg from "../../../../assets/StudentDashboard/submitProject-Photo.png";

// Import components
import SubmitProjectButtons from "./components/SubmitProjectButtons";

export default function SubmitProject() {
  return (
    <div className={styles.flexMain}>
      <div className={styles.content}>
        <div className={styles.flex} id={styles.left}>
          <img src={projectImg} alt="Project image" className={styles.img} />
          <h3>Submit project photo</h3>
          <p className={styles.text}>
            After completing your project, take a screenshot of your project and
            upload it here.
          </p>
          <SubmitProjectButtons type="photo" />
        </div>

        <div className={styles.flex}>
          <img
            src={submitPojectImg}
            alt="submit project image"
            className={styles.img}
          />

          <h3>Show your teacher</h3>
          <p className={styles.text}>
            If your teacher is in the same room as you. Click the button to let
            them know you are done.
          </p>

          <SubmitProjectButtons type="call" />
        </div>
      </div>
    </div>
  );
}