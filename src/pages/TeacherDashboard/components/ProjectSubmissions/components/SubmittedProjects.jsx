// Import css
import styles from "../ProjectSubmissions.module.css";

// Import component
import Checkbox from "./Checkbox";
import MyModal from "./MyModal";

export default function SubmittedProjects({ projects, checked, setChecked }) {
  let pronoun;
  return (
    <div>
      {projects.map((item, index) => {
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
            />

            <div className={styles.checkboxDiv}>
              <div className={styles.projectFlex}>
                {item.profile_pic && (
                  <img
                    src={item.profile_pic}
                    alt="Profile picture"
                    className={styles.profileImg}
                  />
                )}
                {item.submission ? (
                  <div className={styles.imageFlex}>
                    <h4 className={styles.titleName}>
                      {item.student_name.split(" ", 1)[0].toUpperCase() + " "}
                      submitted {pronoun} project
                    </h4>
                    <div>
                      <MyModal projects={projects} index={index} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.textSubmit}>
                    <h4 className={styles.titleName}>
                      {item.student_name.split(" ", 1)[0].toUpperCase() + " "}
                      wants to show {pronoun} project
                    </h4>
                  </div>
                )}
              </div>
              <div className={styles.dateTime}>
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
