import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importing page components
import HelpRequests from "./pages/TeacherDashboard/components/HelpRequests.jsx";
import Home from "./pages/Home/Home.jsx";
import Instructions from "./pages/StudentDashboard/components/Instructions.jsx";
import LearningObjectives from "./pages/StudentDashboard/components/LearningObjectives.jsx";
import MakeProject from "./pages/StudentDashboard/components/MakeProject.jsx";
import ProgressTracker from "./pages/TeacherDashboard/components/ProgressTracker.jsx";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary.jsx";
import ProjectSubmissions from "./pages/TeacherDashboard/components/ProjectSubmissions.jsx";
import StudentProfiles from "./pages/TeacherDashboard/components/StudentProfiles.jsx";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer.jsx";
import SubmitProject from "./pages/StudentDashboard/components/SubmitProject.jsx";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer.jsx";
import VideoTutorial from "./pages/StudentDashboard/components/VideoTutorial.jsx";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          {/* Routes that are a subset of student dashboard */}
          <Route path="instructions" element={<Instructions />} />
          <Route path="learning-objectives" element={<LearningObjectives />} />
          <Route path="make-project" element={<MakeProject />} />
          <Route path="video-tutorial" element={<VideoTutorial />} />
          <Route path="submit-project" element={<SubmitProject />} />
        </Route>

        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          {/* Routes that are a subset fo teacher dash-board */}
          <Route path="help-requests" element={<HelpRequests />} />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="project-submissions" element={<ProjectSubmissions />} />
          <Route path="student-profiles" element={<StudentProfiles />} />
        </Route>

        <Route path="/project-library" element={<ProjectLibrary />} />
        <Route
          path="/student-profile-viewer"
          element={<StudentProfileViewer />}
        />
        <Route
          path="/teacher-profile-viewer"
          element={<TeacherProfileViewer />}
        />
      </Routes>
    </>
  );
}

export default App;
