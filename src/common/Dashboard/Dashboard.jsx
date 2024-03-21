import React, { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import styles from './Dashboard.module.css';
import arrowLeft from '../../assets/arrowLeft.png';
import profile from '../../assets/profile.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png';


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
            <img src={teacherImagePath} alt={teacherName} className={styles.profilePic}/>
            
            <div className={styles.tabs}>
              <Link to='progressTracker'><button>progressTracker</button></Link>
              
              <Link to='studentProfiles'><button>studentProfiles</button></Link>
              
              <NavLink to='helpRequests' activeClassName={styles.navLinkActive}>
                  <button>helpRequests</button>
              </NavLink>
              <NavLink to='projectSubmissions' activeClassName={styles.navLinkActive}>
                <button>projectSubmissions</button>
              </NavLink>
              <NavLink to='projectLibrary' activeClassName={styles.navLinkActive}>
                <button>projectLibrary</button>
              </NavLink>
              <Outlet/>
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
          <div>
              {renderDashboardContent()}
          </div>

          {/* toggle button */}
          <button className={styles.sideBarToggleButton} onClick={toggleDashboard}>
          <img src={arrowLeft} alt="Arrow Left" />
          </button>

          {/* footer */}
          <div className={styles.sidebarFooter}>
              <button className={styles.footerBtns}><img src={profile} alt="profile"/></button>
              <button className={styles.footerBtns}><img src={settings} alt="settings" /></button>
              <button className={styles.footerBtns}><img src={logout} alt="logout" /></button>
          </div>
            
        </div>
    );
}
