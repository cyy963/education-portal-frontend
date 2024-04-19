import React from "react";
import styles from './Instructions.module.css';

export default function Instructions() {
  return (
    <div className={styles.overlayBox}>
      <div className={styles.centeredColumn}>
        <div className={styles.row}>
          <h2 className={styles.join}>1. Join Scratch</h2>
        </div>
        <div className={styles.row}>
          <p className={styles.body}>If you haven’t used Scratch before, you will need to join Scratch first. 
            Go to <a href="https://scratch.mit.edu" className={styles.linkStyle}>https://scratch.mit.edu</a>. 
            Click on <a href="https://scratch.mit.edu/join" 
            className={styles.linkStyle} target="_blank" rel="noopener noreferrer">Join Scratch</a>.</p>
        </div>
        <div className={styles.row}>
        <img src='/images/projects/Project01-instructions.png' 
        alt="Create games with scratch" className={styles.imageStyle} />
        </div>
        <div className={styles.row}>
          <p className={styles.body}>Follow the instructions to join. You will need a username and a password 
            that you will remember. If possible, you should also verify your email 
            address so that you can Share projects later. Ask your teacher to help 
            with this step if you don’t have an email address, or if you are not sure 
            what to do.</p>
        </div>
      </div>
    </div>
  );
}

