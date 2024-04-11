<<<<<<< HEAD:src/pages/ProjectLibrary/components/ProjectCard.jsx
import styles from "../ProjectLibrary.module.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    // hard-coded at first, followed by dynamic coding once I have the layout down or I know what to do with them
    <div className={styles.card}>
      <Link
        className={styles.link}
        to="/student-dashboard"
        style={{ textDecoration: "none" }}
      >
        <img
          className="project-image"
          src={props.src}
          alt={props.alt}
          width="100%"
        />
        <h2 className={styles.projectName}>{props.name}</h2>
        <div className={styles.levelActivityDescription}>
          <p className={styles.cardDescription}>
            {props.difficulty} | {props.activity}
          </p>
        </div>
      </Link>
    </div>
  );
}
=======
import styles from "./FiltersProjects.module.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    // hard-coded at first, followed by dynamic coding once I have the layout down or I know what to do with them
    <div className={styles.card}>
      <Link
        className={styles.link}
        to="/student-dashboard"
        style={{ textDecoration: "none" }}
      >
        <img
          className="project-image"
          src={props.src}
          alt={props.alt}
          width="100%"
        />
        <h2 className={styles.projectName}>{props.name}</h2>
        <div className={styles.levelActivityDescription}>
          <p className={styles.cardDescription}>
            {props.difficulty} | {props.activity}
          </p>
        </div>
      </Link>
    </div>
  );
}
>>>>>>> main:src/pages/ProjectLibrary/components/FiltersProjects/ProjectCard.jsx
