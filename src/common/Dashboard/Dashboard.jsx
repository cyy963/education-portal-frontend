import React, { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import styles from './Dashboard.module.css';
import arrowLeft from '../../assets/arrowLeft.png';
import profile from '../../assets/profile.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png';
import progressTracker from '../../assets/TeacherDashboard/progressTracker.png'
import studentProfiles from '../../assets/TeacherDashboard/studentProfiles.png'
import helpRequests from '../../assets/TeacherDashboard/helpRequests.png'
import projectSubmissions from '../../assets/TeacherDashboard/projectSubmissions.png'
import projectLibrary from '../../assets/TeacherDashboard/projectLibrary.png'

import TabButtons from './components/TabButtons';

//renders student dashboard content 
function renderStudentDashboardContent(studentName) {
    const studentImagePath = `/images/students/${studentName}.png`;

    return (
        <>
            <img src={studentImagePath} alt={studentName} className={styles.studentImage}/>
            <Link to='/'>Go to Home</Link>
            <br/>
            <Link to='learning-objectives'>LearningObjectives</Link>
            <br/>
            <Link to='instructions'>Instructions</Link>
            <br/>
            <NavLink to='video-tutorial' activeClassName={styles.navLinkActive}>
                VideoTutorial
            </NavLink>
            <Outlet/>
        </>
    );
}

//renders teacher dashboard content
function renderTeacherDashboardContent(teacherName) {
    const teacherImagePath = `/images/teachers/${teacherName}.png`;

    return (
        <>  
            <div className={styles.profilePicContainer}>
              <img src={teacherImagePath} alt={teacherName} className={styles.profilePic}/>

            </div>
            
            <div className={styles.tabs}>
              
              <NavLink to='/teacher-dashboard/progressTracker'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={progressTracker} alt="progressTracker"/>
                  PROGRESS TRACKER
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/studentProfiles'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={studentProfiles} alt="studentProfiles"/>
                  STUDENT PROFILES
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/helpRequests'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={helpRequests} alt="helpRequests"/>
                  HELP REQUESTS
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/projectSubmissions'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={projectSubmissions} alt="projectSubmissions"/>
                  PROJECT SUBMISSIONS
                </div>
              </NavLink>

              <NavLink to='/teacher-dashboard/projectLibrary'
              className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <div className={styles.tabComponent}>
                  <img src={projectLibrary} alt="projectLibrary"/>
                  PROJECT LIBRARY
                </div>
              </NavLink>
              
            </div>
        </>
    );
}

//main dashboard function
export default function Dashboard({ user, studentName, teacherName }) {
    const [isActive, setIsActive] = useState(false);

    const toggleDashboard = () => {
        setIsActive(!isActive);
    };

    const renderDashboardContent = () => {
        if (user === 'teacher') {
            return renderTeacherDashboardContent(teacherName);
        } else {
            return renderStudentDashboardContent(studentName);
        }
    };

    return (
        <div className={`${styles.sidebar} ${isActive ? styles.isActive : ''}`}>
        
          {/* tabs */}
          {renderDashboardContent()}
          
          {/* toggle button */}
          <div className={styles.toggleBtnDiv}>
            <button className={styles.sideBarToggleButton} onClick={toggleDashboard}>
              <img src={arrowLeft} alt="Arrow Left" />
            </button>
          </div>

          {/* footer */}
          <div className={styles.sidebarFooter}>
              <button className={styles.footerBtns}><img src={profile} alt="profile"/></button>
              <button className={styles.footerBtns}><img src={settings} alt="settings" /></button>
              <button className={styles.footerBtns}><img src={logout} alt="logout" /></button>
          </div>
            
        </div>
    );
}
