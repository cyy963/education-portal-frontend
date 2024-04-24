import React, { useEffect } from "react";
import { useState } from "react";
import scrollStyle from "../../../../common/Scrollbar.module.css"

import styles from "./HelpRequests.module.css";
import StudentHelp from "./components/StudentHelp";
import HelpRequestButtons from "./components/HelpRequestButtons";

function HelpRequests() {
     // mapping through array items to display
    const [requests, setRequests] = useState([]);
    const [checked, setChecked] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/help-requests")
      .then((response) => response.json())
      .then((result) => {
        setRequests(result);
      });
    }, []);

    let checking;

    useEffect(() => {
      checking = requests.map((item) => {
        return {studentId: item.student_id, requestId: item.request_id, checked: false};
      })
      setChecked(checking)
    }, [requests])

    return (
      <div className={styles.body}>

          <div className={styles.forScroll}>
            <div className={styles.flex}>
              <h2 className={styles.title}>HELP REQUESTS</h2>
              <h4 className={styles.otherText}>REPLY</h4>
              <div>
                <HelpRequestButtons
                type="done"
                requests={requests}
                setRequests={setRequests}
                checked={checked}
                setChecked={setChecked}
                />
              </div>
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
    )
}

export default HelpRequests