import sideFilterStyles from "./SideFilters.module.css";

export default function CheckboxAndLabel(props) {
  return (
    // Individual checkboxes and labels
    <div className={sideFilterStyles.checkboxAndLabel}>
      {/* Checkbox */}
      <input
        type="checkbox"
        id={props.label}
        className={sideFilterStyles.checkbox}
        onChange={props.function}
        defaultChecked={true}
      />
      {/* label */}
      <label htmlFor={props.label} className={sideFilterStyles.checkboxLabel}>
        {props.label}
      </label>
    </div>
  );
}
