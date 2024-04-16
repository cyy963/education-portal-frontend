import { useEffect, useState } from "react";
import styles from "./ProjectSubmissions.module.css";

// Importing components
import ProjectSubmissionsButtons from "./components/ProjectSubmissionsButtons";
import SubmittedProjects from "./components/SubmittedProjects";

export default function ProjectSubmissions() {
  const [projects, setProjects] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/project-submission")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProjects(result);
      });
  }, []);

  let checking;

  useEffect(() => {
    checking = projects.map((item) => {
      return { studentId: item.student_id, checked: false };
    });
    setChecked(checking);
  }, [projects]);

  return (
    <div className={styles.content}>
      {/* container for scrollbar content */}
      <div className={styles.forScroll}>
        <div className={styles.flex}>
          <h3 className={styles.title}>PROJECT SUBMISSIONS</h3>
          <div>
            <ProjectSubmissionsButtons
              type="download"
              projects={projects}
              checked={checked}
            />
            <ProjectSubmissionsButtons
              type="complete"
              projects={projects}
              setProjects={setProjects}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
        </div>
        <SubmittedProjects
          projects={projects}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </div>
  );
}
