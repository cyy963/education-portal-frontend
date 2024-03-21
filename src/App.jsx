import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importing page components
import HelpRequests from "./pages/HelpRequests/HelpRequests.jsx";
import Home from "./pages/Home/Home.jsx";
import Instructions from "./pages/Instructions/Instructions.jsx";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives.jsx";
import MakeProject from "./pages/MakeProject/MakeProject.jsx";
import ProgressTracker from "./pages/ProgressTracker/ProgressTracker.jsx";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary.jsx";
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions.jsx";
import StudentProfiles from "./pages/StudentProfiles/StudentProfiles.jsx";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer.jsx";
import SubmitProject from "./pages/SubmitProject/SubmitProject.jsx";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer.jsx";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/learning-objectives" element={<LearningObjectives />} />
        <Route path="/make-project" element={<MakeProject />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/project-library" element={<ProjectLibrary />} />
        <Route path="/project-submissions" element={<ProjectSubmissions />} />
        <Route path="/student-profiles" element={<StudentProfiles />} />
        <Route
          path="/student-profile-viewer"
          element={<StudentProfileViewer />}
        />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route
          path="/teacher-profile-viewer"
          element={<TeacherProfileViewer />}
        />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
      </Routes>
    </>
  );
}

export default App;
