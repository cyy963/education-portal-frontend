import React from "react";
import styles from './VideoTutorial.module.css';

export default function VideoTutorial() {
  return (
    <div className={styles.overlayBox}>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/YpTPKiPN9G4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoStyle}
        ></iframe>
      </div>
    </div>
  );
}
