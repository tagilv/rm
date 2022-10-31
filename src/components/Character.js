import React, { useState, character } from "react";
import MyModal from "./MyModal";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import style from "./style/style.css";

function Character({ character }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
          />
        </div>
        <div class="flip-card-back">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
          </CardContent>
          <CardActions>
            {character.name}
            <br />
            <Button onClick={handleOpen} size="small">
              Learn More
            </Button>
            <MyModal
              open={open}
              handleClose={handleClose}
              character={character}
            />
          </CardActions>
          {open && <p>hello</p>}
        </div>
      </div>
    </div>
  );
}

export default Character;

// Look at the below!

// {
//   <Card sx={{ maxWidth: 320 }}>
//     <CardMedia component="img" image={character.image} alt={character.name} />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div"></Typography>
//     </CardContent>
//     <CardActions>
//       <Button onClick={handleOpen} size="small">
//         More Info
//       </Button>
//       <MyModal open={open} handleClose={handleClose} character={character} />
//     </CardActions>
//   </Card>;
// }

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
