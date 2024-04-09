import styles from "./NavbarTwo.module.css";

export default function NavbarTwoProject() {
  return (
    <div className={styles.flexProjectMain}>
      {/* Change circles to be mapped out (take project id for which div has number) */}

      <div className={styles.flexProject}>
        <h5 className={styles.title}>PROJECT</h5>
        <p className={styles.paragraph}>Introduction</p>
      </div>
      <div className={styles.flexCircle}>
        <div className={styles.circleBig}>
          <h5 className={styles.title}>1</h5>
        </div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
