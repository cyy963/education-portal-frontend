import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Importing page components
import HelpRequests from "./pages/TeacherDashboard/components/HelpRequests/HelpRequests.jsx";
import Home from "./pages/Home/Home.jsx";
import Instructions from "./pages/StudentDashboard/components/Instructions/Instructions.jsx";
import LearningObjectives from "./pages/StudentDashboard/components/LearningObjectives/LearningObjectives.jsx";
import MakeProject from "./pages/StudentDashboard/components/MakeProject/MakeProject.jsx";
import ProgressTracker from "./pages/TeacherDashboard/components/ProgressTracker/ProgressTracker.jsx";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary.jsx";
import ProjectSubmissions from "./pages/TeacherDashboard/components/ProjectSubmissions/ProjectSubmissions.jsx";
import StudentProfiles from "./pages/TeacherDashboard/components/StudentProfiles/StudentProfiles.jsx";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer.jsx";
import SubmitProject from "./pages/StudentDashboard/components/SubmitProject/SubmitProject.jsx";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer.jsx";
import VideoTutorial from "./pages/StudentDashboard/components/VideoTutorial/VideoTutorial.jsx";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-library" element={<ProjectLibrary />} />
        <Route path="/student-profile-viewer" element={<StudentProfileViewer />} />
        <Route path="/teacher-profile-viewer" element={<TeacherProfileViewer />} />

        {/* redirects to learning-objectives from student-dashboard */}
        <Route path="/student-dashboard" element={<Navigate to="/student-dashboard/learning-objectives" />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          {/* Routes that are a subset of student dashboard */}
          <Route path="instructions" element={<Instructions />} />
          <Route path="learning-objectives" element={<LearningObjectives />} />
          <Route path="make-project" element={<MakeProject />} />
          <Route path="video-tutorial" element={<VideoTutorial />} />
          <Route path="submit-project" element={<SubmitProject />} />
        </Route>

        {/* redirects to progress-tracker from teacher-dashboard */}
        <Route path="/teacher-dashboard" element={<Navigate to="/teacher-dashboard/progress-tracker" />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          {/* Routes that are a subset fo teacher-dashboard */}
          <Route path="help-requests" element={<HelpRequests />} />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="project-submissions" element={<ProjectSubmissions />} />
          <Route path="student-profiles" element={<StudentProfiles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
