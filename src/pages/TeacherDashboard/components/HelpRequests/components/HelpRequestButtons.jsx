import { useState } from "react";
import styles from "../HelpRequests.module.css"

function HelpRequestButtons({ requests, checked, type, setRequests, setChecked }) {
    const [changeIndex, setChangeIndex] = useState([]);
    const [changed, setChanged] = useState([]);

    const markAsDone = () => {
        requests.map((user, index) => {
            if (
                user.student_id === checked[index].studentId &&
                user.request_id === checked[index].requestId &&
                checked[index].checked === true
            ) {
                fetch("http://localhost:4000/help-requests", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        console.log("marked done")
                    }
                })
            }
        })

        const updatedRequests = changeIndex.map((item) => requests[item]);
        setRequests(updatedRequests);

        const updatedChecked = changed.map((item) => ({ studentId: item, requestId: item.request_id, checked: false }));
        setChecked(updatedChecked);
    };

    if (type === "done") {
        return (
            <button className={styles.button} onClick={markAsDone}>
                <h4 className={styles.buttonLabel}>MARK AS DONE</h4>
            </button>
        );
    } else {
        return <p>Something went wrong</p>;
    }
} 
export default HelpRequestButtons;