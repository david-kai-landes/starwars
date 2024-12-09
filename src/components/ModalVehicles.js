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
  color: "#FF4500",
  border: "2px solid #FF4500",
  borderRadius: "8px",
  boxShadow: "0 0 15px rgba(255, 69, 0, 0.5)",
  p: 4,
  textAlign: "center",
  fontFamily: "'Orbitron', sans-serif",
};

const ModalVehicles = ({ isOpen, onClose, data }) => {
  if (!data) return null;
  console.log("DATA ===>> ", data);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="vehicle-modal-title"
      aria-describedby="vehicle-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="vehicle-modal-description"
          variant="h5"
          sx={{ color: "#ff6b6b", mb: 2 }}
        >
          <strong>{data.name}</strong>
          <br />
        </Typography>
        <Typography>
          <strong style={{ color: "#ffff" }}>Model:</strong> {data.model}
          <br />
          <strong style={{ color: "#ffff" }}>Cargo Capacity:</strong>{" "}
          {data.cargo_capacity}
          <br />
          <strong style={{ color: "#ffff" }}>Consumables:</strong>{" "}
          {data.consumables}
          <br />
          <strong style={{ color: "#ffff" }}>Price:</strong>{" "}
          {data.cost_in_credits}
          <br />
          <strong style={{ color: "#ffff" }}>Length:</strong> {data.length}
          <br />
          <strong style={{ color: "#ffff" }}>Manufacture:</strong>{" "}
          {data.manufacturer}
          <br />
          <strong style={{ color: "#ffff" }}>
            Max Atmosphering Speed:
          </strong>{" "}
          {data.max_atmosphering_speed}
          <br />
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalVehicles;
