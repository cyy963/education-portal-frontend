import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// css Module imports
import styles from "./FiltersProjects.module.css";
import topFilterStyles from "./TopFilters.module.css";
import sideFilterStyles from "./SideFilters/SideFilters.module.css";

// Component imports
import ProjectCard from "./ProjectCard";
import CheckboxForms from "./SideFilters/CheckboxForms";
import CheckboxAndLabel from "./SideFilters/CheckboxAndLabel";
import TopFilters from "./TopFilters";

export default function FiltersProjects(props) {
  const params = useParams();
  // Permission message to be shown when teacher tries to click on a project
  const [permissionMessage, setPermissionMessage] = useState(false);

  // Array of all objects
  const [allProjects, setAllProjects] = useState([]);

  // Fetch the project array from the database
  useEffect(() => {
    fetch(`http://localhost:4000/projects`)
      .then((response) => response.json())
      .then((result) => {
        setAllProjects(result);
      });
  }, []);

  // States for filtering the results
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [resultsLimit, setResultsLimit] = useState("ALL");
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [filteredYearLevel, setFilteredYearLevel] = useState([]);
  const [filteredSubjectMatter, setFilteredSubjectMatter] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredResults2, setFilteredResults2] = useState([]);
  const [filteredResults3, setFilteredResults3] = useState([]);
  const [filteredResults4, setFilteredResults4] = useState([]);

  // Set all arrays to have all projects at the beginning, once allProjects is set from initial fetch
  useEffect(() => {
    setFilteredSubscriptions([...allProjects]);
    setFilteredActivities([...allProjects]);
    setFilteredYearLevel([...allProjects]);
    setFilteredSubjectMatter([...allProjects]);
    setFilteredResults([...allProjects]);
    setFilteredResults2([...allProjects]);
    setFilteredResults3([...allProjects]);
    setFilteredResults4([...allProjects]);
  }, [allProjects]);

  // Set difficulty and result limits from button id's in their respective filters
  const handleDifficulty = (e) => setSelectedDifficulty(e.target.id);
  const handleResultsLimit = (e) => setResultsLimit(e.target.id);

  // Checkbox arrays to create side filters using components
  const checkboxes = [
    {
      name: "SUBSCRIPTION",
      options: ["Free", "Premium"],
      function: function handleSubscription(e) {
        if (e.target.checked) {
          const subscriptionArray = [...filteredSubscriptions];
          allProjects.map((project) => {
            if (project.subscription === e.target.id) {
              subscriptionArray.push(project);
            }
          });
          setFilteredSubscriptions(subscriptionArray);
        } else {
          const subscriptionArray = filteredSubscriptions.filter(
            (project) => project.subscription !== e.target.id
          );
          setFilteredSubscriptions(subscriptionArray);
        }
      },
    },
    {
      name: "ACTIVITY TYPE",
      options: ["Animation", "Game", "Chatbot", "Augmented Reality"],
      function: function handleActivities(e) {
        if (e.target.checked) {
          const activitiesArray = [...filteredActivities];
          allProjects.map((project) => {
            if (project.activity_type === e.target.id) {
              activitiesArray.push(project);
            }
          });
          setFilteredActivities(activitiesArray);
        } else {
          const activitiesArray = filteredActivities.filter(
            (project) => project.activity_type !== e.target.id
          );
          setFilteredActivities(activitiesArray);
        }
      },
    },
    {
      name: "YEAR LEVEL",
      options: ["1 - 4", "5 - 6", "7 - 8", "9 - 13"],
      // Year levels in projects are just one year, so switch has to match the year with the checkbox before pushing the projects to the year level array, or leaving them out.
      function: function handleYearLevel(e) {
        switch (e.target.id) {
          case "1 - 4":
            if (e.target.checked) {
              const yearLevelArray = [...filteredYearLevel];
              allProjects.map((project) => {
                switch (project.year_level) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                    yearLevelArray.push(project);
                    break;
                }
              });
              setFilteredYearLevel(yearLevelArray);
            } else {
              const yearLevelArray = filteredYearLevel.filter(
                (project) => project.year_level > 4
              );
              setFilteredYearLevel(yearLevelArray);
            }
            break;
          case "5 - 6":
            if (e.target.checked) {
              const yearLevelArray = [...filteredYearLevel];
              allProjects.map((project) => {
                switch (project.year_level) {
                  case 5:
                  case 6:
                    yearLevelArray.push(project);
                    break;
                }
              });
              setFilteredYearLevel(yearLevelArray);
            } else {
              const yearLevelArray = filteredYearLevel.filter(
                (project) => project.year_level < 5 || project.year_level > 6
              );
              setFilteredYearLevel(yearLevelArray);
            }
            break;
          case "7 - 8":
            if (e.target.checked) {
              const yearLevelArray = [...filteredYearLevel];
              allProjects.map((project) => {
                switch (project.year_level) {
                  case 7:
                  case 8:
                    yearLevelArray.push(project);
                    break;
                }
              });
              setFilteredYearLevel(yearLevelArray);
            } else {
              const yearLevelArray = filteredYearLevel.filter(
                (project) => project.year_level < 7 || project.year_level > 8
              );
              setFilteredYearLevel(yearLevelArray);
            }
            break;
          case "9 - 13":
            if (e.target.checked) {
              const yearLevelArray = [...filteredYearLevel];
              allProjects.map((project) => {
                switch (project.year_level) {
                  case 9:
                  case 10:
                  case 11:
                  case 12:
                  case 13:
                    yearLevelArray.push(project);
                    break;
                }
              });
              setFilteredYearLevel(yearLevelArray);
            } else {
              const yearLevelArray = filteredYearLevel.filter(
                (project) => project.year_level < 9
              );
              setFilteredYearLevel(yearLevelArray);
            }
            break;
        }
      },
    },
    {
      name: "SUBJECT MATTER",
      options: [
        "Computer Science",
        "Maths",
        "Science",
        "Language",
        "Art",
        "Music",
      ],
      function: function handleSubjectMatter(e) {
        if (e.target.checked) {
          const subjectArray = [...filteredSubjectMatter];
          allProjects.map((project) => {
            if (project.subject_matter === e.target.id) {
              subjectArray.push(project);
            }
          });
          setFilteredSubjectMatter(subjectArray);
        } else {
          const subjectArray = filteredSubjectMatter.filter(
            (project) => project.subject_matter !== e.target.id
          );
          setFilteredSubjectMatter(subjectArray);
        }
      },
    },
  ];

  // Array to be mapped through for course buttons
  const difficultyButtons = [
    { label: "All", className: topFilterStyles.leftBtn },
    { label: "Beginner", className: "" },
    { label: "Intermediate", className: "" },
    { label: "Advanced", className: topFilterStyles.rightBtn },
  ];

  // Array to be mapped through for results limit buttons
  const limitResultsButtons = [
    { label: 5, className: topFilterStyles.leftBtn },
    { label: 10, className: "" },
    { label: "ALL", className: topFilterStyles.rightBtn },
  ];

  // Filter through courses depending on button pressed
  const filteredDifficulties =
    selectedDifficulty === "All"
      ? allProjects
      : allProjects.filter((project) => selectedDifficulty === project.course);

  // Each useEffect maps through the last two arrays (in this case, courses and subscription types), and checks which projects they have in common, before adding this to a new array
  useEffect(() => {
    const difficultySubscription = [];
    if (filteredDifficulties.length > 0 && filteredSubscriptions.length > 0) {
      filteredDifficulties.map((difficultiesProject) => {
        filteredSubscriptions.map((subscriptionProject) => {
          if (subscriptionProject.name === difficultiesProject.name) {
            difficultySubscription.push(difficultiesProject);
            setFilteredResults(difficultySubscription);
          }
        });
      });
    } else {
      setFilteredResults(difficultySubscription);
    }
    setFilteredResults(difficultySubscription);
  }, [selectedDifficulty, filteredSubscriptions]);

  // UseEffect to map through last filtered result and check it against projects in the activity type array
  useEffect(() => {
    const addActivityArray = [];

    if (filteredResults.length > 0 && filteredActivities.length > 0) {
      filteredResults.map((resultsProject) => {
        filteredActivities.map((activityProject) => {
          if (activityProject.name === resultsProject.name) {
            addActivityArray.push(resultsProject);
            setFilteredResults2(addActivityArray);
          }
        });
      });
    } else {
      setFilteredResults2(addActivityArray);
    }
    setFilteredResults2(addActivityArray);
  }, [filteredResults, filteredActivities]);

  // UseEffect to map through last filtered result and check it against projects in the year level array
  useEffect(() => {
    const addYearArray = [];
    if (filteredResults2.length > 0 && filteredYearLevel.length > 0) {
      filteredResults2.map((resultsProject) => {
        filteredYearLevel.map((yearProject) => {
          if (yearProject.name === resultsProject.name) {
            addYearArray.push(resultsProject);
            setFilteredResults3(addYearArray);
          }
        });
      });
    } else {
      setFilteredResults3(addYearArray);
    }
    setFilteredResults3(addYearArray);
  }, [filteredResults2, filteredYearLevel]);

  //// UseEffect to map through last filtered result and check it against projects in the subject matter array
  useEffect(() => {
    const addSubjectArray = [];
    if (filteredResults3.length > 0 && filteredSubjectMatter.length > 0) {
      filteredResults3.map((resultsProject) => {
        filteredSubjectMatter.map((subjectProject) => {
          if (subjectProject.name === resultsProject.name) {
            addSubjectArray.push(resultsProject);
            setFilteredResults4(addSubjectArray);
          }
        });
      });
    } else {
      setFilteredResults4(addSubjectArray);
    }
    setFilteredResults4(addSubjectArray);
  }, [filteredResults3, filteredSubjectMatter]);

  return (
    <>
      {/* Renders the permission message if a teacher clicks on a project, otherwise, shows filtered projects */}
      {permissionMessage ? (
        <h3 className={styles.permissionMessage}>
          Oops! You don't have permission to view this page.
        </h3>
      ) : (
        <div className={styles.filtersAndProjects}>
          <div className={sideFilterStyles.sideFilters}>
            {/* For every checkbox type (i.e. subscription, activity type, year 
            level, subject matter), a title and horizontal line is rendered,
            followed by a child for every checkbox and label*/}
            {checkboxes.map((form, index) => (
              <CheckboxForms CheckboxForms key={index} filterTitle={form.name}>
                {form.options.map((option, index) => (
                  <CheckboxAndLabel
                    id={option}
                    key={index}
                    function={form.function}
                    label={option}
                  />
                ))}
              </CheckboxForms>
            ))}
            </div>
            
          {/* Top filter section */}
            <div className={topFilterStyles.topFilters}>
              
            {/* Difficulty/course buttons */}
            <div className={topFilterStyles.btnDiv}>
              {difficultyButtons.map((button, index) => (
                <TopFilters
                  className={`${topFilterStyles.btn} ${button.className} ${
                    selectedDifficulty === button.label
                      ? topFilterStyles.activeBtn
                      : ""
                  }`}
                  key={index}
                  function={handleDifficulty}
                  label={button.label.toUpperCase()}
                  id={button.label}
                />
              ))}
            </div>

            {/* Buttons to limit number of results */}
            <div className={topFilterStyles.btnDiv}>
              <p className={topFilterStyles.show}>SHOW</p>
              {limitResultsButtons.map((button, index) => (
                <TopFilters
                  className={`${topFilterStyles.btn} ${button.className} ${
                    resultsLimit === String(button.label)
                      ? topFilterStyles.activeBtn
                      : ""
                  }`}
                  key={index}
                  function={handleResultsLimit}
                  label={button.label}
                  id={button.label}
                />
              ))}
            </div>
            </div>
            
          {/* Rendering the projects */}
          <div className={styles.projects}>
              <div className={styles.projectsContainer}>
                {/* Maps through the final array of filtered projects */}
                {filteredResults4
                  // Only shows number of projects requested
                .slice(
                  0,
                  resultsLimit === "ALL"
                    ? filteredResults4.length
                    : resultsLimit
                )
                  .map((project) => (
                  // Renders a project card for each project in filteredResults4, using the information in the array
                  <ProjectCard
                    key={project.project_id}
                    link={`${
                      params.userType === "student"
                        ? `/student-dashboard/${project.project_id}/learning-objectives`
                        : ""
                    }`}
                    name={project.name}
                    course={project.course}
                    activity_type={project.activity_type}
                    project_pic={project.project_pic}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
