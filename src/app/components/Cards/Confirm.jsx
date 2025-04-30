import React, { useState } from "react";
import { Alert, TikGreen } from "../../../assets";
import { useNavigate } from "react-router-dom";
import StyledText from "../../shared-modules/component-helpers/text/StyledText";
import Button from "../../shared-modules/component-helpers/button/Button";
const Confirm = ({ onCancel }) => {
  const [confirmedExit, setConfirmedExit] = useState(false); // State to manage the confirmation status
  const [flipped, setFlipped] = useState(false); // State to manage card flip
  const navigate = useNavigate();

  const Exit = () => {
    setFlipped(true); // Trigger the card flip
    setTimeout(() => {
      setConfirmedExit(true); // Set the confirmed state to true after flip animation
    }, 600); // Delay to match flip animation duration
  };

  const ExitFromMain = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div>
      <div
        style={{
          position: "fixed", // Changed to fixed to maintain the same position
          width: "clamp(300px, 70%, 500px)", // Responsive width
          height: "clamp(400px, 70%, 400px)", // Adjust height based on content
          top: "clamp(40%, 70%, 47%)", // Centered vertically
          left: "50%", // Centered horizontally
          transform: "translate(-50%, -50%)", // Adjust for centering
          backgroundColor: "white",
          borderRadius: "26px",
          zIndex: 40, // Lower zIndex to place it below the pig image
          padding: "10px 20px 20px 20px", // Add padding inside the box
          boxSizing: "border-box", // Ensure padding doesn't affect width
          perspective: "1000px", // Enable 3D perspective for flip
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            transform: flipped ? "rotateY(180deg)" : "none", // Flip the card
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide back content when flipped
            }}
          >
            {/* Front content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "clamp(250px, 90%, 600px)",
                margin: "30px auto",
              }}
            >
              <img
                src={Alert}
                alt="Calender"
                style={{
                  width: "clamp(100px, 70%, 20px)", // Responsive width
                  height: "auto", // Maintain aspect ratio
                  marginBottom: "20px",
                }}
              />
              <StyledText
                color="#8A181A"
                fontSize="clamp(1.2rem, 1.5vw, 2.5rem)"
              >
                ¿Estás seguro de querer cancelar el juego?
              </StyledText>
              <div>
                Si lo haces, perderás la validez del código promocional y el
                puntaje que llevas acumulado.
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#C5A480",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border: "2px solid #C5A480",
                    cursor: "pointer",
                    fontSize: "clamp(0.5rem, 1.0vw, 1.2rem)", // Responsive font size
                    fontWeight: "bold",
                  }}
                  onClick={onCancel}
                >
                  No, volver a jugar
                </button>
                <button
                  style={{
                    backgroundColor: "#C5A480",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "clamp(0.5rem, 1.0vw, 1.2rem)", // Responsive font size
                    fontWeight: "bold",
                  }}
                  onClick={Exit}
                >
                  Sí, salir
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden", // Hide front content when flipped
              transform: "rotateY(180deg)", // Position for back content
            }}
          >
            {/* Back content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "clamp(250px, 90%, 600px)",
                margin: "30px auto",
              }}
            >
              <img
                src={TikGreen}
                alt="TikGreen"
                style={{
                  width: "clamp(100px, 70%, 20px)", // Responsive width
                  height: "auto", // Maintain aspect ratio
                  marginBottom: "20px",
                }}
              />
              <StyledText
                fontSize="clamp(1.2rem, 2.5vw, 1.5rem)"
                color="#5CBB8D"
              >
                ¡Juego cancelado!
              </StyledText>
              <div>
                Este juego ya ha finalizado y no podrás volver a jugar.
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Button label="Salir" onClick={ExitFromMain} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
