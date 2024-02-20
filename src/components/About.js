import React from 'react';

function About({ imageUrl, aboutText }) {
  return (
    <aside>
      <img src={imageUrl || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
