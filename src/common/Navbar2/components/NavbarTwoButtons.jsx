import styles from "../NavbarTwo.module.css";

export default function NavbarTwoButtons({
  type,
  status,
  setStatus,
  isDisabled,
  setIsDisabled,
}) {
  function handleClick() {
    status === "start" ? setStatus("submit") : setIsDisabled(true);
  }

  return (
    <div>
      {type === "start" ? (
        <button
          className={isDisabled ? styles.submitted : styles.start}
          disabled={isDisabled}
          onClick={handleClick}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)} Project
        </button>
      ) : (
        ""
      )}
      {type === "submitted" ? (
        <button className={styles.submitted}>Start Project</button>
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
