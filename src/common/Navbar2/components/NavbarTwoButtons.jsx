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

  const handleAskForHelp = () => {
    // POST request to submit a help request
    console.log("Ask for help");
    fetch("http://localhost:4000/api/ask-for-help", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId: 7,
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("submit successful");
      }
    });
  };

  return (
    <div>
      {/* The different buttons  */}
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
        <button className={styles.askHelp} onClick={handleAskForHelp}>
          Ask for help
        </button>
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
