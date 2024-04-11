import sideFilterStyles from "./SideFilters.module.css";

export default function CheckboxForms(props) {
  return (
    <div className={sideFilterStyles.sideFilters}>
      <form className={sideFilterStyles.sideFilter}>
        <p className={sideFilterStyles.filterTitle}>{props.filterTitle}</p>
        <hr className={sideFilterStyles.lineBreak} />
        {props.children}
      </form>
    </div>
  );
}
