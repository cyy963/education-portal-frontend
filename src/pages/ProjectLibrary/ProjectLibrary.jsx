import { useState } from "react";
import styles from "./ProjectLibrary.module.css";
import popUpMenuStyles from "./../../common/NavBar1/components/PopUpMenu.module.css";

// Imports:
import NavBarOne from "../../common/NavBar1/NavBarOne";
import PopUpMenu from "../../common/NavBar1/components/PopUpMenu";
import Header from "./components/Header";
import FiltersProjects from "./components/FiltersProjects";
import BackToDashboardButton from "../../common/BackToDashboardButton/BackToDashboardButton";

export default function ProjectLibrary() {
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => setPopUp(!popUp);
  const removePopUp = () => setPopUp(false);

  const userData = [
    {
      id: 1,
      firstName: "Rawiri",
      lastName: "Fletcher",
      userType: "Student",
      photo: "/images/students/RawiriFletcher.png",
    },
    {
      id: 2,
      firstName: "Jasmina",
      lastName: "Salvador",
      userType: "Teacher",
      photo: "/images/teachers/JasminaSalvador.png",
    },
  ];

  const user = userData[0];

  function scrollBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div onClick={removePopUp}>
      <div className={styles.navBarSpace}>
        <NavBarOne
          text="PROJECTS"
          userImage={user.photo}
          alt={`Profile photo of ${user.firstName} ${user.lastName}`}
          userName={`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}
          onChange={togglePopUp}
        />
      </div>
      <PopUpMenu
        profileLink="/student-profile-viewer"
        onClick={togglePopUp}
        arrowClassName={`${popUpMenuStyles.arrow} ${
          popUp ? popUpMenuStyles.show : ""
        }`}
        menuClassName={`${popUpMenuStyles.popUpMenu} ${
          popUp ? popUpMenuStyles.show : ""
        }`}
      />

      <main className={styles.main}>
        {/* Header: Title and description of page */}
        <Header />

        <FiltersProjects />

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
