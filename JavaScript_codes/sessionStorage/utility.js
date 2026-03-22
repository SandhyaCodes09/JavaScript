export function updateTimestampDisplay(timestamp, element, mode = "saved") {
  // Convert the ISO timestamp string into a JavaScript Date object. An ISO timestamp is a string in the format "2024-01-15T10:30:00.000Z"
  const date = new Date(timestamp);

  // Format the date into a human-readable string using US locale settings
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric", // Display full year (e.g., "2024")
    month: "short", // Display abbreviated month name (e.g., "Jan", "Feb")
    day: "numeric", // Display day as number (e.g., "15")
    hour: "2-digit", // Display hour with leading zero if needed (e.g., "09", "10")
    minute: "2-digit", // Display minute with leading zero if needed (e.g., "05", "30")
  });

  // Update the DOM element's text content based on the mode
  if (mode === "draft") {
    // For session drafts, emphasize that this is temporary and session-specific
    element.innerText = `Draft auto-saved at ${formattedDate} (will be lost when session ends)`;
    element.className = "timestamp draft";
  } else {
    // Default behavior for permanent saves
    element.innerText = `Last saved on ${formattedDate}`;
    element.className = "timestamp";
  }
}
