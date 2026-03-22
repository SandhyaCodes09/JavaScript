import { updateTimestampDisplay } from "./utils.js";

const messageBox = document.querySelector("#messageComposer");
const timestampElement = document.querySelector("#lastUpdated");

let saveTimeout;

messageBox.addEventListener("input", function () {
  const message = messageBox.value;

  // Clear previous timeout
  clearTimeout(saveTimeout);

  saveTimeout = setTimeout(() => {
    const messageData = {
      message: message,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage
    localStorage.setItem("messageData", JSON.stringify(messageData));

    // Update timestamp display
    updateTimestampDisplay(messageData.timestamp, timestampElement);
  }, 2000);
});

// Load saved message on page load
window.addEventListener("load", function () {
  const savedData = localStorage.getItem("messageData");

  if (savedData) {
    const messageData = JSON.parse(savedData);

    messageBox.value = messageData.message;

    updateTimestampDisplay(messageData.timestamp, timestampElement);
  }
});