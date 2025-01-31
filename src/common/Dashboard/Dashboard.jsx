import React, { useState } from 'react';
import { Outlet, NavLink, useLocation, useParams } from 'react-router-dom';
import styles from './Dashboard.module.css';
//src assets for toggle + bottom nav
import arrowLeft from "../../assets/arrowLeft.png";
import profile from "../../assets/profile.png";
import settings from "../../assets/settings.png";
import logout from "../../assets/logout.png";
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

//function that renders student dashboard content 
function renderStudentDashboardContent(studentName) {
    const studentImagePath = `/images/students/${studentName}.png`;
    const params = useParams();
    const location = useLocation();
    return (
        <>  
            {/* profile pic */}
            <div className={styles.profilePicContainer}>
              <img src={studentImagePath} alt={studentName} className={styles.profilePic}/>
            </div>

            {/* tabs */}
            <div className={styles.tabs}>
              <NavLink to={`/student-dashboard/${params.projectId}/learning-objectives`}
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === `/student-dashboard/${params.projectId}/learning-objectives` ? learningObjectivesSelected : learningObjectives} alt="learning-objectives"/>
                  <p>LEARNING OBJECTIVES</p>
                </div>
              </NavLink>

              <NavLink to={`/student-dashboard/${params.projectId}/instructions`}
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === `/student-dashboard/${params.projectId}/instructions` ? instructionsSelected : instructions} alt="instructions"/>
                  <p>INSTRUCTIONS</p>
                </div>
              </NavLink>

              <NavLink to={`/student-dashboard/${params.projectId}/video-tutorial`}
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === `/student-dashboard/${params.projectId}/video-tutorial` ? videoSelected: video} alt="video-tutorial"/>
                  <p>VIDEO TUTORIAL</p>
                </div>
              </NavLink>

              <NavLink to={`/student-dashboard/${params.projectId}/make-project`}
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === `/student-dashboard/${params.projectId}/make-project` ? makeProjectSelected : makeProject} alt="make-project"/>
                  <p>MAKE PROJECT</p>
                </div>
              </NavLink>

              <NavLink to={`/student-dashboard/${params.projectId}/submit-project`}
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={location.pathname === `/student-dashboard/${params.projectId}/submit-project` ? submitProjectSelected : submitProject} alt="submit-project"/>
                  <p>SUBMIT PROJECT</p>
                </div>
              </NavLink>
            </div>
        </>
    );
}

//function that renders teacher dashboard content
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
  //use state and function for toggle button
  const [isActive, setIsActive] = useState(false);
  
  const toggleDashboard = () => {
    setIsActive(!isActive);
  };

  //function that decides which dashboard to render based on user
  const renderDashboardContent = () => {
    //if statement based on user
    if (user === "teacher") {
      return renderTeacherDashboardContent(teacherName);
    } else {
      return renderStudentDashboardContent(studentName);
    }
  };
  //main return for the dashboard and its pages
  return (
    //main body of page
    <main className={styles.mainBody}>
      {/* dashboard */}
      <div className={`${styles.dashboard} ${isActive ? styles.isActive : ""}`}>
        {/* pages tabs */}
        {renderDashboardContent()}

        {/* toggle button */}
        <div className={styles.toggleBtnDiv}>
          <button
            className={styles.dashboardToggleButton}
            onClick={toggleDashboard}
          >
            <img src={arrowLeft} alt="Arrow Left" />
          </button>
        </div>

        {/* bottom nav */}
        <div className={styles.dashboardFooter}>
          <button className={styles.footerBtns}>
            <img src={profile} alt="profile" />
            <p>Profile</p>
          </button>
          <button className={styles.footerBtns}>
            <img src={settings} alt="settings" />
            <p>Settings</p>
          </button>
          <button className={styles.footerBtns}>
            <img src={logout} alt="logout" />
            <p>Log Out</p>
          </button>
        </div>
      </div>

      {/* finally uses Outlet to render the active pages content */}
      <div className={styles.outletContent}>
        <Outlet />
      </div>
    </main>
  );
}
