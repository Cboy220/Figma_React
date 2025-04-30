import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../src/index.css'; // Ensure custom-datepicker styles are included

const InputBox = ({ label, placeholder, type = 'text', className = 'custom-datepicker', ...props }) => {
  return (
    <div>
      <div style={{ fontWeight: 'bold', color: '#234290', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '10px' }}>
        {label}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default InputBox;