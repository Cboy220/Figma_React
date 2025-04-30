import React from 'react';

const StyledText = ({ children, color = "#234290", fontSize = "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight = "bold", ...props }) => {
  const style = {
    font: "Poetsen One",
    color: color, // Dynamic color
    fontSize: fontSize, // Dynamic font size
    fontWeight: fontWeight, // Dynamic font weight
    textAlign: "center", // Center text
    ...props.style,
  };

  return <div style={style}>{children}</div>;
};

export default StyledText;