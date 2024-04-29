import { useState, useEffect } from "react";
import styles from "./LoginSignup.module.css";

// Image imports
import studentImage from "../../../assets/LoginSignup/students.png";
import teacherImage from "../../../assets/LoginSignup/teachers.png";
import xIcon from "../../../assets/Home/x.svg";
import LoginForm from "./LoginForm";

export default function LoginSignup(props) {
  // Switches between log in and sign up form
  const [currentForm, setCurrentForm] = useState("Log In");
  // Sets email and password login details to be sent back to database
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  // Gets user id to be sent back to database
  const [userId, setUserId] = useState();

  // Gets user type (student or teacher) and whether login use successful, to use in page direction and fetching info from database
  const [userType, setUserType] = useState();
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  // Renders a different message to show login success or fail
  const [messageToRender, setMessageToRender] = useState();

  // Changes between login and sign up forms
  const setForm = (e) => {
    e.target.textContent === "LOG IN"
      ? setCurrentForm("Log In")
      : setCurrentForm("Sign Up");
  };

  // Sets email and password logins to be sent to database
  function handleChange(e) {
    e.target.name === "email"
      ? setEmailLogin(e.target.value)
      : setPasswordLogin(e.target.value);
  }

  // Login function
  async function handleLogin(e) {
    e.preventDefault(); // prevent the form refreshing the page
    console.log("Login function triggered");

    // Depending on student or teacher login button triggered, sets usertype
    e.target.id === "student-login"
      ? setUserType("student")
      : setUserType("teacher");

    // code to handle the login process
    // fetches different API depending on student-login or teacher-login button being pressed
    fetch(`http://localhost:4000/${e.target.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailLogin, password: passwordLogin }),
    })
      .then((res) => {
        // Unsuccessful login
        if (res.status === 401) {
          console.log("Failed!");
          const message = "Incorrect password";
          setMessageToRender(message);
          throw new Error(
            `Your password was incorrect! Try checking the password ${res.status} 💥`
          );
        }

        // Unsuccessful login
        if (res.status === 404) {
          console.log("Failed!");
          const message = "Email is incorrect or entered in wrong area";
          setMessageToRender(message);
          throw new Error(
            `No user found! Try checking the username ${res.status} 💥`
          );
        }

        // Successful login
        if (res.status === 200) {
          console.log("Success!!");
          const message = "Success!";
          setMessageToRender(message);
          res
            .json()
            // Gets user id from database
            .then((result) => setUserId(result[0]["id"]))
            // Sets successful login to true, to direct to a new page
            .then(setSuccessfulLogin(true));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // useeffect is triggered when userID is grabbed from database
    if (successfulLogin) {
      // If login is successful, checks userType
      if (userType === "student") {
        // If userType is student, goes to project library page using usertype and id
        window.location.assign(`${userType}/${userId}/project-library`);
      } else {
        // If userType is not student (i.e. it's a teacher), goes to teacher dashboard
        window.location.assign("/teacher-dashboard");
      }
    }
  }, [userId]);

  return (
    // Transparent background is blurred when login shows
    <div className={styles.blurredBackground}>
      {/* Container for both student and teacher login and sign up */}
      <div className={styles.loginSignupContainer}>
        {/* Student login/signup div */}
        <div className={styles.studentLoginContainer}>
          {/* div, same height as x button in teacher section */}
          <div style={{ height: "1.6vw" }} />

          {/* Student image */}
          <img
            src={studentImage}
            alt="Cartoon of student"
            className={styles.userImage}
          />

          <h2 className={styles.userTitle}>Students</h2>

          {/* Login and sign up buttons */}
          <div className={styles.loginSignUpBtns}>
            {/* Login button */}
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Log In" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              LOG IN
              {/* Horizontal line if login button is active */}
              {currentForm === "Log In" && <div className={styles.hVLogin} />}
            </h3>

            {/* Sign up button */}
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Sign Up" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              SIGN UP
              {/* horizonta line if sign up button is active */}
              {currentForm === "Sign Up" && <div className={styles.hVSignUp} />}
            </h3>
          </div>

          {/* Login form if login button active*/}
          {currentForm === "Log In" && (
            <LoginForm
              onChange={handleChange}
              onSubmit={handleLogin}
              id="student-login"
              // Message renders when form is submitted
              messageToRender={userType === "student" && messageToRender}
            />
          )}
        </div>

        {/* Teacher login/signup div */}
        <div className={styles.teacherLoginContainer}>
          {/* x icon for closing login/signup container */}
          <img
            src={xIcon}
            alt="x-icon"
            onClick={props.xOnClick}
            className={styles.x}
          />

          {/* Teacher image */}
          <img
            src={teacherImage}
            alt="Cartoon of teacher"
            className={styles.userImage}
          />
          <h2 className={styles.userTitle}>Teachers</h2>

          {/* Login/sign up buttons */}
          <div className={styles.loginSignUpBtns}>
            {/* Login button */}
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Log In" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              LOG IN
            {/* Horizontal line if login button active */}
              {currentForm === "Log In" && <div className={styles.hVLogin} />}
            </h3>

            {/* Sign up button */}
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Sign Up" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              SIGN UP
            {/* Horizontal line if sign up button active */}
              {currentForm === "Sign Up" && <div className={styles.hVSignUp} />}
            </h3>
          </div>
          {/* Login form shows if login button active */}
          {currentForm === "Log In" && (
            <LoginForm
              onChange={handleChange}
              onSubmit={handleLogin}
              id="teacher-login"
              // Message renders when form is submitted
              messageToRender={userType === "teacher" && messageToRender}
            />
          )}
        </div>
      </div>
    </div>
  );
}
