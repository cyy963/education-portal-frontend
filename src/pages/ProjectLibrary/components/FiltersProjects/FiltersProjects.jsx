import { useState, useEffect } from "react";
import styles from "./FiltersProjects.module.css";
import topFilterStyles from "./TopFilters.module.css";
import sideFilterStyles from "./SideFilters/SideFilters.module.css";
import ProjectCard from "./ProjectCard";
import CheckboxForms from "./SideFilters/CheckboxForms";
import CheckboxAndLabel from "./SideFilters/CheckboxAndLabel";
import TopFilters from "./TopFilters";

const projects = [
  {
    id: 1,
    name: "Introduction",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project01.png",
    alt: "A cartoon orange cat saying 'Hi, how are you?'",
    subscription: "Free",
    year: "1 - 4",
    subject: "Computer Science",
  },
  {
    id: 2,
    name: "My Birthday",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project02.png",
    alt: "Cartoon child with birthday cake at park",
    subscription: "Premium",
    year: "5 - 6",
    subject: "Maths",
  },
  {
    id: 3,
    name: "10 Block Challenge",
    difficulty: "INTERMEDIATE",
    activity: "Animation",
    src: "/images/projects/Project03.png",
    alt: "An cartoon orange cat walking through a farm",
    subscription: "Free",
    year: "7 - 8",
    subject: "Science",
  },
  {
    id: 4,
    name: "Build a band",
    difficulty: "INTERMEDIATE",
    activity: "Game",
    src: "/images/projects/Project04.png",
    alt: "A cartoon of a lady in a purple dress on stage with instruments",
    subscription: "Premium",
    year: "9 - 13",
    subject: "Language",
  },
  {
    id: 5,
    name: "The bear and the monkey",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project05.png",
    alt: "A cartoon of a brown bear and a monkey in a jungle",
    subscription: "Free",
    year: "1 - 4",
    subject: "Art",
  },
  {
    id: 6,
    name: "Debugging",
    difficulty: "ADVANCED",
    activity: "Augmented Reality",
    src: "/images/projects/Project06.png",
    alt: "A cartoon of a yellow flame and an orange cat saying 'Fun!'",
    subscription: "Premium",
    year: "5 - 6",
    subject: "Music",
  },
  {
    id: 7,
    name: "About me",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project07.png",
    alt: "Cartoons of an orange cat saying 'Make Scratch', a laptop, a pencil, cereal, a pie, a chicken and a girl in a green t-shirt, floating around each other",
    subscription: "Free",
    year: "7 - 8",
    subject: "Computer Science",
  },
  {
    id: 8,
    name: "I am here!",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project08.png",
    alt: "A cartoon of a green forest with grass, lily pads, a mountain and a red crab",
    subscription: "Free",
    year: "9 - 13",
    subject: "Maths",
  },
  {
    id: 9,
    name: "Funny faces",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project09.png",
    alt: "Cartoons of a bear hat, glasses, green bow tie, a hat, a pig's nose, eyes,nose and mouths",
    subscription: "Premium",
    year: "1 - 4",
    subject: "Science",
  },
  {
    id: 10,
    name: "It tickles!",
    difficulty: "INTERMEDIATE",
    activity: "Animation",
    src: "/images/projects/Project10.png",
    alt: "A cartoon of a child saying, 'It tickles! outside of a red building with a smiling flame",
    subscription: "Premium",
    year: "5 - 6",
    subject: "Language",
  },
  {
    id: 11,
    name: "Penguin in a Desert",
    difficulty: "BEGINNER",
    activity: "Chatbot",
    src: "/images/projects/Project11.png",
    alt: "A carton of a penguin in a desert, a cactus nearby",
    subscription: "Free",
    year: "7 - 8",
    subject: "Art",
  },
  {
    id: 12,
    name: "Time Travel",
    difficulty: "ADVANCED",
    activity: "Animation",
    src: "/images/projects/Project12.png",
    alt: "A cartoon of a child in front of a wharenui saying 'I want to see the time before Maui fished up North Island'",
    subscription: "Premium",
    year: "7 - 8",
    subject: "Music",
  },
  {
    id: 13,
    name: "Birthday Card",
    difficulty: "BEGINNER",
    activity: "Chatbot",
    src: "/images/projects/Project13.png",
    alt: "A cartoon of a person in a purple dress at a party, multi-coloured balloons everywhere and HAPPY BIRTHDAY letters among the balloons",
    subscription: "Free",
    year: "1 - 4",
    subject: "Computer Science",
  },
  {
    id: 14,
    name: "The Lion and the Mouse",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project14.png",
    alt: "A cartoon of a lion and a mouse in a grassy part of the jungle",
    subscription: "Premium",
    year: "5 - 6",
    subject: "Computer Science",
  },
  {
    id: 15,
    name: "The Lion in the Forest",
    difficulty: "BEGINNER",
    activity: "Augmented Reality",
    src: "/images/projects/Project15.png",
    alt: "A cartoon of a lion in a forest at night",
    subscription: "Free",
    year: "5 - 6",
    subject: "Maths",
  },
];

export default function FiltersProjects() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [resultsLimit, setResultsLimit] = useState("ALL");
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([
    ...projects,
  ]);
  const [filteredActivities, setFilteredActivities] = useState([...projects]);
  const [filteredYearLevel, setFilteredYearLevel] = useState([...projects]);
  const [filteredSubjectMatter, setFilteredSubjectMatter] = useState([
    ...projects,
  ]);
  const [filteredResults, setFilteredResults] = useState([...projects]);
  const [filteredResults2, setFilteredResults2] = useState([...projects]);
  const [filteredResults3, setFilteredResults3] = useState([...projects]);
  const [filteredResults4, setFilteredResults4] = useState([...projects]);

  const handleDifficulty = (e) => setSelectedDifficulty(e.target.id);
  const handleResultsLimit = (e) => setResultsLimit(e.target.id);

  const checkboxes = [
    {
      name: "SUBSCRIPTION",
      options: ["Free", "Premium"],
      function: function handleSubscription(e) {
        if (e.target.checked) {
          const subscriptionArray = [...filteredSubscriptions];
          projects.map((project) => {
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
          projects.map((project) => {
            if (project.activity === e.target.id) {
              activitiesArray.push(project);
            }
          });
          setFilteredActivities(activitiesArray);
        } else {
          const activitiesArray = filteredActivities.filter(
            (project) => project.activity !== e.target.id
          );
          setFilteredActivities(activitiesArray);
        }
      },
    },
    {
      name: "YEAR LEVEL",
      options: ["1 - 4", "5 - 6", "7 - 8", "9 - 13"],
      function: function handleYearLevel(e) {
        if (e.target.checked) {
          const yearLevelArray = [...filteredYearLevel];
          projects.map((project) => {
            if (project.year === e.target.id) {
              yearLevelArray.push(project);
            }
          });
          setFilteredYearLevel(yearLevelArray);
        } else {
          const yearLevelArray = filteredYearLevel.filter(
            (project) => project.year !== e.target.id
          );
          setFilteredYearLevel(yearLevelArray);
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
          projects.map((project) => {
            if (project.subject === e.target.id) {
              subjectArray.push(project);
            }
          });
          setFilteredSubjectMatter(subjectArray);
        } else {
          const subjectArray = filteredSubjectMatter.filter(
            (project) => project.subject !== e.target.id
          );
          setFilteredSubjectMatter(subjectArray);
        }
      },
    },
  ];

  const difficultyButtons = [
    { label: "ALL", className: topFilterStyles.leftBtn },
    { label: "BEGINNER", className: "" },
    { label: "INTERMEDIATE", className: "" },
    { label: "ADVANCED", className: topFilterStyles.rightBtn },
  ];

  const limitResultsButtons = [
    { label: 5, className: topFilterStyles.leftBtn },
    { label: 10, className: "" },
    { label: "ALL", className: topFilterStyles.rightBtn },
  ];

  const filteredDifficulties =
    selectedDifficulty === "ALL"
      ? projects
      : projects.filter((project) => selectedDifficulty === project.difficulty);

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
  }, [selectedDifficulty, filteredSubscriptions]);

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
  }, [filteredResults, filteredActivities]);

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
  }, [filteredResults2, filteredYearLevel]);

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
  }, [filteredResults3, filteredSubjectMatter]);

  return (
    <div className={styles.filtersAndProjects}>
      <div className={sideFilterStyles.sideFilters}>
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
        {/* Difficulty buttons */}
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
              label={button.label}
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
          {filteredResults4
            .slice(
              0,
              resultsLimit === "ALL" ? filteredResults4.length : resultsLimit
            )
            .map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                difficulty={project.difficulty}
                activity={project.activity}
                src={project.src}
                alt={project.alt}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
