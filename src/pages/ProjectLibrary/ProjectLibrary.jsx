import { Link } from "react-router-dom";
import { useState } from "react";
import SideFilters from "./components/SideFilters";
import styles from "./ProjectLibrary.module.css";
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
  },
  {
    id: 2,
    name: "My Birthday",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project02.png",
    alt: "Cartoon child with birthday cake at park",
  },
  {
    id: 3,
    name: "10 Block Challenge",
    difficulty: "INTERMEDIATE",
    activity: "Animation",
    src: "/images/projects/Project03.png",
    alt: "An cartoon orange cat walking through a farm",
  },
  {
    id: 4,
    name: "Build a band",
    difficulty: "INTERMEDIATE",
    activity: "Game",
    src: "/images/projects/Project04.png",
    alt: "A cartoon of a lady in a purple dress on stage with instruments",
  },
  {
    id: 5,
    name: "The bear and the monkey",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project05.png",
    alt: "A cartoon of a brown bear and a monkey in a jungle",
  },
  {
    id: 6,
    name: "Debugging",
    difficulty: "ADVANCED",
    activity: "Augmented Reality",
    src: "/images/projects/Project06.png",
    alt: "A cartoon of a yellow flame and an orange cat saying 'Fun!'",
  },
  {
    id: 7,
    name: "About me",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project07.png",
    alt: "Cartoons of an orange cat saying 'Make Scratch', a laptop, a pencil, cereal, a pie, a chicken and a girl in a green t-shirt, floating around each other",
  },
  {
    id: 8,
    name: "I am here!",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project08.png",
    alt: "A cartoon of a green forest with grass, lily pads, a mountain and a red crab",
  },
  {
    id: 9,
    name: "Funny faces",
    difficulty: "BEGINNER",
    activity: "Game",
    src: "/images/projects/Project09.png",
    alt: "Cartoons of a bear hat, glasses, green bow tie, a hat, a pig's nose, eyes,nose and mouths",
  },
  {
    id: 10,
    name: "It tickles!",
    difficulty: "INTERMEDIATE",
    activity: "Animation",
    src: "/images/projects/Project10.png",
    alt: "A cartoon of a child saying, 'It tickles! outside of a red building with a smiling flame",
  },
  {
    id: 11,
    name: "Penguin in a Desert",
    difficulty: "BEGINNER",
    activity: "Chatbot",
    src: "/images/projects/Project11.png",
    alt: "A carton of a penguin in a desert, a cactus nearby",
  },
  {
    id: 12,
    name: "Time Travel",
    difficulty: "ADVANCED",
    activity: "Animation",
    src: "/images/projects/Project12.png",
    alt: "A cartoon of a child in front of a wharenui saying 'I want to see the time before Maui fished up North Island'",
  },
  {
    id: 13,
    name: "Birthday Card",
    difficulty: "BEGINNER",
    activity: "Chatbot",
    src: "/images/projects/Project13.png",
    alt: "A cartoon of a person in a purple dress at a party, multi-coloured balloons everywhere and HAPPY BIRTHDAY letters among the balloons",
  },
  {
    id: 14,
    name: "The Lion and the Mouse",
    difficulty: "BEGINNER",
    activity: "Animation",
    src: "/images/projects/Project14.png",
    alt: "A cartoon of a lion and a mouse in a grassy part of the jungle",
  },
  {
    id: 15,
    name: "The Lion in the Forest",
    difficulty: "BEGINNER",
    activity: "Augmented Reality",
    src: "/images/projects/Project15.png",
    alt: "A cartoon of a lion in a forest at night",
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
      {/* Section for main content, including title, side filters, top filters, project cards and bottom buttons */}
      <main className={styles.main}>
        {/* Header: Title and description of page */}
        <header className={styles.header}>
          <h1 className={styles.title}>PROJECTS</h1>
          <p className={styles.description}>
            Welcome to the project library. You can use the filters on the left
            to help you search for specific projects.
          </p>
        </header>
        {/* Side filter section: SUBSCRIPTION (Free or Premium, only one checked at a time), ACTIVITY TYPE (Animation, Game, Chatbot, Augmented Reality, multiple can be checked at a time), YEAR LEVEL (1 - 4, 5 - 6, 7 - 8, 9 - 13, multiple can be checked at a time, SUBJECT MATTER (Computer Science, Maths, Science, Language, Art, Music, multiple can be checked at a time) )  */}
        <div className={styles.sideFilters}>
          <SideFilters />
        </div>
        {/* Top filter section: to include 'show 5, 10 or All' in one line (probably as their own component(s)) */}
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
        {/* Projects section */}
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
