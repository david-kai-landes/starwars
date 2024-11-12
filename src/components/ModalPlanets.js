import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const ModalPlanets = ({ isOpen, onClose, data }) => {
  if (!data) return null;
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="planet-modal-title"
      aria-describedby="planet-modal-description"
    >
      <Box sx={style}>
        <Typography id="planet-modal-description" sx={{ mt: 2 }}>
          <strong>Rotation Period:</strong> {data.rotation_period}
          <br />
          <strong>Orbital Period:</strong> {data.orbital_period}
          <br />
          <strong>Diameter:</strong> {data.diameter} km
          <br />
          <strong>Climate:</strong> {data.climate}
          <br />
          <strong>Gravity:</strong> {data.gravity}
          <br />
          <strong>Terrain:</strong> {data.terrain}
          <br />
          <strong>Population:</strong> {data.population}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalPlanets;
