import { Link } from "react-router-dom";
import SideFilters from "./components/SideFilters";
import styles from "./ProjectLibrary.module.css";
import AllProjects from "./components/AllProjects";

export default function ProjectLibrary() {
  return (
    <div>
      <main>
        {/* Grid layout to be made with four sections (as of now). These are to have the justify-content: center setting.*/}
        {/* Sections:
          blank     header 
          left      right */}
        <header>
          <h1>PROJECTS</h1>
          <p>
            Welcome to the project library. You can use the filters on the right
            to help you search for specific projects.
          </p>
        </header>

        {/* side filters to be start-justified */}
        <div className={styles.left}>
          <SideFilters />
        </div>

        {/* right section to include 'beginner, intermediate, advanced' filters and 'show 5, 10 or All' in one line (probably as their own component(s)) 
      right section will also have project cards and back to top button.*/}
        <div className={styles.right}>
          <AllProjects />
        </div>
      </main>
    </div>
  );
}
