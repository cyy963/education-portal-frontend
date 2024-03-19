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
        <Route path="/helpRequests" element={<HelpRequests />} />
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/learningObjectives" element={<LearningObjectives />} />
        <Route path="/makeProject" element={<MakeProject />} />
        <Route path="/progressTracker" element={<ProgressTracker />} />
        <Route path="/projectLibrary" element={<ProjectLibrary />} />
        <Route path="/projectSubmissions" element={<ProjectSubmissions />} />
        <Route path="/studentProfiles" element={<StudentProfiles />} />
        <Route
          path="/studentProfileViewer"
          element={<StudentProfileViewer />}
        />
        <Route path="/submitProject" element={<SubmitProject />} />
        <Route
          path="/teacherProfileViewer"
          element={<TeacherProfileViewer />}
        />
        <Route path="/videoTutorial" element={<VideoTutorial />} />
      </Routes>
    </>
  );
}

export default App;
