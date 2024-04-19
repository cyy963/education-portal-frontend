import React, { useEffect } from "react";
import { useState } from "react";
import scrollStyle from "../../../../common/Scrollbar.module.css"

import styles from "./HelpRequests.module.css";
import StudentHelp from "./components/StudentHelp";

function HelpRequests() {
  // array of students
    const testRequest = [
        {
            name: "Aiden",
            studentId: 0,
            profileIcon: "/images/students/AidenAndrews.png",
            date: "TUE 28 April 2020",
            time: "10:43 AM",
        },
        {
            name: "Rawiri",
            studentId: 1,
            profileIcon: "/images/students/RawiriFletcher.png",
            date: "TUE 28 April 2020",
            time: "9:52 AM",
        },
        {
            name: "Neveah",
            studentId: 2,
            profileIcon: "/images/students/NeveahMachenry.png",
            date: "27 April 2020",
            time: "4:59 PM",
        },
        {
            name: "Javier",
            studentId: 3,
            profileIcon: "/images/students/JavierFuego.png",
            date: "27 April 2020",
            time: "3:00 PM",
        },
        {
            name: "Tokio",
            studentId: 4,
            profileIcon: "/images/students/TokioHan.png",
            date: "27 April 2020",
            time: "11:23 AM",
        },
    ];

     // mapping through array items to display
    const [requests, setRequests] = useState([...testRequest]);
    const [checked, setChecked] = useState([]);

    let checking;

    useEffect(() => {
      checking = requests.map((item) => {
        return {studentId: item.studentId, checked: false};
      })
      setChecked(checking)
    }, [requests])

    return (
      <div className={styles.body}>
        <div className={styles.main}>

          <div className={styles.forScroll}>
            <div className={styles.flex}>
              <h2 className={styles.title}>HELP REQUESTS</h2>
              <h4 className={styles.otherText}>REPLY</h4>
              <h4 className={styles.otherText}>MARK AS DONE</h4>
            </div>
            <div>
              <StudentHelp
                requests={requests}
                checked={checked}
                setChecked={setChecked}
              />
            </div>
          </div>

        </div>
      </div>
    )
}

export default HelpRequests