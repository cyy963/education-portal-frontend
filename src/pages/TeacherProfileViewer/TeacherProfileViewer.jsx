import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./TeacherProfileViewer.module.css";
import NavBarOne from "../../common/NavBar1/NavBarOne";
import FooterOne from "../../common/Footer1/FooterOne";
import PopUpMenu from "../../common/NavBar1/components/PopUpMenu";
import popUpMenuStyles from "../../common/NavBar1/components/PopUpMenu.module.css";

function TeacherProfileViewer() {
    const [popUp, setPopUp] = useState(false);
    const togglePopUp = () => setPopUp(!popUp);
    const removePopUp = () => setPopUp(false);
    const [teacher, setTeacher] = useState("")

    useEffect(() => {
        fetch(`http://localhost:4000/teacher-profile-viewer`)
        .then((response) => response.json())
        .then ((result) => {
            setTeacher(result[0]);
        });
    }, []);
          
     return (
        <div onClick={removePopUp}>
            {teacher && (
                <div>
                <NavBarOne
                    text="PROJECTS"
                    link="/project-library"
                    userImage={teacher.profile_pic}
                    alt={`${teacher.teacher_name}' photo`}
                    userName={`${teacher.teacher_name.toUpperCase()}`}
                    onChange={togglePopUp}
                />
                </div>
            )}
            <PopUpMenu
                profileLink="/student-profile-viewer"
                onClick={togglePopUp}
                arrowClassName={`${popUpMenuStyles.arrow} ${
                  popUp ? popUpMenuStyles.show : ""
                }`}
                menuClassName={`${popUpMenuStyles.popUpMenu} ${
                  popUp ? popUpMenuStyles.show : ""
                }`}
            />
        {teacher && (
            <main className={styles.main}>
            {/* left section */}
            <div className={styles.left}>
                <img className={styles.teacherPhoto}
                   src={teacher.profile_pic}
                   alt={`${teacher.teacher_name}'s photo`}
                />

                <button className={styles.btn}>EDIT PROFILE</button>
                <button className={styles.btn}>CHANGE PHOTO</button>
                <button className={styles.btn}>SETTINGS</button>
            </div>

            <div className={styles.teacherInfoCard}>
               <header className={styles.header}>
                   <h1 className={styles.teacherName}>{teacher.teacher_name}</h1>
               </header>

               <div className={styles.right}>
                <h2 className={styles.labels}>School</h2>
                <h2 className={styles.labels}>Date of Birth</h2>
                <h2 className={styles.labels}>Contact No</h2>
                <h2 className={styles.labels}>Email Address</h2>
            </div>

            {/* right section input */}
            <div className={styles.input}>
                <p className={styles.deets}>{teacher.school}</p>
                <p className={styles.deets}>{teacher.date_of_birth}</p>
                <p className={styles.deets}>{teacher.contact_number}</p>
                <p className={styles.deets}>{teacher.email}</p>
            </div>
            </div>

            {/* footer and buttons */}
            <footer className={styles.backButtons}>
                <Link to="/project-library">
                   <button className={styles.backButton}>BACK TO PROJECTS</button>
                </Link>

                <Link to="/teacher-dashboard">
                   <button className={styles.backButton}>BACK TO DASHBOARD</button>
                </Link>
            </footer>
        </main>
        )}
         <FooterOne/>
         </div>
     )
 }
 
 export default TeacherProfileViewer
