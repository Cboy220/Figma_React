import React from 'react'
import {FooterImg} from '../../assets'

const Footer = () => {
  return (
     <section
            style={{
              position: "fixed",
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Full viewport width
              height: "22vh", // Full viewport height
              overflow: "hidden",
              zIndex: 100, // Ensure the footer is above other elements
              // backgroundImage: `url(${FooterImg})`,
              backgroundSize: "cover", // Ensures the background image covers the section
              backgroundPosition: "center", // Centers the background image
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              
            }}
          >
            <img src={FooterImg} alt="Footer" style={{ width: "100%", height: "100%" }} />
            </section>
  )
}

export default Footer
