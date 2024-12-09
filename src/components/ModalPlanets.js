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
  bgcolor: "#1a1a1a",
  color: "#00eaff",
  border: "2px solid #00eaff",
  borderRadius: "8px",
  boxShadow: "0px 0px 15px 5px rgba(0, 234, 255, 0.6)",
  p: 4,
  textAlign: "center",
  fontFamily: "'Orbitron', sans-serif",
};

const ModalPlanets = ({ isOpen, onClose, data }) => {
  if (!data) return null;
  // console.log("DATA =>>>", data);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="planet-modal-title"
      aria-describedby="planet-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="planet-modal-description"
          variant="h5"
          sx={{ color: "#ff6b6b", mb: 2 }}
        >
          <strong>{data.name.toUpperCase()}</strong>
          <br />
        </Typography>
        <Typography>
          <strong style={{ color: "#00eaff" }}>Rotation Period:</strong>{" "}
          {data.rotation_period} Hours
          <br />
          <strong style={{ color: "#00eaff" }}>Orbital Period:</strong>{" "}
          {data.orbital_period} Days
          <br />
          <strong style={{ color: "#00eaff" }}>Diameter:</strong>{" "}
          {data.diameter} km
          <br />
          <strong style={{ color: "#00eaff" }}>Climate:</strong> {data.climate}
          <br />
          <strong style={{ color: "#00eaff" }}>Gravity:</strong> {data.gravity}
          <br />
          <strong style={{ color: "#00eaff" }}>Terrain:</strong> {data.terrain}
          <br />
          <strong style={{ color: "#00eaff" }}>Population:</strong>{" "}
          {data.population} inhabitants
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalPlanets;
