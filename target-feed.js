/* Array of analyzed intelligence messages */
const dataLogs = [
  "Target engaged Suspect K at 14:00 on May 3rd, 2021.",
  "Satellite imagery from 08:15 confirms target presence at suspected militant compound.",
  "Communication metadata from device MAC 4A:9C links target to known hostile network.",
  "Financial transaction of $10,000 to flagged offshore account traced to target.",
  "Drone surveillance recorded target meeting with insurgent leaders on June 12th.",
  "Facial recognition match from CCTV footage at border crossing on October 4th.",
  "Vehicle registration matches truck used in previous munitions transport.",
  "Intercepted SMS transcript indicates target's involvement in weapons smuggling.",
  "Target observed transporting unidentified crates in contested Zone Alpha.",
  "Acoustic sensors detected small arms fire originating from target's last known location."
];

/* Get the DOM element for the feed */
const feedContainer = document.getElementById("intel-feed");
/* Keep track of the number of lines generated */
let lineCount = 0;

/* Set an interval to run every 100 milliseconds */
setInterval(() => {
  /* Create a new div element for the log line */
  const logLine = document.createElement("div");
  /* Pick a random historical data point from the array */
  const randomMsg = dataLogs[Math.floor(Math.random() * dataLogs.length)];
  /* Format text to reflect a historical file extract */
  logLine.innerText = `> FILE EXTRACT: ${randomMsg}`;
  /* Add the new line to the top of the feed */
  feedContainer.prepend(logLine);

  lineCount++;
  /* Keep the feed from growing infinitely by removing the oldest line */
  if (lineCount > 100) {
    feedContainer.lastElementChild.remove();
  }
}, 100);
