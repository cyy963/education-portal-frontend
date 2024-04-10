import { Link } from "react-router-dom"
import styles from "./TeacherProfileViewer.module.css"
// import NavBarOne from "../../common/NavBar1/NavBarOne";

function TeacherProfileViewer() {
  const teacherInfo = [
     {
         id: 1,
         src: "",
         alt: "",
         name: "Jasmina Salvador",
         school: "Homai School",
         dateOfBirth: "25 June 1986",
         contactNumber: "027 754 28 00",
         email: "jsalvador@homai.edu",
     }
  ]

  const teacherData = [
    {
        id: 1,
        firstName: "Jasmina",
        lastName: "Salvador",
        userType: "Teacher",
        photo: "",
    }
  ]

  const teacher = teacherData[0];
          
     return (
        <div>
            

        


         <main className={styles.main}>
             {/* left section */}
             <div className={styles.left}>
                 <img src="" alt="" />
 
                 <button className={styles.btn}>EDIT PROFILE</button>
                 <button className={styles.btn}>CHANGE PHOTO</button>
                 <button className={styles.btn}>SETTINGS</button>
             </div>

             {/* <div className={styles.teacherInfoCard}>
                <header className={""}>
                    <h1 className={styles.teacherName}>{styles.teacherInfo[0].name}</h1>
                </header>
             </div> */}
 
             {/* right section labels */}
             <div className={styles.right}>
                 <h2 className={styles.labels}>
                     <li>School</li>
                     <li>Date Of Birth</li>
                     <li>Contact No</li>
                     <li>Email Address</li>
                 </h2>
             </div>
 
             {/* right section input */}
             {/* <div className={styles.input}>
                 <p>{teacherInfo[0].school}</p>
                 <p>{teacherInfo[0].dateOfBirth}</p>
                 <p>{teacherInfo[0].contactNumber}</p>
                 <p>{teacherInfo[0].email}</p>
             </div> */}
 
             {/* footer and buttons */}
             <footer className={styles.backButtons}>
                 <Link to="">
                    <button className={styles.backButton}>BACK TO PROJECTS</button>
                 </Link>

                 <Link to="">
                    <button className={styles.backButton}>BACK TO DASHBOARD</button>
                 </Link>
             </footer>
         </main>
         </div>
     )
 }
 
 export default TeacherProfileViewer