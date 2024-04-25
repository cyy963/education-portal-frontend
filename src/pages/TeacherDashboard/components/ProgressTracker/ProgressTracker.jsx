import styles from './ProgressTracker.module.css';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import fileExport from '../../../../assets/TeacherDashboard/fileExport.svg'

export default function ProgressTracker() {
  const [projects, setProjects] = useState([]);
  const [projectResults, setProjectResults] = useState([]);
  
  //fetches and sets project_ids from project table into projects
  useEffect (()=>{
    fetch('http://localhost:4000/projects')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setProjects(result);
      })
      //error catching
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //fetches and sets student_id and student_name and their corresponding 
  //string of and number of compeleted projects into projectResults
  useEffect (()=>{
    fetch('http://localhost:4000/project_results')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setProjectResults(result);
      })
      //error catching
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //function that returns true if projectId is in completedProjects
  function checkCompletedProjects (completedProjects, projectId) {
    return completedProjects && completedProjects.includes(projectId);
  };

  return (
    <div className={styles.body}>
        {/* top bar */}
        <div className={styles.title}>
          <h2>BEGINNER COURSE</h2>
          <div className={styles.exportContainer}>           
            <CSVLink data={projectResults} filename="student-progress.csv" className="exportSpreadsheet">               
              <img className={styles.exportIcon} src={fileExport} alt='exportIcon'/>
              <h5>EXPORT AS SPREADSHEET</h5>                
            </CSVLink>           
          </div>
        </div>

        {/* scroll bar */}
        <div className={styles.forScroll}>
          {/* students progress tracker container */}
          <div className={styles.studentBarContainer}>
            {/* only .maps projectResults once */}
            {projectResults.map((projectResult) => { 
                return (
                  //student progress bar
                  <div className={styles.studentProgressBar} key={projectResult.student_id}>
                    {/* student name and projects completed fraction */}
                    <div className={styles.studentInfo}>
                      <p className={styles.studentName}>{projectResult.student_name.toUpperCase()}</p>
                      <p className={styles.studentProjectsCompletedFraction}>{projectResult.total_completed_projects}/15 Projects Completed</p>
                    </div>
                    {/* progress icons container */}
                    <div className={styles.progressIconContainer}>
                      {projects.map((project) => {
                        //stores parameterised checkCompletedProjects as a const
                        const completed = checkCompletedProjects(projectResult.completed_projects, project.project_id);
                        return (
                          //progress icon
                          <div
                            //changes icon style to green if it is complete
                            className={`${styles.progressIcons} ${completed ? styles.completedProgressIcons : ''}`}
                            //uses project_id as unique key
                            key={project.project_id}
                          >
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