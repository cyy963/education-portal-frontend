import { useState, useEffect } from 'react'; // Import useState and useEffect hooks from React.
import { useParams } from 'react-router-dom'; // Import useParams hook from react-router-dom to access route parameters.
import DOMPurify from 'dompurify'; // Import DOMPurify to sanitize HTML content and prevent XSS attacks.
import styles from './Instructions.module.css'; 

export default function Instructions() {
  const [results, setResults] = useState(''); // Initialize state 'results' with an empty string.
  let { projectId } = useParams(); // Retrieve 'projectId' from the current URL parameters.

  useEffect(() => {
    // Fetch instructions based on projectId and handle the response.
    fetch(`http://localhost:4000/projects/${projectId}/instructions`)
      .then((response) => response.text()) // Convert the response to text.
      .then((res) => setResults(res)) // Update the 'results' state with the fetched data.
      .catch((err) => {
        console.error(err); // Log any errors to the console.
      });
  }, [projectId]); // Depend on projectId to re-run the effect when it changes.

  return (
    <div className={styles.overlayBox}> 
      {results && ( // Check if 'results' contains data and render the div.
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(results) }} /> // Set HTML content safely.
      )}
    </div>
  );
}

