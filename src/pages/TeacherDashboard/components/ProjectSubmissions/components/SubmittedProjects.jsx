import { useState } from "react";

// Import css
import styles from "../ProjectSubmissions.module.css";

export default function SubmittedProjects() {
  const testProject = [
    {
      name: "Aiden",
      profilePic: "/images/students/AidenAndrews.png",
      date: "TUE 28 April 2020",
      time: "10:43 AM",
    },
    {
      name: "Rawiri",
      date: "TUE 28 April 2020",
      time: "10:27 AM",
    },
    {
      name: "Neveah",
      date: "TUE 28 April 2020",
      time: "9:58 AM",
    },
    {
      name: "Alice",
      date: "TUE 28 April 2020",
      time: "9:50 AM",
    },
    {
      name: "Courtney",
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
              {item.profilePic && (
                <img
                  src={item.profilePic}
                  alt="Profile picture"
                  className={styles.img}
                />
              )}
              {item.projectPic ? (
                <div>
                  <h4>{item.name.toUpperCase()} submitted his project</h4>
                </div>
              ) : (
                <div>
                  <h4>{item.name.toUpperCase()} wants to show their project</h4>
                </div>
              )}
            </div>
            <div className={styles.dateTime}>
              <p>{item.date}</p>
              <p>{item.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
