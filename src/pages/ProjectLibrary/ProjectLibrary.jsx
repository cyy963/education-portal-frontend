import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProjectLibrary.module.css";

// Imports:
// import SideFilters from "./components/SideFilters";
// import AllProjects from "./components/AllProjects";
import BackToDashboardButton from "../../common/BackToDashboardButton/BackToDashboardButton";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Introduction",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project01.png",
    alt: "A cartoon orange cat saying 'Hi, how are you?'",
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "free",
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
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "premium",
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
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "free",
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
    subscription: "premium",
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
    subscription: "free",
    year: "5 - 6",
    subject: "Maths",
  },
];

export default function ProjectLibrary() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [resultsLimit, setResultsLimit] = useState("All");

  const handleDifficulty = (difficulty) => setSelectedDifficulty(difficulty);
  const handleResultsLimit = (limit) => setResultsLimit(limit);

  const filteredDifficulties =
    selectedDifficulty === "ALL"
      ? projects
      : projects.filter((project) => selectedDifficulty === project.difficulty);

  function scrollBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Main section: title, side filters, top filters, project cards and bottom buttons */}
      <main className={styles.main}>
        {/* Header: Title and description of page */}
        <header className={styles.header}>
          <h1 className={styles.title}>PROJECTS</h1>
          <p className={styles.description}>
            Welcome to the project library. You can use the filters on the left
            to help you search for specific projects.
          </p>
        </header>

        {/* PLAN FOR SIDE FILTERS: Set filter field as its own component and set each checkbox and label as a nested component. May also be done for top filters */}
        {/* Side filter section*/}
        <div className={styles.sideFilters}>
          {/* Subscription filters */}
          <div className={styles.sideFilter}>
            <p className={styles.filterTitle}>SUBSCRIPTION</p>
            <hr className={styles.lineBreak} />
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="allSubscriptions"
                className={styles.checkbox}
              />
              <label
                htmlFor="allSubscriptions"
                className={styles.checkboxLabel}
              >
                All subsciptions
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="free" className={styles.checkbox} />
              <label htmlFor="free" className={styles.checkboxLabel}>
                Free
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="premium" className={styles.checkbox} />
              <label htmlFor="premium" className={styles.checkboxLabel}>
                Premium
              </label>
            </div>
          </div>

          {/* Activity Type filters */}
          <div className={styles.sideFilter}>
            <p className={styles.filterTitle}>ACTIVITY TYPE</p>
            <hr className={styles.lineBreak} />
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="allActivityTypes"
                className={styles.checkbox}
              />
              <label
                htmlFor="allActivityTypes"
                className={styles.checkboxLabel}
              >
                All activity types
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="animation"
                className={styles.checkbox}
              />
              <label htmlFor="animation" className={styles.checkboxLabel}>
                Animation
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="game" className={styles.checkbox} />
              <label htmlFor="game" className={styles.checkboxLabel}>
                Game
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="chatbot" className={styles.checkbox} />
              <label htmlFor="chatbot" className={styles.checkboxLabel}>
                Chatbot
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="augmentedReality"
                className={styles.checkbox}
              />
              <label
                htmlFor="augmentedReality"
                className={styles.checkboxLabel}
              >
                Augmented Reality
              </label>
            </div>
          </div>

          {/* Year Level filters */}
          <div className={styles.sideFilter}>
            <p className={styles.filterTitle}>YEAR LEVEL</p>
            <hr className={styles.lineBreak} />
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="allYearLevels"
                className={styles.checkbox}
              />
              <label htmlFor="allYearLevels" className={styles.checkboxLabel}>
                All year levels
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="1 - 4" className={styles.checkbox} />
              <label htmlFor="1 - 4" className={styles.checkboxLabel}>
                1 - 4
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="5 - 6" className={styles.checkbox} />
              <label htmlFor="5 - 6" className={styles.checkboxLabel}>
                5 - 6
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="7 - 8" className={styles.checkbox} />
              <label htmlFor="7 - 8" className={styles.checkboxLabel}>
                7 - 8
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="9 - 13" className={styles.checkbox} />
              <label htmlFor="9 - 13" className={styles.checkboxLabel}>
                9 - 13
              </label>
            </div>
          </div>

          {/* Subject Matter filters */}
          <div className={styles.sideFilter}>
            <p className={styles.filterTitle}>SUBJECT MATTER</p>
            <hr className={styles.lineBreak} />
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="allSubjects"
                className={styles.checkbox}
              />
              <label htmlFor="allSubjects" className={styles.checkboxLabel}>
                All subjects
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="computerScience"
                className={styles.checkbox}
              />
              <label htmlFor="computerScience" className={styles.checkboxLabel}>
                Computer Science
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="maths" className={styles.checkbox} />
              <label htmlFor="maths" className={styles.checkboxLabel}>
                Maths
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="science" className={styles.checkbox} />
              <label htmlFor="science" className={styles.checkboxLabel}>
                Science
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input
                type="checkbox"
                id="language"
                className={styles.checkbox}
              />
              <label htmlFor="language" className={styles.checkboxLabel}>
                Language
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="art" className={styles.checkbox} />
              <label htmlFor="art" className={styles.checkboxLabel}>
                Art
              </label>
            </div>
            <div className={styles.checkboxAndLabel}>
              <input type="checkbox" id="music" className={styles.checkbox} />
              <label htmlFor="music" className={styles.checkboxLabel}>
                Music
              </label>
            </div>
          </div>
        </div>

        {/* Top filter section */}
        <div className={styles.topFilters}>
          {/* Difficulty buttons */}
          <div className={styles.difficultyBtns}>
            <button
              className={`${styles.difficultyBtn} ${styles.allBtn} ${
                selectedDifficulty === "ALL" ? styles.activeDifficultyBtn : ""
              }`}
              onClick={() => handleDifficulty("ALL")}
            >
              ALL
            </button>
            <button
              className={`${styles.difficultyBtn} ${
                selectedDifficulty === "BEGINNER"
                  ? styles.activeDifficultyBtn
                  : ""
              }`}
              onClick={() => handleDifficulty("BEGINNER")}
            >
              BEGINNER
            </button>
            <button
              className={`${styles.difficultyBtn} ${
                selectedDifficulty === "INTERMEDIATE"
                  ? styles.activeDifficultyBtn
                  : ""
              }`}
              onClick={() => handleDifficulty("INTERMEDIATE")}
            >
              INTERMEDIATE
            </button>
            <button
              className={`${styles.difficultyBtn} ${styles.advancedBtn} ${
                selectedDifficulty === "ADVANCED"
                  ? styles.activeDifficultyBtn
                  : ""
              }`}
              onClick={() => handleDifficulty("ADVANCED")}
            >
              ADVANCED
            </button>
          </div>

          {/* Buttons to limit number of results */}
          <div className={styles.limitResultsBtns}>
            <p className={styles.show}>SHOW</p>
            <button
              className={`${styles.limitResultsBtn} ${styles.fiveResultsBtn} ${
                resultsLimit === 5 ? styles.activeResultsLimitBtn : ""
              }`}
              onClick={() => handleResultsLimit(5)}
            >
              5
            </button>
            <button
              className={`${styles.limitResultsBtn} ${
                resultsLimit === 10 ? styles.activeResultsLimitBtn : ""
              }`}
              onClick={() => handleResultsLimit(10)}
            >
              10
            </button>
            <button
              className={`${styles.limitResultsBtn} ${styles.allResultsBtn} ${
                resultsLimit === "All" ? styles.activeResultsLimitBtn : ""
              }`}
              onClick={() => handleResultsLimit("All")}
            >
              All
            </button>
          </div>
        </div>

        {/* Rendering the projects */}
        <div className={styles.projects}>
          <div className={styles.projectsContainer}>
            {filteredDifficulties
              .slice(
                0,
                resultsLimit === "All"
                  ? filteredDifficulties.length
                  : resultsLimit
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

        {/* Footer: Back to top and dashboard buttons */}
        <footer className={styles.backButtons}>
          <button onClick={scrollBackToTop} className={styles.backToTopButton}>
            BACK TO TOP
          </button>
          <BackToDashboardButton />
        </footer>
      </main>
    </div>
  );
}
