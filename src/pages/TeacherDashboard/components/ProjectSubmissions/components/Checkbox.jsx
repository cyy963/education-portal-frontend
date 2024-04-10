// Import styles
import { useEffect, useState } from "react";
import styles from "../ProjectSubmissions.module.css";

export default function Checkbox({ checked, setChecked, studentId }) {
  const [isChecked, setIsChecked] = useState(false);

  // Use effect to handle isChecked
  useEffect(() => {
    const holdCheckList = checked.filter((item) => {
      return item.studentId === studentId;
    });

    const holdCheck = holdCheckList[0].checked;
    setIsChecked(holdCheck);
  }, [checked]);

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          const newChecked = checked.map((item) => {
            const value =
              studentId === item.studentId ? !item.checked : item.checked;
            return { studentId: item.studentId, checked: value };
          });
          setChecked(newChecked);
        }}
      />
    </div>
  );
}
