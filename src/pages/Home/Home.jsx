import { Link } from "react-router-dom";
import { useState } from "react";
import NavBarOne from "../../common/NavBar1/NavBarOne";
import FooterOne from "../../common/Footer1/FooterOne";
import styles from "./Home.module.css";
import LoginSignup from "./components/LoginSignup";
import banner from "../../assets/Home/hero.png";
import animationImg from "../../assets/Home/animation.png";
import gamesImg from "../../assets/Home/games.png";
import chatbotsImg from "../../assets/Home/chatbots.png";
import augrealityImg from "../../assets/Home/augreality.png";
import laptop1Img from "../../assets/Home/laptop1.png";
import laptop2Img from "../../assets/Home/laptop2.png";
import laptop3Img from "../../assets/Home/laptop3.png";
import laptop4Img from "../../assets/Home/laptop4.png";

export default function Home() {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const showLogin = (e) => setVisibleLogin(true);
  const hideLogin = () => setVisibleLogin(false);
  const [laptopImage, setLaptopImage] = useState(laptop1Img);

  const switchImg = (e) => {
    switch (e.target.id) {
      case "games":
        setLaptopImage(laptop2Img);
        break;
      case "chatbots":
        setLaptopImage(laptop3Img);
        break;
      case "augreality":
        setLaptopImage(laptop4Img);
        break;
      default:
        setLaptopImage(laptop1Img);
    }
  };

  const setImage = (e) => {
    switch (e.target.id) {
      case "btn2":
        setLaptopImage(laptop2Img);
        break;
      case "btn3":
        setLaptopImage(laptop3Img);
        break;
      case "btn4":
        setLaptopImage(laptop4Img);
        break;
      default:
        setLaptopImage(laptop1Img);
    }
  };

  return (
    <div
    // onClick={hideLogin}
    >
      <div className={styles.main}>
        <div className={styles.navBarSpace}>
          <NavBarOne
            text="FEATURES"
            userImage="src/assets/NavBar/Avatar-white.png"
            alt="White silhouette of a person"
            userName="REGISTER | LOGIN"
            onChange={showLogin}
          />
        </div>
        {visibleLogin && (
          <LoginSignup
            // containerOnClick={showLogin}
            xOnClick={hideLogin}
          />
        )}

        {/* Banner */}
        <div className={styles.banner}>
          <img src={banner} className={styles.bannerImg} />
          <div className={styles.bannerChildren}>
            {/* Title */}
            <h1 className={styles.callToAction}>
              Prepare young minds for a better
              <span className={styles.future}> future.</span>
            </h1>

            {/* Call to Action paragraph */}
            <h4 className={styles.letUsPara}>
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </h4>

            {/* Learn more and Sign up buttons */}
            <div className={styles.bannerBtns}>
              <button className={styles.learnMoreBtn}>LEARN MORE</button>
              <button className={styles.signUpBtn} onClick={showLogin}>
                SIGN UP
              </button>
            </div>
            <p className={styles.asterisk}>
              *Basic subscription includes the first 15 projects free of charge.
            </p>
          </div>
        </div>

        {/* What we offer section */}
        <div className={styles.descriptionSection}>
          <h3 className={styles.offerTitle}>What we offer</h3>
          <p className={styles.descriptionPara}>
            The Creative Problem Solving programme is a series of digital
            creation projects aim to enourage self-motivation and student
            agency, designed by New Zealand's leading IT industry experts and
            schools.
          </p>
          <h4 className={styles.studentsCreateTitle}>
            What will students create?
          </h4>
          <div className={styles.activityImgs}>
            <img
              src={animationImg}
              alt="Animation icon"
              className={styles.activityImg}
              onClick={switchImg}
              id="animation"
            />
            <img
              src={gamesImg}
              alt="Gaming controller icon"
              className={styles.activityImg}
              onClick={switchImg}
              id="games"
            />
            <img
              src={chatbotsImg}
              alt="Robot icon"
              className={styles.activityImg}
              onClick={switchImg}
              id="chatbots"
            />
            <img
              src={augrealityImg}
              alt="Phone with cube icon"
              className={styles.activityImg}
              onClick={switchImg}
              id="augreality"
            />
          </div>
        </div>

        {/* Laptop slider images */}
        <div className={styles.laptopSlider}>
          <img
            src={laptopImage}
            alt="Laptop showing possible student creations"
            className={styles.laptopImg}
          />
          <div className={styles.sliderBtns}>
            <button
              className={`${styles.sliderBtn} ${
                laptopImage === laptop1Img ? styles.sliderBtnActive : ""
              }`}
              id="btn1"
              onClick={setImage}
            ></button>
            <button
              className={`${styles.sliderBtn} ${
                laptopImage === laptop2Img ? styles.sliderBtnActive : ""
              }`}
              id="btn2"
              onClick={setImage}
            ></button>
            <button
              className={`${styles.sliderBtn} ${
                laptopImage === laptop3Img ? styles.sliderBtnActive : ""
              }`}
              id="btn3"
              onClick={setImage}
            ></button>
            <button
              className={`${styles.sliderBtn} ${
                laptopImage === laptop4Img ? styles.sliderBtnActive : ""
              }`}
              id="btn4"
              onClick={setImage}
            ></button>
          </div>
        </div>

        <div className={styles.links}>
          <Link to="/teacher-dashboard">Go to Teacher Dashboard</Link>
          <br />
          <Link to="/student-dashboard/1/learning-objectives">
            Go to Student Dashboard
          </Link>
          <br />
          <Link to="/project-library">Go to Project Library</Link>
          <br />
          <Link to="/student-profile-viewer">Go to Student Profile Viewer</Link>
          <br />
          <Link to="/teacher-profile-viewer">Go to Teacher Profile Viewer</Link>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}
