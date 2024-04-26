import styles from "../HelpRequests.module.css";
import { useState } from "react";
 
import Checkbox from "./CheckBox";
 
function StudentHelp({ requests, checked, setChecked }) {
    return (
        <div>
            {requests.map((item, index) => {
                return (
                    <div className={styles.studentHelp} key={index}>
                        <Checkbox
                            checked={checked}
                            setChecked={setChecked}
                            studentId={item.student_id}
                            requestId={item.request_id}
                        />
 
                        <div className={styles.checkBoxDiv}>
                            <div className={styles.requestFlex}>
                                {item.profile_pic && (
                                    <img
                                        src={item.profile_pic}
                                        alt="student icon"
                                        className={styles.profilePic}
                                    />
                                )}
                                {item.help && (
                                    <div className={styles.imageFlex}>
                                        <h4 className={styles.nameHelp}>
                                            {item.student_name.toUpperCase()} wants to show their project
                                        </h4>
                                    </div>
                                )}
                                <div className={styles.imageFlex}>
                                    <h4 className={styles.nameHelp}>
                                        {item.student_name.toUpperCase()} needs help with their project
                                    </h4>
                                </div>
                            </div>
 
                            <div className={styles.dateTime}>
                                <p>{item.date_created.slice(0, 10)}</p>
                                <p>{item.date_created.slice(11, 19)}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default StudentHelp;