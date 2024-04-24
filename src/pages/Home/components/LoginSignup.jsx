import { useState, useEffect } from "react";
import styles from "./LoginSignup.module.css";
import studentImage from "../../../assets/LoginSignup/students.png";
import teacherImage from "../../../assets/LoginSignup/teachers.png";
import xIcon from "../../../assets/Home/x.svg";
import LoginForm from "./LoginForm";

export default function LoginSignup(props) {
  const [currentForm, setCurrentForm] = useState("Log In");
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();
  const [userId, setUserId] = useState();
  const [userType, setUserType] = useState();
  const [messageToRender, setMessageToRender] = useState();
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const setForm = (e) => {
    e.target.textContent === "LOG IN"
      ? setCurrentForm("Log In")
      : setCurrentForm("Sign Up");
  };

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmailLogin(e.target.value);
    } else if (e.target.name === "password") {
      setPasswordLogin(e.target.value);
    }
  }

  // Login function
  async function handleLogin(e) {
    e.preventDefault(); // prevent the form refreshing the page
    console.log("Login function triggered");
    // code to handle the login process
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
            .then((result) => setUserId(result[0]["id"]))
            .then(
              e.target.id === "student-login"
                ? setUserType("student")
                : setUserType("teacher")
            )
            .then(setSuccessfulLogin(true));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    successfulLogin
      ? window.location.assign(`${userType}/${userId}/project-library`)
      : "";
  }, [userId]);

  return (
    <div className={styles.blurredBackground}>
      <div
        className={styles.loginSignupContainer}
        // onClick={props.containerOnClick}
      >
        <div className={styles.studentLoginContainer}>
          <div style={{ height: "1.6vw" }} />
          <img
            src={studentImage}
            alt="Cartoon of student"
            className={styles.userImage}
          />
          <h2 className={styles.userTitle}>Students</h2>
          <div className={styles.loginSignUpBtns}>
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Log In" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              LOG IN
              {currentForm === "Log In" && <div className={styles.hVLogin} />}
            </h3>
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Sign Up" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              SIGN UP
              {currentForm === "Sign Up" && <div className={styles.hVSignUp} />}
            </h3>
          </div>
          {currentForm === "Log In" && (
            <LoginForm
              onChange={handleChange}
              onSubmit={handleLogin}
              id="student-login"
              messageToRender={userType === "student" && messageToRender}
            />
          )}
        </div>
        <div className={styles.teacherLoginContainer}>
          <img
            src={xIcon}
            alt="x-icon"
            onClick={props.xOnClick}
            className={styles.x}
          />
          <img
            src={teacherImage}
            alt="Cartoon of teacher"
            className={styles.userImage}
          />
          <h2 className={styles.userTitle}>Teachers</h2>
          <div className={styles.loginSignUpBtns}>
            <h3
              className={`${styles.formBtn} ${
                currentForm === "Log In" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              LOG IN
              {currentForm === "Log In" && <div className={styles.hVLogin} />}
            </h3>

            <h3
              className={`${styles.formBtn} ${
                currentForm === "Sign Up" ? styles.formBtnActive : ""
              }`}
              onClick={setForm}
            >
              SIGN UP
              {currentForm === "Sign Up" && <div className={styles.hVSignUp} />}
            </h3>
          </div>
          {currentForm === "Log In" && (
            <LoginForm
              onChange={handleChange}
              onSubmit={handleLogin}
              id="teacher-login"
              messageToRender={userType === "teacher" && messageToRender}
            />
          )}
        </div>
      </div>
    </div>
  );
}
