import { useEffect, useState } from "react";
import styles from "./ProjectSubmissions.module.css";

// Importing components
import ProjectSubmissionsButtons from "./components/ProjectSubmissionsButtons";
import SubmittedProjects from "./components/SubmittedProjects";
import projectImg from "../../../../assets/StudentDashboard/makeProject-screenshot.png";

export default function ProjectSubmissions() {
  // Test projects to ensure things work (will replace with fetch eventually)
  const testProject = [
    {
      studentId: 0,
      name: "Aiden",
      profilePic: "/images/students/AidenAndrews.png",
      projectPic: { projectImg },
      date: "TUE 28 April 2020",
      time: "10:43 AM",
      dateComplete: null,
    },
    {
      studentId: 1,
      name: "Rawiri",
      profilePic: "/images/students/RawiriFletcher.png",
      projectPic: { projectImg },
      date: "TUE 28 April 2020",
      time: "10:27 AM",
      dateComplete: null,
    },
    {
      studentId: 2,
      name: "Neveah",
      profilePic: "/images/students/NeveahMachenry.png",
      date: "TUE 28 April 2020",
      time: "9:58 AM",
      dateComplete: null,
    },
    {
      studentId: 3,
      name: "Alice",
      profilePic: "/images/students/AliceKindellan.png",
      date: "TUE 28 April 2020",
      time: "9:50 AM",
      dateComplete: null,
    },
    {
      studentId: 4,
      name: "Courtney",
      profilePic: "/images/students/CourtneyBristol.png",
      date: "TUE 28 April 2020",
      time: "9:46 AM",
      dateComplete: null,
    },
  ];

  const [projects, setProjects] = useState([...testProject]);
  const [checked, setChecked] = useState([]);

  let checking;

  useEffect(() => {
    checking = projects.map((item) => {
      return { studentId: item.studentId, checked: false };
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
