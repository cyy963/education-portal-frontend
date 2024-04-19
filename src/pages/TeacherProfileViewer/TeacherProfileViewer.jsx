import { Link } from "react-router-dom"
import styles from "./TeacherProfileViewer.module.css"
import NavBarOne from "../../common/NavBar1/NavBarOne";
import FooterOne from "../../common/Footer1/FooterOne";

function TeacherProfileViewer() {
  const teacherInfo = [
     {
         id: 1,
         name: "Jasmina Salvador",
         school: "Homai School",
         dateOfBirth: "25 June 1986",
         contactNumber: "027 754 28 00",
         email: "jsalvador@homai.edu",
         src: "/images/teachers/JasminaSalvador.png",
         alt: `Headshot of teacher Jasmina Salvador`,
     }
  ]

  const teacherData = [
    {
        id: 1,
        firstName: "Jasmina",
        lastName: "Salvador",
        userType: "Teacher",
        profile: "/images/teachers/JasminaSalvador.png",
    }
  ]

  const teacher = teacherData[0];
          
     return (
        <div>
            <NavBarOne
                text="PROJECTS"
                link="/project-library"
                userImage={teacher.profile}
                alt={`Profile photo of ${teacher.firstName} ${teacher.lastName}`}
                userName={`${teacher.firstName.toUpperCase()} ${teacher.lastName.toUpperCase()}`}
                function={teacher.function}
            />

         <main className={styles.main}>
             {/* left section */}
             <div className={styles.left}>
                 <img className={styles.teacherPhoto}
                    src={teacherInfo[0].src}
                    alt={teacherInfo[0].alt}
                 />
 
                 <button className={styles.btn}>EDIT PROFILE</button>
                 <button className={styles.btn}>CHANGE PHOTO</button>
                 <button className={styles.btn}>SETTINGS</button>
             </div>

             <div className={styles.teacherInfoCard}>
                <header className={styles.header}>
                    <h1 className={styles.teacherName}>{teacherInfo[0].name}</h1>
                </header>

                <div className={styles.right}>
                 <h2 className={styles.labels}>School</h2>
                 <h2 className={styles.labels}>Date of Birth</h2>
                 <h2 className={styles.labels}>Contact No</h2>
                 <h2 className={styles.labels}>Email Address</h2>
                     {/* <li>School</li>
                     <li>Date Of Birth</li>
                     <li>Contact No</li>
                     <li>Email Address</li> */}
                 
             </div>
 
             {/* right section input */}
             <div className={styles.input}>
                 <p className={styles.deets}>{teacherInfo[0].school}</p>
                 <p className={styles.deets}>{teacherInfo[0].dateOfBirth}</p>
                 <p className={styles.deets}>{teacherInfo[0].contactNumber}</p>
                 <p className={styles.deets}>{teacherInfo[0].email}</p>
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
         <FooterOne/>
         </div>
     )
 }
 
 export default TeacherProfileViewer
