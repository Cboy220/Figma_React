import React, { useState } from "react";
import { Footer } from "../components";
import { Body, Logo, HappyPig, Exit } from "../../assets";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import InvalidPromo from "./Cards/InvalidPromo";
import Button from "../shared-modules/component-helpers/button/Button.jsx";
import StyledText from "../shared-modules/component-helpers/text/StyledText.jsx";
import InputBox from "../shared-modules/component-helpers/inputBox/InputBox";

const Promo = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [validPromo, setValidPromo] = useState(true); // State to manage the validity of the promo code
  const [promoCode, setPromoCode] = useState(""); // State to store the input value

  const HandleExit = () => {
    navigate("/"); // Navigate to the home page
  };

  const handlePlayground = () => {
    if (promoCode === "1234") {
      // Check if the promo code is valid
      navigate("/Playground"); // Navigate to the playground page
    } else {
      setValidPromo(false); // Set the promo code as invalid
    }
  };

  return (
    <>
      {validPromo ? (
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url(${Body})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Logo in the top-left corner */}
          <img
            src={Logo}
            alt="Logo"
            style={{
              position: "absolute",
              top: "30px", // Adjust spacing from the top
              left: "30px", // Adjust spacing from the left
              width: "7vw", // Responsive width
              height: "auto", // Maintain aspect ratio
              zIndex: 50, // Ensure it is above other elements
            }}
          />
          <button
            onClick={HandleExit}
            style={{
              position: "absolute",
              top: "30px", // Adjust spacing from the top
              right: "30px", // Adjust spacing from the left
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 50, // Ensure it is above other elements
            }}
          >
            <img
              src={Exit}
              alt="Logo"
              style={{
                position: "absolute",
                top: "clamp(5px, 1vw, 30px)", // Adjust spacing from the top
                right: "30px", // Adjust spacing from the left
                width: "clamp(10px, 5vw, 35px)", // Responsive width", // Responsive width
                height: "auto", // Maintain aspect ratio
                zIndex: 50, // Ensure it is above other elements
              }}
            />
          </button>

          <div
            style={{
              position: "relative",
              zIndex: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Text behind the pig image */}

            {/* Pig image */}
            <span
              style={{
                position: "absolute", // Absolute positioning to control stacking
                bottom: "15%", // Positioned above the white box
                left: "68%", // Centered horizontally
                transform: "translateX(-50%)", // Center alignment
                zIndex: 50, // Higher zIndex to place it above the white box
              }}
            >
              <img
                src={HappyPig}
                alt="Pig"
                style={{
                  width: "20vw", // Responsive width
                  height: "auto", // Maintain aspect ratio
                }}
              />
            </span>

            {/* Responsive white box */}
            <div
              style={{
                position: "fixed", // Changed to fixed to maintain the same position
                width: "clamp(300px, 70%, 750px)", // Responsive width
                height: "clamp(300px, 70%, 300px)", // Adjust height based on content
                top: "42%", // Centered vertically
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
                  display: "flex", // Use flexbox
                  flexDirection: "column", // Stack items vertically
                  alignItems: "left", // Center items horizontally
                  gap: "20px",
                  // width: "40%",
                  marginTop: "20px",
                  marginRight: "clamp(10px, 10vw, 200px)", // Adjust spacing from the top
                  // Add space between child elements
                }}
              >
                <div style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <StyledText color="#8A181A" fontSize="clamp(20px, 5vw, 30px)"  fontWeight="700">
                  Ingresa tu código promocional y... ¡a jugar!
                </StyledText>
                </div>
               
               <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                <div>
                <InputBox
                  label="Código"
                  placeholder="Ingresa tu código"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                </div>
                <div>
                <Button label="Jugar" onClick={handlePlayground} />
                </div>
                </div>
               </div>
               

               
            </div>
          </div>
        </section>
      ) : (
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url(${Body})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <InvalidPromo />
        </section>
      )}
      <Footer />
    </>
  );
};

export default Promo;
