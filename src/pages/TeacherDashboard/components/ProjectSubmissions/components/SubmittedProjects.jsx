// Import css
import styles from "../ProjectSubmissions.module.css";

// Import component
import Checkbox from "./Checkbox";

export default function SubmittedProjects({ projects, checked, setChecked }) {
  function handleImage(e) {
    e.target.className = styles.enlarged;
  }

  return (
    <div>
      {projects.map((item, index) => {
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
                      {item.student_name.toUpperCase()} submitted their project
                    </h4>
                    <div onClick={handleImage}>
                      <button className={styles.enlargeBtn}>
                        <img
                          src={item.submission}
                          alt="Project Image"
                          className={styles.projectImg}
                        />
                        Enlarge image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.textSubmit}>
                    <h4 className={styles.titleName}>
                      {item.student_name.toUpperCase()} wants to show their
                      project
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
