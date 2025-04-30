import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Calender } from "../../../assets";
import Button from "../../shared-modules/component-helpers/button/Button";
import StyledText from "../../shared-modules/component-helpers/text/StyledText";

const InvalidPromo = () => {
  const navigate = useNavigate(); // Assuming you're using react-router-dom for navigation
  const Exit = () => {
    // Handle the exit logic here
    console.log("Exit button clicked");
    navigate("/");

    // You can add any additional logic you need when the button is clicked
  };
  return (
    <div
      style={{
        position: "fixed", // Changed to fixed to maintain the same position
        width: "clamp(300px, 70%, 300px)", // Responsive width
        height: "clamp(450px, 75%, 400px)", // Adjust height based on content
        top: "40%", // Centered vertically
        left: "50%", // Centered horizontally
        transform: "translate(-50%, -50%)", // Adjust for centering
        backgroundColor: "white",
        borderRadius: "26px",
        zIndex: 40, // Lower zIndex to place it below the pig image
        padding: "10px 20px 20px 20px", // Add padding inside the box
        boxSizing: "border-box", // Ensure padding doesn't affect width
      }}
    >
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
          src={Calender}
          alt="Calender"
          style={{
            width: "clamp(100px, 70%, 20px)", // Responsive width
            height: "auto", // Maintain aspect ratio
            marginBottom: "20px",
          }}
        />

        <StyledText fontSize="clamp(1.2rem, 1.0vw, 2.5rem)">
          ¡Upsss! Este código ya no es válido.
        </StyledText>

        <div>
          Te invitamos a seguir comprando y estar pendiente de nuestras próximas
          promociones.
          <br />
          <br />
          👉 Si tienes otro código promocional válido, no dudes en ingresarlo
        </div>
        <div>
          <Button label="Salir" onClick={Exit} />
        </div>
      </div>
    </div>
  );
};
export default InvalidPromo;
