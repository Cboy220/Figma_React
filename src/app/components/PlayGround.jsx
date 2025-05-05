import React, { useState } from "react";
import { Footer } from "../components";
import {
  Body,
  Logo,
  Profile,
  ProfileStar,
  Trophy,
  Watch,
  BlueExit,
  Refresh,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { Confirm } from "./Cards";
import Button from "../shared-modules/component-helpers/button/Button.jsx";
import StyledText from "../shared-modules/component-helpers/text/StyledText.jsx";
import { startGame } from "../core/http/apiService"; // Import the startGame API function

const PlayGround = () => {
  const [confirmed, setConfirmed] = useState(false); // State to manage the confirmation status
  const [exit, setExit] = useState(false); // State to manage the exit status
  const [timerRunning, setTimerRunning] = useState(false); // State to manage timer running status

  const navigate = useNavigate();

  // const handleConfirm = () => {
  //   // Handle the confirm button click here
  //   console.log("Confirm button clicked!");
  //   // You can add your logic here, such as navigating to another page or showing a message
  // };

  // const handleSuccessClick = () => {
  //   // Handle the success button click here
  //   console.log("Success button clicked!");
  //   setConfirmed(true); // Set the confirmed state to true
  //   // You can add your logic here, such as navigating to another page or showing a message
  // };

  const handleCancel = () => {
    setConfirmed(false); // Reset the confirmed state to false
  };

  const handleStartCancelClick = async () => {
    if (timerRunning) {
      setConfirmed(true); // Show Confirm component
    } else {
      try {
        setTimerRunning(true); // Start the timer
        const idevent = localStorage.getItem("idevent");
        const response = await startGame(idevent); // Call the startGame API
        localStorage.setItem("score", response.data.clientInfo.score);
        console.log("Game started successfully:", response);
        
      } catch (error) {
        console.error("Error starting the game:", error);
      }
    }
  };

  const HandleExit = () => {
    // Initialize useNavigate hook
    navigate("/"); // Navigate to the home page
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            position: "absolute",
            top: "10px", // Adjust spacing from the top
            left: "30px", // Adjust spacing from the left
            width: "5vw", // Responsive width
            height: "auto", // Maintain aspect ratio
            zIndex: 50, // Ensure it is above other elements
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "60px", height: "60px" }}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              src={Profile}
            />
          </div>

          <StyledText fontSize="clamp(1.5rem, 2.5vw, 2.0rem)">
            Carla Gutiérrez
          </StyledText>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              style={{ width: "45px", height: "45px" }}
              src={ProfileStar}
              alt="Profile Star"
            />
            <h1 style={{ color: "#234290" }}>0</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              style={{ width: "45px", height: "45px" }}
              src={Trophy}
              alt="Trophy"
            />
            <h1 style={{ color: "#234290" }}>0</h1>
          </div>
        </div>
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
            src={BlueExit}
            alt="Logo"
            style={{
              position: "absolute",
              top: "10px", // Adjust spacing from the top
              right: "30px", // Adjust spacing from the left
              width: "1.5vw", // Responsive width
              height: "auto", // Maintain aspect ratio
              zIndex: 50, // Ensure it is above other elements"
            }}
          />
        </button>
      </div>
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
        {confirmed ? (
          <Confirm onCancel={handleCancel} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
               marginBottom: "clamp(60px, 8vw, 60px)", // Responsive margin
            
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  zIndex: "100",
                }}
                src={Watch}
              />
              <Timer timerRunning={timerRunning} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "5px",
              }}
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "powderblue",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={Refresh}
                    alt="Logo"
                    style={{
                      width: "5px",
                      height: "5px",
                      marginLeft: "50px",
                      marginBottom: "50px",
                      position: "absolute",
                    }}
                  />
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              ))}
            </div>
            <div>
              <Button 
                label={timerRunning ? "Cancelar" : "Comenzar"} 
                onClick={handleStartCancelClick} 
              />
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default PlayGround;
