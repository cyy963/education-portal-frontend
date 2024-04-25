import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import styles from './Instructions.module.css';
 
export default function Instructions() {
  const [results, setResults] = useState('');
  let { projectId } = useParams();
 
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectId}/instructions`)
      .then((response) => response.text()) // Change to .text() to get HTML content
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
