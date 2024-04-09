import styles from "../ProjectLibrary.module.css";

export default function CheckboxAndLabel(props) {
  return (
    <div className={styles.checkboxAndLabel}>
      <input
        type="checkbox"
        id={props.label}
        className={styles.checkbox}
        onChange={props.function}
        defaultChecked={props.defaultChecked}
      />
      <label htmlFor={props.label} className={styles.checkboxLabel}>
        {props.label}
      </label>
    </div>
  );
}
