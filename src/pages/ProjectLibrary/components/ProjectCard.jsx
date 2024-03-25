import styles from "../ProjectLibrary.module.css";

export default function ProjectCard(props) {
  return (
    // hard-coded at first, followed by dynamic coding once I have the layout down or I know what to do with them
    <div className={styles.card}>
      <img
        className="project-image"
        src={props.src}
        alt={props.alt}
        width="100%"
      />
      <h2>{props.name}</h2>
      <div className={styles.levelActivityDescription}>
        <p className={styles.cardDescription}>
          {props.level} | {props.activity}
        </p>
      </div>
    </div>
  );
}
