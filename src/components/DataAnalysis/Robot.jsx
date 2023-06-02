import React, { useState } from "react";

const RobotDialog = () => {
  const [dialog, setDialog] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput !== "") {
      setDialog((prevDialog) => [
        ...prevDialog,
        { sender: "User", message: userInput },
      ]);
      setUserInput("");
      // Simulate response from Robot 1
      setTimeout(() => {
        setDialog((prevDialog) => [
          ...prevDialog,
          { sender: "Robot 1", message: "Hello, I'm Robot 1." },
        ]);
      }, 500);
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog-box">
        {dialog.map((message, index) => (
          <div key={index} className="message">
            <span className="sender">{message.sender}:</span>
            <span className="text">{message.message}</span>
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Enter your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default RobotDialog;
