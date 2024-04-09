import styles from "./ProjectSubmissions.module.css";
import scrollStyle from "../../../../common/Scrollbar.module.css";

// Importing components
import ProjectSubmissionsButtons from "./components/ProjectSubmissionsButtons";
import SubmittedProjects from "./components/SubmittedProjects";

export default function ProjectSubmissions() {
  return (
    <div className={styles.content}>
      {/* container for scrollbar content */}
      <div className={styles.forScroll}>
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
