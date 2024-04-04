import { useEffect, useState } from "react";
// Import styles
import styles from "../ProjectSubmissions.module.css";

export default function ProjectSubmissionsButtons({
  type,
  projects,
  setProjects,
  checked,
  setChecked,
}) {
  const [changeIndex, setChangeIndex] = useState();

  //Functions
  useEffect(() => {
    let testChangeIndex = [];
    for (let i = 0; i < checked.length; i++) {
      if (!checked[i]) {
        testChangeIndex.push(i);
      }
    }

    setChangeIndex(testChangeIndex);
  }, [checked]);

  function handleCheck() {
    const changeChecked = projects.map((item) => false);
    setChecked(changeChecked);
  }

  const handleDownload = () => {
    // updateChangeIndex();
    console.log("Download");
  };

  const handleMarkComplete = () => {
    // updateChangeIndex();
    console.log("Mark complete");
    console.log(changeIndex);

    // Delete objects from project
    let updatedProjects;

    updatedProjects = changeIndex.map((item) => {
      return projects[item];
    });

    setProjects(updatedProjects);

    // reset checked
    handleCheck();
  };

  if (type === "download") {
    return (
      <button className={styles.btn} onClick={handleDownload}>
        <h4 className={styles.btnText}> {"\u2B73"} DOWNLOAD FILES</h4>
      </button>
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
