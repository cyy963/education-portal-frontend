import sideFilterStyles from "./SideFilters.module.css";

export default function CheckboxAndLabel(props) {
  return (
    <div className={sideFilterStyles.checkboxAndLabel}>
      <input
        type="checkbox"
        id={props.label}
        className={sideFilterStyles.checkbox}
        onChange={props.function}
        defaultChecked={true}
      />
      <label htmlFor={props.label} className={sideFilterStyles.checkboxLabel}>
        {props.label}
      </label>
    </div>
  );
}
