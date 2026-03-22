import { updateTimestampDisplay } from "./utils.js";

const messageBox = document.querySelector("#messageComposer");
const timestampElement = document.querySelector("#lastUpdated");

let saveTimeout;

messageBox.addEventListener("input", function () {
  const message = messageBox.value;

  // Clear previous timeout
  clearTimeout(saveTimeout);

  saveTimeout = setTimeout(() => {
    if (message.trim()) {
      // Message is not empty → save draft
      const draftData = {
        message: message,
        timestamp: new Date().toISOString(),
      };

      sessionStorage.setItem("messageDraft", JSON.stringify(draftData));

      updateTimestampDisplay(draftData.timestamp, timestampElement, "draft");
    } else {
      // Message is empty → remove draft
      sessionStorage.removeItem("messageDraft");
      timestampElement.innerText = "";
    }
  }, 2000);
});

// Load draft on page load
window.addEventListener("load", function () {
  const savedDraft = sessionStorage.getItem("messageDraft");

  if (savedDraft) {
    const draftData = JSON.parse(savedDraft);
    messageBox.value = draftData.message;
    updateTimestampDisplay(draftData.timestamp, timestampElement, "draft");
  }
});