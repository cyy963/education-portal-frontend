import React from "react";
import styles from './MakeProject.module.css';

export default function MakeProject() {

  return (
    <div className={styles.overlayBox}>
      <div className={styles.imageStyle}>
        <img
          src="/images/projects/Project01.png" //Its a different image from mockup//
          alt="Project Description"
          className={styles.imageStyle} 
        />
      </div>
    </div>
  );
}
