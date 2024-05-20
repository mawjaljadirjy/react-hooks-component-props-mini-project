import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // Determine the appropriate emoji for 'minutes to read'
    const getMinutesToRead = (minutes) => {
      const coffeeCups = Math.ceil(minutes / 5);
      const bentoBoxes = Math.ceil(minutes / 10);
      if (minutes < 30) {
        return "☕️".repeat(coffeeCups);
      } else {
        return "🍱".repeat(bentoBoxes);
      }
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date} • {getMinutesToRead(minutes)} {minutes} min read</small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;