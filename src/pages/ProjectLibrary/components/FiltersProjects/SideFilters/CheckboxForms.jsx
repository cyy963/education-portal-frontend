import sideFilterStyles from "./SideFilters.module.css";

export default function CheckboxForms(props) {
  return (
    // For every checkbox type (i.e. subscription, activity type, year level, subject matter), a title and horizontal line is rendered, followed by a child for every checkbox and label
    <div className={sideFilterStyles.sideFilters}>
      <form className={sideFilterStyles.sideFilter}>
        <p className={sideFilterStyles.filterTitle}>{props.filterTitle}</p>
        <hr className={sideFilterStyles.lineBreak} />
        {props.children}
      </form>
    </div>
  );
}
