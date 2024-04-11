import styles from "./../ProjectLibrary.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PROJECTS</h1>
      <p className={styles.description}>
        Welcome to the project library. You can use the filters on the left to
        help you search for specific projects.
      </p>
    </header>
  );
}
