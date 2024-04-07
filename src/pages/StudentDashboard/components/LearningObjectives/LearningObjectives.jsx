import React from "react";
import styles from './LearningObjectives.module.css'; // Updated import to use css modules

export default function LearningObjectives() {
  return (
   
<div className={styles.overlayBox}> {/* This name not matching the .css caused not to show up*/}

<div className={styles.row}> {/* Updated class name - to use modules*/}
  <div className={styles.column}> {/* Updated class name - to use modules*/}
  <h2>Explore Scratch blocks</h2>
</div>
</div>

<div className={styles.row}> {/* Updated class name - to use modules*/}
  <div className={styles.column}> {/* Updated class name - to use modules*/}
  <p>Learn the basic function of some basic scratch blocks such as "say," "wait," "go to" and "hide."</p>
</div>
</div>

<div className={styles.row}> {/* Updated class name - to use modules*/}
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <h3>Look Blocks</h3>
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <h3>Control Blocks</h3>
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <h3>Motion Blocks</h3>
  </div>
</div>

<div className={styles.row}> {/* Updated class name - to use modules*/}
  <div className={styles.column}> {/* Updated class name - to use modules*/}
  < img src='/images/projects/Project01-obj1.png' alt="Look Blocks" />
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <img src='/images/projects/Project01-obj2.png' alt="Look Blocks" />
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <img src="/images/projects/Project01-obj3.png" alt="Control Blocks"/>
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <img src='/images/projects/Project01-obj4.png' alt="Control Blocks" />
  </div>
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <img src="/images/projects/Project01-obj5.png" alt="Motion Blocks"/>
  </div>     
  <div className={styles.column}> {/* Updated class name - to use modules*/}
    <img src='/images/projects/Project01-obj6.png' alt="Motion Blocks" />
  </div>
</div>

</div>
  
  );
}
