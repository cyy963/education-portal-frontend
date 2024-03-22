import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Importing page components
import HelpRequests from "./pages/TeacherDashboard/HelpRequests/HelpRequests.jsx";
import Home from "./pages/Home/Home.jsx";
import Instructions from "./pages/StudentDashboard/Instructions/Instructions.jsx";
import LearningObjectives from "./pages/StudentDashboard/LearningObjectives/LearningObjectives.jsx";
import MakeProject from "./pages/StudentDashboard/MakeProject/MakeProject.jsx";
import ProgressTracker from "./pages/TeacherDashboard/ProgressTracker/ProgressTracker.jsx";
import ProjectLibrary from "./pages/TeacherDashboard/ProjectLibrary/ProjectLibrary.jsx";
import ProjectSubmissions from "./pages/TeacherDashboard/ProjectSubmissions/ProjectSubmissions.jsx";
import StudentProfiles from "./pages/TeacherDashboard/StudentProfiles/StudentProfiles.jsx";
import StudentProfileViewer from "./pages/ProjectLibrary/StudentProfileViewer/StudentProfileViewer.jsx";
import SubmitProject from "./pages/StudentDashboard/SubmitProject/SubmitProject.jsx";
import TeacherProfileViewer from "./pages/TeacherDashboard/ProjectLibrary/TeacherProfileViewer/TeacherProfileViewer.jsx";
import VideoTutorial from "./pages/StudentDashboard/VideoTutorial/VideoTutorial.jsx";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />

        {/* Redirect from /teacher-dashboard to /teacher-dashboard/progressTracker */}
        <Route
          path="/teacher-dashboard"
          element={<Navigate to="/teacher-dashboard/progressTracker" />}
        />
        <Route
          path="/student-dashboard"
          element={<Navigate to="/student-dashboard/learning-objectives" />}
        />


        <Route path="/projectLibrary" element={<ProjectLibrary />}>
          <Route path="studentProfileViewer" element={<StudentProfileViewer />} />
        </Route>

        <Route
          path="/teacher-dashboard"
          element={<Navigate to="/teacher-dashboard/progressTracker" />}
        >
          {/* Routes that are a subset fo teacher dash-board */}
          <Route path="help-requests" element={<HelpRequests />} />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="project-submissions" element={<ProjectSubmissions />} />
          <Route path="student-profiles" element={<StudentProfiles />} />
        </Route>

        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          <Route path="progressTracker" element={<ProgressTracker />} />
          <Route path="studentProfiles" element={<StudentProfiles />} />
          <Route path="helpRequests" element={<HelpRequests />} />
          <Route path="projectSubmissions" element={<ProjectSubmissions />} />
          <Route path="projectLibrary" element={<ProjectLibrary />} >
            <Route path="teacherProfileViewer" element={<TeacherProfileViewer />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
