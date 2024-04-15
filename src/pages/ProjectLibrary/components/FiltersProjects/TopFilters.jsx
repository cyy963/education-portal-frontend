export default function TopFilters(props) {
  return (
    <button className={props.className} onClick={props.function} id={props.id}>
      {props.label}
    </button>
  );
}
