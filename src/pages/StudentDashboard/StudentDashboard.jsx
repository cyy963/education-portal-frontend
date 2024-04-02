import React from "react";
import Dashboard from "../../common/Dashboard/Dashboard.jsx";
import { useState } from "react";
import NavbarTwo from "../../common/NavbarTwo.jsx";

export default function TeacherDashboard() {
  // Assuming you have the teacher's name stored somewhere,
  // replace 'teacherNameValue' with the actual name value
  const teacherName = "teacherNameValue";

  return (
    <>
      {/* top nav */}
      {/* <header style={{ outline: '2px solid black' }}>TOP NAV</header> */}
      <NavbarTwo page="student" />

      {/* dashboard + body */}
      <Dashboard user="student" studentName="AidenAndrews" />

      {/* footer */}
      <footer>FOOTER</footer>
    </>
  );
}
