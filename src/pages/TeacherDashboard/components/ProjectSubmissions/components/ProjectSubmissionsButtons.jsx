import { useEffect, useState } from "react";
// Import styles
import styles from "../ProjectSubmissions.module.css";
import DownloadPdf from "./DownloadPdf";

export default function ProjectSubmissionsButtons({
  type,
  projects,
  setProjects,
  checked,
  setChecked,
}) {
  const [changeIndex, setChangeIndex] = useState();
  const [changed, setChanged] = useState();
  const [display, setDisplay] = useState(false);
  const [downloadProjects, setDownloadProjects] = useState([]);

  //Functions
  useEffect(() => {
    let testChangeIndex = [];
    let testChanged = [];
    let testDownloadProjects = [];
    for (let i = 0; i < checked.length; i++) {
      if (!checked[i].checked) {
        testChangeIndex.push(i);
      } else {
        testChanged.push(checked[i]);
        testDownloadProjects.push(projects[i]);
      }
    }

    setChangeIndex(testChangeIndex);
    setChanged(testChanged);
    setDownloadProjects(testDownloadProjects);
  }, [checked]);

  const handleDownload = () => {
    console.log(downloadProjects);
    setDisplay(true);
  };

  const handleMarkComplete = () => {
    //Delete objects from project
    projects.map((user, index) => {
      if (
        user.student_id === checked[index].studentId &&
        user.project_id === checked[index].projectId &&
        checked[index].checked === true
      ) {
        fetch("http://localhost:4000/api/project-submission", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId: user.student_id,
            projectId: user.project_id,
            dateComp: new Date().toISOString().slice(0, 19).replace("T", " "),
          }),
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log("Mark complete successful");
          }
        });
      }
    });

    let updatedProjects;

    updatedProjects = changeIndex.map((item) => {
      return projects[item];
    });

    setProjects(updatedProjects);

    const updatedChecked = changed.map((item) => {
      return { studentId: item, projectId: item.project_id, checked: false };
    });

    setChecked(updatedChecked);
  };

  if (type === "download") {
    return (
      <>
        <button className={styles.btn} onClick={handleDownload}>
          <h4 className={styles.btnText}> {"\u2B73"} DOWNLOAD FILES</h4>
        </button>
        {display && (
          <DownloadPdf setDisplay={setDisplay} projects={downloadProjects} />
        )}
      </>
    );
  } else if (type === "complete") {
    return (
      <button className={styles.btn} onClick={handleMarkComplete}>
        <h4 className={styles.btnText}>{"\u2713"} MARK AS COMPLETE PROJECT</h4>
      </button>
    );
  } else {
    return <p>Something went wrong</p>;
  }
}
