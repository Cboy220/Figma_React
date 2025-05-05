import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { setDefaultOptions } from "date-fns";
import { SuccessBtn, Tick } from "../../assets";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components";
import { Link } from "react-router";
import Button from "../shared-modules/component-helpers/button/Button";
import InputBox from "../shared-modules/component-helpers/inputBox/InputBox";
import { createClientUser } from "../core/http/apiService"; // Import the createClientUser API function

setDefaultOptions({
  locale: {
    ...es,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1,
    },
    formatLong: {
      ...es.formatLong,
      day: (date) => es.formatLong.day(date).toUpperCase(),
    },
  },
});

registerLocale("es", es);

const SignUp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [Success, setSuccess] = useState(false);
  const [nameInput, setNameInput] = useState(""); // State for name input
  const [phoneInput, setPhoneInput] = useState(""); // State for phone input

  const handleSuccessClick = async () => {
    try {
      const data = {
        name: nameInput, // Replace with the actual state or variable for name input
        phone: phoneInput, // Replace with the actual state or variable for phone input
        birthdate: startDate.toISOString().split("T")[0], // Format the date as YYYY-MM-DD
      };

      const response = await createClientUser(data); // Call the createClientUser API
      console.log("User created successfully:", response);
      if(response.status == 201){
        setSuccess(true);
      }else{
        alert(response.message);
      }
       // Set success state to true
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      {!Success ? (
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "clamp(300px, 70%, 500px)", // Responsive width
              height: "auto", // Adjust height based on content
              top: "40%", // Centered vertically
              left: "50%", // Centered horizontally
              transform: "translate(-50%, -50%)", // Adjust for centering
              backgroundColor: "white",
              borderRadius: "26px",
              zIndex: 40, // Ensure it is above the pig image
              padding: "20px", // Add padding inside the box
              boxSizing: "border-box", // Ensure padding doesn't affect width
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "clamp(300px, 90%, 600px)",
                // height: "clamp(200px, 50%, 200px)",
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  font: "Poetsen One",
                  color: "#234290",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ¡Regístrate y comienza a ganar!
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                }}
              >
                Únete a nuestra comunidad y participa en juegos, sorteos y
                dinámicas con premios que te encantarán.
              </div>

              <div style={{ color: "#234290", fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
                Tu cuenta te permitirá:
              </div>

              <div>
                <div>
                  <img
                    src={Tick}
                    style={{ with: "20px", height: "20px", marginRight: "10px" }}
                  />
                  Jugar y acumular puntos
                </div>
                <div>
                  <img
                    src={Tick}
                    style={{ with: "20px", height: "20px", marginRight: "10px" }}
                  />
                  Validar tus códigos promocionales
                </div>
                <div>
                  <img
                    src={Tick}
                    style={{ with: "20px", height: "20px", marginRight: "10px" }}
                  />
                  Saber antes que nadie qué juegos vienen próximamente
                </div>
              </div>

              <InputBox
                label="Nombre"
                placeholder="Ingresa tu nombre"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />

              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#234290",
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  }}
                >
                  Fecha de nacimiento
                </div>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="custom-datepicker"
                  calendarClassName="custom-calendar"
                  locale="es"
                  dayClassName={() => "uppercase-weekday"} // Apply a custom class to week day names
                />
              </div>

              <InputBox
                label="Celular"
                placeholder="Ingresa tu número"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
              />

              <div>
                <Button label="Registrarme" onClick={handleSuccessClick} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "clamp(300px, 90%, 600px)",
            height: "auto",
            // backgroundColor: "#F8FFF8",
            borderRadius: "16px",
            padding: "20px",
            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            position: "absolute", // Center the div
            top: "40%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust for centering
          }}
        >
          <img style={{ width: "60%", height: "auto" }} src={SuccessBtn} />
          <Link
            to="/"
            style={{
              position: "absolute",
              bottom: "12%",
              backgroundColor: "#C5A480",
              color: "white",
              padding: "10px 20px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              fontWeight: "bold",
              width: "30%",
              textDecoration: "none", // Remove underline
            }}
          >
            Iniciar sesión
          </Link>
        </div>
      )}

      <Footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f8f9fa",
          zIndex: 100,
        }}
      />
    </>
  );
};

export default SignUp;
