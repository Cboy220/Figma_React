import React from 'react';

const Button = ({ label, onClick, style, ...props }) => {
  const defaultStyle = {
    backgroundColor: '#C5A480',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
    fontWeight: 'bold',
    ...style,
  };

  return (
    <button onClick={onClick} style={defaultStyle} {...props}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '0 50px' }}>
      {label}
      </div>
     
    </button>
  );
};

export default Button;
