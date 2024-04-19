import styles from "./Navbar2/NavbarTwo.module.css";

export default function ToLibrary({ type }) {
  return (
    <div>
      {type === "more-projects" ? (
        <button className={styles.moreProjects}>More Projects</button>
      ) : (
        ""
      )}

      {type === "back-to-projects" ? (
        <button className={styles.backToProjects}>BACK TO PROJECTS</button>
      ) : (
        ""
      )}
    </div>
  );
}
