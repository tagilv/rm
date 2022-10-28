import React, { useState, character } from "react";
import MyModal from "./MyModal";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function Character({ character }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            More Info
          </Button>
          <MyModal
            open={open}
            handleClose={handleClose}
            character={character}
          />
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                MODAL TEXT
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {character.name}
              </Typography>
              <button onClick={handleClose}>Close Modal</button>
            </Box>
          </Modal> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default Character;

// const [isOpen, setIsOpen] = useState(false);

// return (
//   <div>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={character.image}
//         alt={character.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div"></Typography>
//       </CardContent>
//       <CardActions>
//         <Button onClick={() => setIsOpen(true)} size="small">
//           Open Modal
//         </Button>
//         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//           Fancy Modal
//         </Modal>
//       </CardActions>
//     </Card>
//   </div>
// );
