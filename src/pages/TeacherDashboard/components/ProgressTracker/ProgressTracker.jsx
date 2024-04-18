import styles from './ProgressTracker.module.css';
import { useEffect, useState } from 'react';

export default function ProgressTracker() {
  const [projects, setProjects] = useState([]);
  const [projectResults, setProjectResults] = useState([]);
  
  //fetch project_id from project table
  useEffect (()=>{
    fetch('http://localhost:4000/projects')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setProjects(result);
      });
  }, []);
  //fetch project_results excel
  useEffect (()=>{
    fetch('http://localhost:4000/project_results')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setProjectResults(result);
      });
  }, []);

  //function returns true if projectId is in completed_projects
  function checkCompletedProjects(completedProjects, projectId) {
    return completedProjects && completedProjects.includes(projectId);
  };

  return (
    <div className={styles.body}>
        {/* top bar */}
        <div className={styles.title}>
          <h2>BEGINNER COURSE</h2>
          <h5>EXPORT AS SPREADSHEET</h5>
        </div>

        {/* students progress tracker container */}
        <div className={styles.forScroll}>
          <div className={styles.studentBarContainer}>
            {projectResults.map((projectResult, studentId) => {
              return (
                //student progress bar
                <div className={styles.studentProgressBar} key={studentId}>
                  {/* student name and projects completed fraction */}
                  <div className={styles.studentInfo}>
                    <p className={styles.studentName}>{projectResult.name.toUpperCase()}</p>
                    <p className={styles.studentProjectsCompletedFraction}>{projectResult.complete_projects_number}/15 Projects Completed</p>
                  </div>
                  {/* progress icons container */}
                  <div className={styles.progressIconContainer}>
                    {projects.map((project, projectId) => {
                      return (
                        //progress icon
                        <div
                        //changes icon style based on checkCompeletedProjects function
                        className={`${styles.progressIcons} 
                        ${checkCompletedProjects(projectResult.completed_projects, project.project_id) ? `${styles.completeProgressIcons}` : "" }`} 
                        key={projectId}>
                          {project.project_id}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

// ${checkCompletedProjects(project.project_id, projectResult.completed_projects) ? `${styles.completeProgressIcons}` : "" }