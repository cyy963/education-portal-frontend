import styles from "../HelpRequests.module.css";
import { useState } from "react";

import Checkbox from "./CheckBox";

function StudentHelp({requests, checked, setChecked}) {
    return (
        <div>
            {requests.map((item, index) => {
                return (
                    <div className={styles.studentHelp} key={index}>
                        <Checkbox
                            checked={checked}
                            setChecked={setChecked}
                            studentId={requests[index].studentId}
                        />

                        <div className={styles.checkBoxDiv}>
                            <div className={styles.requestFlex}>
                                {item.profileIcon && (
                                    <img
                                        src={item.profileIcon}
                                        alt="student icon"
                                        className={styles.profilePic}
                                    />
                                )}
                                <div>
                                    <h4 className={styles.nameHelp}>
                                        {item.name.toUpperCase()} needs help with their project
                                    </h4>
                                </div>
                            </div>

                            <div className={styles.dateTime}>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        )}
        </div>
    )
}

export default StudentHelp;