import styles from "../NavbarTwo.module.css";

export default function NavbarTwoProject(props) {
  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={styles.flexProjectMain}>
      {/* Change circles to be mapped out (take project id for which div has number) */}

      <div className={styles.flexProject}>
        <h5 className={styles.title}>PROJECT</h5>
        <p className={styles.paragraph}>Introduction</p>
      </div>
      <div className={styles.flexCircle}>
        {projectIds.map((id) => {
          console.log(id, props.currentProjectId);
          return id == props.currentProjectId ? (
            <div className={styles.circleBig}>
              <h5 className={styles.title}>{props.currentProjectId}</h5>
            </div>
          ) : (
            <div className={styles.circle}></div>
          );
        })}
      </div>
    </div>
  );
}
