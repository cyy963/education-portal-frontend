// Filestack
import React, { useEffect, useState } from "react";
import { PickerOverlay } from "filestack-react-18";

// React router dom
import { useParams } from "react-router-dom";

// Import images
import submitIcon from "../../../../../assets/StudentDashboard/sendPhoto.png";
import callIcon from "../../../../../assets/StudentDashboard/callTeacher.png";

// Import stylsheet
import styles from "../SubmitProject.module.css";

export default function SubmitProjectButtons({ type }) {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const params = useParams();

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  console.log(params.projectId);

  useEffect(() => {
    imageUrl &&
      fetch("http://localhost:4000/api/submit-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: 13,
          projectId: params.projectId,
          dateSub: new Date().toISOString().slice(0, 19).replace("T", " "),
          img: imageUrl,
        }),
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("submit successful");
        }
      });
  }, [imageUrl]);

  if (type === "photo") {
    return (
      <div>
        <button className={styles.button} onClick={handleVisible}>
          <img src={submitIcon} alt="submit photo icon" />
          <p className={styles.btnText}>Send photo</p>
        </button>

        <div>
          {isPickerOverlayVisible && (
            <PickerOverlay
              apikey="AbdjiOOBuSECXjQRpcVtez"
              onSuccess={(result) => {
                setImageUrl(result.filesUploaded[0].url);
                setIsPickerOverlayVisible(false);
              }}
            />
          )}
        </div>
      </div>
    );
  } else if (type === "call") {
    return (
      <div>
        <button className={styles.button}>
          <img src={callIcon} alt="submit photo icon" />
          <p className={styles.btnText}>Call teacher</p>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Something went wrong</h3>
      </div>
    );
  }
}
