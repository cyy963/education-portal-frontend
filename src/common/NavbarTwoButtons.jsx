import styles from "./NavbarTwo.module.css";

export default function NavbarTwoButtons({ type }) {
  return (
    <div>
      {type === "start" ? (
        <button className={styles.start}>Start Project</button>
      ) : (
        ""
      )}
      {type === "ask-for-help" ? (
        <button className={styles.askHelp}>Ask for help</button>
      ) : (
        ""
      )}
      {type === "help-centre" ? (
        <button className={styles.helpCentre}>Help centre</button>
      ) : (
        ""
      )}
    </div>
  );
}
