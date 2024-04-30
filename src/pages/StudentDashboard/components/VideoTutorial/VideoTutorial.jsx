import { useState, useEffect } from 'react'; // Import useState for state management and useEffect for side effects from React
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import styles from './VideoTutorial.module.css'; // Import CSS module for specific styling

export default function VideoTutorial() {
  const [videoId, setVideoId] = useState(''); // Initialize 'videoId' state with an empty string
  const { projectId } = useParams(); // Retrieve 'projectId' from the URL parameters
  
  useEffect(() => {
    // Effect to fetch video data based on the projectId
    fetch(`http://localhost:4000/projects/${projectId}/video`) // Fetch video URL from the backend
      .then(response => {
        if (!response.ok) { // Check if the response is not OK
          throw new Error('Failed to fetch video'); 
        }
        return response.text(); // Convert response to text format
      })
      .then(res => {
        setVideoId(res); // Update the 'videoId' state with the fetched result
        console.log('Fetch successful'); // Log success to the console
      })
      .catch(err => {
        console.error('Error fetching video:', err); // Log any errors during fetch to the console
      });
  }, [projectId]); // Re-run the effect if 'projectId' changes
  
  return (
    <div className={styles.overlayBox}> 
      {videoId && ( // Conditional rendering: Only display the iframe if 'videoId' is not empty
        <div id="player" className={styles.videoWrapper}> 
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`} // Embed YouTube video based on 'videoId'
            title="YouTube video player" // Title for accessibility purposes
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permissions for the iframe
            allowFullScreen // Allow the iframe to go into full screen mode
            className={styles.videoStyle} // Styling for the iframe
          ></iframe>
        </div>
      )}
    </div>
  );
}
