import styles from "./ProjectSubmissions.module.css";

// Importing components
import ProjectSubmissionsButtons from "./components/ProjectSubmissionsButtons";
import SubmittedProjects from "./components/SubmittedProjects";

export default function ProjectSubmissions() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <h3 className={styles.title}>PROJECT SUBMISSIONS</h3>
          <div>
            <ProjectSubmissionsButtons type="download" />
            <ProjectSubmissionsButtons type="complete" />
          </div>
        </div>
        <SubmittedProjects />
      </div>
    </div>
  );
}
