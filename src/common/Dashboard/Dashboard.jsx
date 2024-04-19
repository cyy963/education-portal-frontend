import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import styles from './Dashboard.module.css';
//src assets for toggle + bottom nav
import arrowLeft from '../../assets/arrowLeft.png';
import profile from '../../assets/profile.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png';
//teacher dashboard pngs
import progressTracker from '../../assets/TeacherDashboard/progressTracker.png'
import studentProfiles from '../../assets/TeacherDashboard/studentProfiles.png'
import helpRequests from '../../assets/TeacherDashboard/helpRequests.png'
import projectSubmissions from '../../assets/TeacherDashboard/projectSubmissions.png'
import projectLibrary from '../../assets/TeacherDashboard/projectLibrary.png'
//active teacher dashboard pngs
import progressTrackerSelected from '../../assets/TeacherDashboard/progressTrackerSelected.png'
import studentProfilesSelected from '../../assets/TeacherDashboard/studentProfilesSelected.png'
import helpRequestsSelected from '../../assets/TeacherDashboard/helpRequestsSelected.png'
import projectSubmissionsSelected from '../../assets/TeacherDashboard/projectSubmissionsSelected.png'
import projectLibrarySelected from '../../assets/TeacherDashboard/projectLibrarySelected.png'
//student dashboard pngs
import learningObjectives from '../../assets/StudentDashboard/learningObjectives.png'
import instructions from '../../assets/StudentDashboard/instructions.png'
import video from '../../assets/StudentDashboard/video.png'
import makeProject from '../../assets/StudentDashboard/makeProject.png'
import submitProject from '../../assets/StudentDashboard/submitProject.png'
//active student dashboard pngs
import learningObjectivesSelected from '../../assets/StudentDashboard/learningObjectivesSelected.png'
import instructionsSelected from '../../assets/StudentDashboard/instructionsSelected.png'
import videoSelected from '../../assets/StudentDashboard/videoSelected.png'
import makeProjectSelected from '../../assets/StudentDashboard/makeProjectSelected.png'
import submitProjectSelected from '../../assets/StudentDashboard/submitProjectSelected.png'

//renders student dashboard content 
function renderStudentDashboardContent(studentName) {
    const studentImagePath = `/images/students/${studentName}.png`;
    const location = useLocation();
    return (
        <>  
            {/* profile pic */}
            <div className={styles.profilePicContainer}>
              <img src={studentImagePath} alt={studentName} className={styles.profilePic}/>
            </div>

            {/* tabs */}
            <div className={styles.tabs}>
              <NavLink to='/student-dashboard/learning-objectives'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/student-dashboard/learning-objectives' ? learningObjectivesSelected : learningObjectives} alt="learning-objectives"/>
                  <p>LEARNING OBJECTIVES</p>
                </div>
              </NavLink>

              <NavLink to='/student-dashboard/instructions'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/student-dashboard/instructions' ? instructionsSelected : instructions} alt="instructions"/>
                  <p>INSTRUCTIONS</p>
                </div>
              </NavLink>

              <NavLink to='/student-dashboard/video-tutorial'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/student-dashboard/video-tutorial' ? videoSelected: video} alt="video-tutorial"/>
                  <p>VIDEO TUTORIAL</p>
                </div>
              </NavLink>

              <NavLink to='/student-dashboard/make-project'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/student-dashboard/make-project' ? makeProjectSelected : makeProject} alt="make-project"/>
                  <p>MAKE PROJECT</p>
                </div>
              </NavLink>

              <NavLink to='/student-dashboard/submit-project'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/student-dashboard/submit-project' ? submitProjectSelected : submitProject} alt="submit-project"/>
                  <p>SUBMIT PROJECT</p>
                </div>
              </NavLink>
            </div>
        </>
    );
}

//renders teacher dashboard content
function renderTeacherDashboardContent(teacherName) {
    const teacherImagePath = `/images/teachers/${teacherName}.png`;
    const location = useLocation();

    return (
        <>  
            {/* profile pic */}
            <div className={styles.profilePicContainer}>
              <img src={teacherImagePath} alt={teacherName} className={styles.profilePic}/>
            </div>
            
            {/* tabs */}
            <div className={styles.tabs}>
              <NavLink to='/teacher-dashboard/progress-tracker' 
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  {/* Use different image src for active NavLink */}
                  <img src={location.pathname === '/teacher-dashboard/progress-tracker' ? progressTrackerSelected : progressTracker} alt="progress-tracker"/>
                  <p>PROGRESS TRACKER</p>
                </div>
              </NavLink>


              <NavLink to='/teacher-dashboard/student-profiles'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/teacher-dashboard/student-profiles' ? studentProfilesSelected : studentProfiles} alt="student-profiles"/>
                  <p>STUDENT PROFILES</p>
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/help-requests'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/teacher-dashboard/help-requests' ? helpRequestsSelected : helpRequests} alt="help-requests"/>
                  <p>HELP REQUESTS</p>
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/project-submissions'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/teacher-dashboard/project-submissions' ? projectSubmissionsSelected : projectSubmissions} alt="project-submissions"/>
                  <p>PROJECT SUBMISSIONS</p>
                </div>
              </NavLink>

              <NavLink to='/project-library'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === '/teacher-dashboard/project-library' ? projectLibrarySelected : projectLibrary} alt="project-library"/>
                  <p>PROJECT LIBRARY</p>
                </div>
              </NavLink>
            </div>
        </>
    );
}

//main dashboard function
export default function Dashboard({ user, studentName, teacherName }) {

    //defines usestate for dashboard activity
    const [isActive, setIsActive] = useState(false);
    //function for active state toggle
    const toggleDashboard = () => {
        setIsActive(!isActive);
    };

    //function that renders dashboard content based on user
    const renderDashboardContent = () => {
        //if statement based on user
        if (user === 'teacher') {
            return renderTeacherDashboardContent(teacherName);
        } else {
            return renderStudentDashboardContent(studentName);
        }
    };
    return (
        //main body of page, dashboard + page content
        <main className={styles.mainBody}>

          {/* dashboard */}
          <div className={`${styles.dashboard} ${isActive ? styles.isActive : ''}`}>

            {/* tabs */}
            {renderDashboardContent()}

            {/* toggle button */}
            <div className={styles.toggleBtnDiv}>
              <button className={styles.dashboardToggleButton} onClick={toggleDashboard}>
                <img src={arrowLeft} alt="Arrow Left" />
              </button>
            </div>

            {/* bottom nav */}
            <div className={styles.dashboardFooter}>
                <button className={styles.footerBtns}><img src={profile} alt="profile"/><p>Profile</p></button>
                <button className={styles.footerBtns}><img src={settings} alt="settings" /><p>Settings</p></button>
                <button className={styles.footerBtns}><img src={logout} alt="logout" /><p>Log Out</p></button>
            </div>            
          </div>

          {/* uses Outlet to render active tab/page content */}
          <div className={styles.outletContent}>
            <Outlet />
          </div>
        </main>
    );
}
