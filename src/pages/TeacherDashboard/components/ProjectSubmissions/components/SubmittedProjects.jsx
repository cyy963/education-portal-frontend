import projectImg from "../../../../../assets/StudentDashboard/makeProject-screenshot.png";

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
              studentId={projects[index].studentId}
            />

            <div className={styles.checkboxDiv}>
              <div className={styles.projectFlex}>
                {item.profilePic && (
                  <img
                    src={item.profilePic}
                    alt="Profile picture"
                    className={styles.profileImg}
                  />
                )}
                {item.projectPic ? (
                  <div className={styles.imageFlex}>
                    <h4 className={styles.titleName}>
                      {item.name.toUpperCase()} submitted his project
                    </h4>
                    <div onClick={handleImage}>
                      <button className={styles.enlargeBtn}>
                        <img
                          src={projectImg}
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
                      {item.name.toUpperCase()} wants to show their project
                    </h4>
                  </div>
                )}
              </div>
              <div className={styles.dateTime}>
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
