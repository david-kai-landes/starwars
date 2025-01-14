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

const MadalStarShip = ({ isOpen, onClose, data }) => {
  if (!data) return null;
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="starShip-modal-title"
      aria-describedby="starShip-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="planet-modal-description"
          variant="h5"
          sx={{ color: "#ff6b6b", mb: 2 }}
        >
          <strong>{data.name}</strong>
          <br />
        </Typography>
        <Typography>
          <strong style={{ color: "#00eaff" }}>Cargo Capacity:</strong>{" "}
          {data.cargo_capacity}
          <br />
          <strong style={{ color: "#00eaff" }}>Consumables:</strong>{" "}
          {data.consumables}
          <br />
          <strong style={{ color: "#00eaff" }}>Price:</strong>{" "}
          {data.cost_in_credits}
          <br />
          <strong style={{ color: "#00eaff" }}>Length:</strong> {data.length}
          <br />
          <strong style={{ color: "#00eaff" }}>Manufacture:</strong>{" "}
          {data.manufacturer}
          <br />
          <strong style={{ color: "#00eaff" }}>
            Max Atmosphering Speed:
          </strong>{" "}
          {data.max_atmosphering_speed}
          <br />
        </Typography>
      </Box>
    </Modal>
  );
};

export default MadalStarShip;
