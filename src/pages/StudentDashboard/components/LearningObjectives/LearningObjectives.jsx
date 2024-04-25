import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import styles from './LearningObjectives.module.css'; 

export default function LearningObjectives() {
  const [results, setResults] = useState('');
  let { projectId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectId}/learning-objectives`)
      .then((response) => response.text()) // Ensure that the backend is sending HTML content if using .text()
      .then((res) => setResults(res))
      .catch((err) => {
        console.error(err);
      });
  }, [projectId]);

  return (
    <div className={styles.overlayBox}>
      {results && (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(results) }} />
      )}
    </div>
  );
}
