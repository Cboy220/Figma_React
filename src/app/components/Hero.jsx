import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Body, Pig, Logo, Star, Dollar } from "../../assets";
import Footer from "./Footer";
import Button from "../shared-modules/component-helpers/button/Button";
import StyledText from "../shared-modules/component-helpers/text/StyledText";
import InputBox from "../shared-modules/component-helpers/inputBox/InputBox";
import { logIn } from "../core/http/apiService"; // Import logIn API function

const Hero = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // State for name input
  const [phone, setPhone] = useState(""); // State for phone input

  const handleLogin = async () => {
    try {
      const payload = {
        name,
        phone,
      };
     
      const response = await logIn(payload); // Call the logIn API
      console.log("Login successful:", response);

      // Store the token in local storage
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("idevent", JSON.stringify(response.user.user.idevent));
      localStorage.setItem("idclientuser", JSON.stringify(response.user.user.idclientuser));

      // localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/promo"); // Navigate to the promo page on success
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
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
            top: "30px",
            left: "30px",
            width: "7vw",
            height: "auto",
            zIndex: 50,
          }}
        />

        {/* Other decorative elements */}
        <img
          src={Star}
          alt="Star"
          style={{
            position: "absolute",
            top: "500px",
            left: "40px",
            width: "3vw",
            height: "auto",
            zIndex: 50,
          }}
        />
        <img
          src={Star}
          alt="Star"
          style={{
            position: "absolute",
            top: "600px",
            right: "255px",
            width: "3vw",
            height: "auto",
            zIndex: 50,
          }}
        />
        <img
          src={Dollar}
          alt="Dollar"
          style={{
            position: "absolute",
            top: "400px",
            right: "255px",
            width: "3vw",
            height: "auto",
            zIndex: 50,
          }}
        />
        <img
          src={Dollar}
          alt="Dollar"
          style={{
            position: "absolute",
            top: "760px",
            left: "255px",
            width: "3vw",
            height: "auto",
            zIndex: 50,
            transform: "rotate(140deg)",
          }}
        />

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
          <span
            style={{
              position: "absolute",
              top: "15%",
              zIndex: 20,
              fontSize: "clamp(1.5rem, 2vw, 3rem)",
              fontWeight: "bold",
              color: "rgba(255, 255, 255, 0.98)",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              left: "50%",
            }}
          >
            Juega, Juega, Juega, Juega, <br />
            ¡Gana, Gana, Gana, Gana!
          </span>

          {/* Pig image */}
          <div
            style={{
              position: "absolute",
              top: "clamp(0%, 2%, 10%)",
              zIndex: 30,
              width: "clamp(100px, 40%, 200px)",
              height: "auto",
            }}
          >
            <img
              src={Pig}
              alt="Pig"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Responsive white box */}
          <div
            style={{
              position: "absolute",
              width: "clamp(400px, 70%, 700px)",
              height: "clamp(400px, 70%, 300px)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              borderRadius: "26px",
              zIndex: 40,
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <StyledText>¡Bienvenido de nuevo!</StyledText>

              <div
                style={{
                  textAlign: "center",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                }}
              >
                Inicia sesión y participa por productos, combos y premios
                exclusivos.
              </div>

              <InputBox
                label="Nombre"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="Celular"
                placeholder="Ingresa tu número"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <div
                style={{
                  textAlign: "center",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                }}
              >
                ¿Aún no te has registrado?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: "#234290",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Hazlo aquí
                </Link>
              </div>

              <Button label="Ingresar" onClick={handleLogin} />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Hero;
