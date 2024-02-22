import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  // Create a ref using the useRef hook
  const inputRef = useRef(null);

  // Function to focus on the input when the button is clicked
  const focusInput = () => {
    // Access the current property of the ref to get the DOM element
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Input with the ref attached */}
      <input ref={inputRef} type="text" />

      {/* Button that triggers the focusInput function */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
