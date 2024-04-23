// Import css
import styles from "../ProjectSubmissions.module.css";

// Import component
import Checkbox from "./Checkbox";
import MyModalImage from "./MyModalImage";

export default function SubmittedProjects({ projects, checked, setChecked }) {
  let pronoun;
  return (
    <div>
      {projects.map((item, index) => {
        // Ensures the assigned pronoun is used when referencing students
        if (item.gender === 0) {
          pronoun = "their";
        } else if (item.gender === 1) {
          pronoun = "his";
        } else if (item.gender === 2) {
          pronoun = "her";
        }
        return (
          <div className={styles.submitedProject} key={index}>
            <Checkbox
              checked={checked}
              setChecked={setChecked}
              studentId={projects[index].student_id}
              projectId={projects[index].project_id}
            />

            <div className={styles.checkboxDiv}>
              <div className={styles.projectFlex}>
                {item.profile_pic && (
                  // If there is a profile pic show this
                  <img
                    src={item.profile_pic}
                    alt="Profile picture"
                    className={styles.profileImg}
                  />
                )}
                {item.submission ? (
                  // If there is a submission show this
                  <div className={styles.imageFlex}>
                    <h4 className={styles.titleName}>
                      {/* Shows only their first name in all caps */}
                      {item.student_name.split(" ", 1)[0].toUpperCase() + " "}
                      submitted {pronoun} project
                    </h4>
                    <div>
                      {/* Allows the image to be shown and enlarged */}
                      <MyModalImage projects={projects} index={index} />
                    </div>
                  </div>
                ) : (
                  // If there isn't a submission
                  <div className={styles.textSubmit}>
                    <h4 className={styles.titleName}>
                      {item.student_name.split(" ", 1)[0].toUpperCase() + " "}
                      wants to show {pronoun} project
                    </h4>
                  </div>
                )}
              </div>
              <div className={styles.dateTime}>
                {/* Takes just the date and just the time from the submission */}
                <p>{item.date_submitted.slice(0, 10)}</p>
                <p>{item.date_submitted.slice(11, 19)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
