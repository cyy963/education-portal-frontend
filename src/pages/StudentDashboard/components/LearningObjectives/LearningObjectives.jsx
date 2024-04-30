import { useState, useEffect } from 'react'; // React hooks for managing state and lifecycle in functional components
import { useParams } from 'react-router-dom'; // Hook from react-router-dom to access URL parameters
import DOMPurify from 'dompurify'; // Library to sanitize HTML content to prevent XSS attacks
import styles from './LearningObjectives.module.css'; 

// Define the functional component 'LearningObjectives'
export default function LearningObjectives() {
  const [results, setResults] = useState(''); // State variable 'results' to store the fetched learning objectives, initialized as an empty string
  let { projectId } = useParams(); // Retrieve 'projectId' from the URL parameters using useParams hook

  // useEffect hook to perform side effects, here used to fetch data based on 'projectId'
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectId}/learning-objectives`) // Fetch learning objectives from a local server using the project ID
      .then((response) => response.text()) // Convert the response to text since the expected response is HTML
      .then((res) => setResults(res)) // Update the 'results' state with the fetched HTML content
      .catch((err) => {
        console.error(err); // Log errors to the console if the fetch fails
      });
  }, [projectId]); // Dependency array with 'projectId' to refetch data when 'projectId' changes

  // Return JSX to render the component
  return (
    <div className={styles.overlayBox}> 
      {results && ( // Conditional rendering to only display content if 'results' is not empty
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(results) }} /> // Use 'dangerouslySetInnerHTML' to insert the sanitized HTML content into the DOM
      )}
    </div>
  );
}

