import styles from "../HelpRequests.module.css";
import { useState } from "react";

import Checkbox from "./CheckBox";
// array of students
function StudentHelp() {
    const testRequest = [
        {
            name: "Aiden",
            profileIcon: "/images/students/AidenAndrews.png",
            date: "TUE 28 April 2020",
            time: "10:43 AM",
        },
        {
            name: "Rawiri",
            profileIcon: "/images/students/RawiriFletcher.png",
            date: "TUE 28 April 2020",
            time: "9:52 AM",
        },
        {
            name: "Neveah",
            profileIcon: "/images/students/NeveahMachenry.png",
            date: "27 April 2020",
            time: "4:59 PM",
        },
        {
            name: "Javier",
            profileIcon: "/images/students/JavierFuego.png",
            date: "27 April 2020",
            time: "3:00 PM",
        },
        {
            name: "Tokio",
            profileIcon: "/images/students/TokioHan.png",
            date: "27 April 2020",
            time: "11:23 AM",
        },
    ];

    // mapping through array items to display
    const [requests, setRequests] = useState([...testRequest]);
    const [checked, setChecked] = useState([false, false, false, false, false]);

    return (
        <div>
            {requests.map((item, index) => {
                return (
                    <div className={styles.studentHelp} key={index}>
                        <Checkbox checked={checked} setChecked={setChecked} index={index} />

                        <div className={styles.checkBoxDiv}>
                            <div className={styles.requestFlex}>
                                {item.profileIcon && (
                                    <img src={item.profileIcon} alt="student icon"
                                    className={styles.profilePic} />
                                )}

                                <div>
                                <h5 className={styles.nameHelp}>{item.name.toUpperCase()} needs help with their project</h5>
                                </div>
                            </div>    

                            <div className={styles.dateTime}>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default StudentHelp;