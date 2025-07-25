import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature: Minutes to read indicator
  const getMinutesToReadEmoji = (minutes) => {
    if (!minutes) return "";
    
    if (minutes < 30) {
      // Coffee cups for under 30 minutes (rounded up to nearest 5)
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      // Bento boxes for 30+ minutes (rounded up to nearest 10)
      const boxes = Math.ceil(minutes / 10);
      return "🍱".repeat(boxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {getMinutesToReadEmoji(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
