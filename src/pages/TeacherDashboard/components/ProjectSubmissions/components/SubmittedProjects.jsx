import { useState } from "react";
// import projectImg from "../../../../assets/StudentDashboard/makeProject-screenshot.png";
import projectImg from "../../../../../assets/StudentDashboard/makeProject-screenshot.png";

// Import css
import styles from "../ProjectSubmissions.module.css";

export default function SubmittedProjects() {
  const testProject = [
    {
      name: "Aiden",
      profilePic: "/images/students/AidenAndrews.png",
      projectPic: { projectImg },
      date: "TUE 28 April 2020",
      time: "10:43 AM",
    },
    {
      name: "Rawiri",
      profilePic: "/images/students/RawiriFletcher.png",
      date: "TUE 28 April 2020",
      time: "10:27 AM",
    },
    {
      name: "Neveah",
      profilePic: "/images/students/NeveahMachenry.png",
      date: "TUE 28 April 2020",
      time: "9:58 AM",
    },
    {
      name: "Alice",
      profilePic: "/images/students/AliceKindellan.png",
      date: "TUE 28 April 2020",
      time: "9:50 AM",
    },
    {
      name: "Courtney",
      profilePic: "/images/students/CourtneyBristol.png",
      date: "TUE 28 April 2020",
      time: "9:46 AM",
    },
  ];

  const [projects, setProjects] = useState([...testProject]);

  return (
    <div>
      {projects.map((item, index) => {
        return (
          <div className={styles.submitedProject} key={index}>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox}
                id={`${item.name}Project`}
                checked="checked"
              />
              <span className={styles.trueCheckbox}></span>
            </div>
            <div className={styles.checkboxDiv}>
              <div className={styles.projectFlex}>
                {item.profilePic && (
                  <img
                    src={item.profilePic}
                    alt="Profile picture"
                    className={styles.profileImg}
                  />
                )}
                {item.projectPic ? (
                  <div className={styles.imageFlex}>
                    <h4 className={styles.titleName}>
                      {item.name.toUpperCase()} submitted his project
                    </h4>
                    <div>
                      <img
                        src={projectImg}
                        alt="Project Image"
                        className={styles.projectImg}
                      />{" "}
                      <br />
                      <button className={styles.enlargeBtn}>
                        Enlarge image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.textSubmit}>
                    <h4 className={styles.titleName}>
                      {item.name.toUpperCase()} wants to show their project
                    </h4>
                  </div>
                )}
              </div>
              <div className={styles.dateTime}>
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
