import styles from "../HelpRequests.module.css";
import { useState } from "react";

// array of students
function StudentHelp() {
    const testRequest = [
        {
            name: "Aiden",
            profileIcon: "",
            date: "TUE 28 April 2020",
            time: "10:43 AM",
        },
        {
            name: "Rawiri",
            profileIcon: "",
            date: "TUE 28 April 2020",
            time: "9:52 AM",
        },
        {
            name: "Neveah",
            profileIcon: "",
            date: "27 April 2020",
            time: "4:59 PM",
        },
        {
            name: "Javier",
            profileIcon: "",
            date: "27 April 2020",
            time: "3:00 PM",
        },
        {
            name: "Tokio",
            profileIcon: "",
            date: "27 April 2020",
            time: "11:23 AM",
        },
    ];

    // mapping through array items to display
    const [requests, setRequests] = useState([...testRequest]);

    return (
        <div>
            {requests.map((item, index) => {
                return (
                    <div className={styles.studentHelp} key={index}>
                        <div>
                            {item.profileIcon && (
                                <img src={item.profileIcon} alt="student icon"
                                className={styles.icon} />
                            )}    

                            <div>
                                <h5 className={styles.nameHelp}>{item.name.toUpperCase()} needs help with their project</h5>
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