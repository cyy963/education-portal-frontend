import styles from "../ProjectLibrary.module.css";

export default function CheckboxForms(props) {
  return (
    <div className={styles.sideFilters}>
      <form className={styles.sideFilter}>
        <p className={styles.filterTitle}>{props.filterTitle}</p>
        <hr className={styles.lineBreak} />
        {props.children}
      </form>
    </div>
  );
}
