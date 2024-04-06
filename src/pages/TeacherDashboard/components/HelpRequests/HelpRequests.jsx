import React from "react";
import Checklist from "./checklist/CheckList";
import scrollStyle from "../../../../common/Scrollbar.module.css"

import styles from "./HelpRequests.module.css";
import StudentHelp from "./components/StudentHelp";

function HelpRequests() {
    return (
      // main body 
      <div className={styles.body}>
        <div className={styles.main}>

          {/* supposed to be the scroll bar area */}
          <div className={styles.forScroll}>
            <div className={styles.flex}>
              <h2 className={styles.title}>HELP REQUESTS</h2>
              <h4 className={styles.otherText}>REPLY</h4>
              <h4 className={styles.otherText}>MARK AS DONE</h4>
              
            </div>
            <div>
              {/* <Checklist/ */}
              <StudentHelp/>
            </div>
          </div>

          
          
        </div>
      </div>
      
    )
}


export default HelpRequests