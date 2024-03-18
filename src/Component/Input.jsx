import React, { useState } from 'react';


const AnimatedForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`form-container ${isFocused ? 'focused' : ''}`}>
      <label htmlFor="animatedInput">Your Label</label>
      <input
        type="text"
        id="animatedInput"
        onFocus={handleFocus}
        onBlur={handleBlur}
    
      />
    </div>
  );
};

export default AnimatedForm;
