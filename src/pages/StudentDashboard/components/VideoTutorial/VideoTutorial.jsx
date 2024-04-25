import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './VideoTutorial.module.css';
 
export default function VideoTutorial() {
  const [videoId, setVideoId] = useState('');
  const { projectId } = useParams();
 
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectId}/video`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        return response.text();
      })
      .then(res => {
        setVideoId(res);
        console.log('Fetch successful'); // Add this console.log statement
      })
      .catch(err => {
        console.error('Error fetching video:', err);
      });
  }, [projectId]);
 
 
  return (
    <div className={styles.overlayBox}>
      {videoId && (
        <div id="player" className={styles.videoWrapper}>
          <iframe
          src="https://www.youtube.com/embed/YpTPKiPN9G4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoStyle}
        ></iframe>
        </div>
      )}
    </div>
  );
}