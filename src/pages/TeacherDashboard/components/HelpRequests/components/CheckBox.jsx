// Import styles
import { useEffect, useState } from "react";
import styles from "../HelpRequests.module.css";

export default function Checkbox({ checked, setChecked, studentId, requestId }) {
  const [isChecked, setIsChecked] = useState(false);

  // Use effect to handle isChecked
  useEffect(() => {
    const holdCheckList = checked.filter((item) => {
      return item.studentId === studentId && item.requestId === requestId;
    });
    // Once the holdCheckList has the object then it will take checked key-value pair
    let holdCheck;
    holdCheckList[0]
      ? (holdCheck = holdCheckList[0].checked)
      : (holdCheck = false);
    setIsChecked(holdCheck);
  }, [checked]);
  
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          const newChecked = checked.map((item) => {
            // Creates a new array with the new value of checked.
            const value =
              studentId === item.studentId && requestId === item.requestId
                ? !item.checked //If it's the desired checkbox switch the checked (true => false, false => true)
                : item.checked; //Otherwise it stays the same
            return {
              // Saves values to the new array
              studentId: item.studentId,
              requestId: item.requestId,
              checked: value,
            };
          });
          setChecked(newChecked);
        }}
      />
    </div>
  );
}