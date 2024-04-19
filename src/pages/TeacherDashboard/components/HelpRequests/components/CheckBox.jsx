// Import styles
import styles from "../HelpRequests.module.css";

export default function Checkbox({ checked, setChecked, index }) {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked[index]}
        onChange={() => {
          const newChecked = checked.map((item, i) => {
            return i === index ? !item : item;
          });
          setChecked(newChecked);
        }}
      />
    </div>
  );
}