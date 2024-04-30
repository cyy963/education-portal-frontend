import styles from "./FiltersProjects.module.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className={styles.card}>
      {/* The whole card is a link to the project. Props will be received using projects array in parent component */}
      <Link
        className={styles.link}
        to={props.link}
        style={{ textDecoration: "none" }}
      >
        <img
          className="project-image"
          src={props.project_pic}
          alt="Project Image"
          width="100%"
        />
        <h2 className={styles.projectName}>{props.name}</h2>
        <div className={styles.levelActivityDescription}>
          <p className={styles.cardDescription}>
            {props.course} | {props.activity_type}
          </p>
        </div>
      </Link>
    </div>
  );
}
