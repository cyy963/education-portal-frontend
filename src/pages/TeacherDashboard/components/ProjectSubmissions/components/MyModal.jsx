// Style import
import styles from "../ProjectSubmissions.module.css";

// imports from material UI
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 670,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MyModal({ projects, index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <div>
          <img
            src={projects[index].submission}
            alt="Project Image"
            className={styles.projectImg}
          />
          <p style={{ color: "#6c6c6c", fontSize: "0.7em" }}>Enlarge image</p>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              src={projects[index].submission}
              alt="Code screen shot"
              style={{ width: "600px" }}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
