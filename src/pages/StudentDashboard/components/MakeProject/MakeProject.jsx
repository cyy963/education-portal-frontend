import React from "react";
import styles from './MakeProject.module.css';
import screenshotImg from "../../../../assets/StudentDashboard/makeProject-screenshot.png";

export default function MakeProject() {

  return (
    <div className={styles.overlayBox}>
        <img
          src={screenshotImg} //Its a different image from mockup//
          alt="Project Description"
          className={styles.imageStyle} 
        />
    </div>
  );
}
