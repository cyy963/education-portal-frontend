// import ProjectCard from "./ProjectCard";
// import styles from "../ProjectLibrary.module.css";

// export default function AllProjects() {
//   const projects = [
//     {
//       name: "Introduction",
//       level: "BEGINNER",
//       activity: "Animation",
//       src: "/images/projects/Project01.png",
//       alt: "A cartoon orange cat saying 'Hi, how are you?'",
//     },
//     {
//       name: "My Birthday",
//       level: "BEGINNER",
//       activity: "Game",
//       src: "/images/projects/Project02.png",
//       alt: "Cartoon child with birthday cake at park",
//     },
//     {
//       name: "10 Block Challenge",
//       level: "INTERMEDIATE",
//       activity: "Animation",
//       src: "/images/projects/Project03.png",
//       alt: "An cartoon orange cat walking through a farm",
//     },
//     {
//       name: "Build a band",
//       level: "INTERMEDIATE",
//       activity: "Game",
//       src: "/images/projects/Project04.png",
//       alt: "A cartoon of a lady in a purple dress on stage with instruments",
//     },
//     {
//       name: "The bear and the monkey",
//       level: "BEGINNER",
//       activity: "Game",
//       src: "/images/projects/Project05.png",
//       alt: "A cartoon of a brown bear and a monkey in a jungle",
//     },
//     {
//       name: "Debugging",
//       level: "ADVANCED",
//       activity: "Augmented Reality",
//       src: "/images/projects/Project06.png",
//       alt: "A cartoon of a yellow flame and an orange cat saying 'Fun!'",
//     },
//     {
//       name: "About me",
//       level: "BEGINNER",
//       activity: "Animation",
//       src: "/images/projects/Project07.png",
//       alt: "Cartoons of an orange cat saying 'Make Scratch', a laptop, a pencil, cereal, a pie, a chicken and a girl in a green t-shirt, floating around each other",
//     },
//     {
//       name: "I am here!",
//       level: "BEGINNER",
//       activity: "Animation",
//       src: "/images/projects/Project08.png",
//       alt: "A cartoon of a green forest with grass, lily pads, a mountain and a red crab",
//     },
//     {
//       name: "Funny faces",
//       level: "BEGINNER",
//       activity: "Game",
//       src: "/images/projects/Project09.png",
//       alt: "Cartoons of a bear hat, glasses, green bow tie, a hat, a pig's nose, eyes,nose and mouths",
//     },
//     {
//       name: "It tickles!",
//       level: "INTERMEDIATE",
//       activity: "Animation",
//       src: "/images/projects/Project10.png",
//       alt: "A cartoon of a child saying, 'It tickles! outside of a red building with a smiling flame",
//     },
//     {
//       name: "Penguin in a Desert",
//       level: "BEGINNER",
//       activity: "Chatbot",
//       src: "/images/projects/Project11.png",
//       alt: "A carton of a penguin in a desert, a cactus nearby",
//     },
//     {
//       name: "Time Travel",
//       level: "ADVANCED",
//       activity: "Animation",
//       src: "/images/projects/Project12.png",
//       alt: "A cartoon of a child in front of a wharenui saying 'I want to see the time before Maui fished up North Island'",
//     },
//     {
//       name: "Birthday Card",
//       level: "BEGINNER",
//       activity: "Chatbot",
//       src: "/images/projects/Project13.png",
//       alt: "A cartoon of a person in a purple dress at a party, multi-coloured balloons everywhere and HAPPY BIRTHDAY letters among the balloons",
//     },
//     {
//       name: "The Lion and the Mouse",
//       level: "BEGINNER",
//       activity: "Animation",
//       src: "/images/projects/Project14.png",
//       alt: "A cartoon of a lion and a mouse in a grassy part of the jungle",
//     },
//     {
//       name: "The Lion in the Forest",
//       level: "BEGINNER",
//       activity: "Augmented Reality",
//       src: "/images/projects/Project15.png",
//       alt: "A cartoon of a lion in a forest at night",
//     },
//   ];
//   return (
//     <div className={styles.projectsContainer}>
//       {projects.map((project, index) => (
//         <ProjectCard
//           key={index}
//           name={project.name}
//           level={project.level}
//           activity={project.activity}
//           src={project.src}
//           alt={project.alt}
//         />
//       ))}
//     </div>
//   );
// }
