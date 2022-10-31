import React from "react";
import { Box } from "@mui/system";
import { Modal, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import style from "./style/style.css";

function MyModal({ handleClose, open, character }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {character.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Species: {character.species}
          <br />
          Gender: {character.gender}
          <br />
          <Button onClick={handleClose} size="small">
            Close
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
}

export default MyModal;
