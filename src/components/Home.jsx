import React from "react";

/*
 * Home displays the user's name and city in a styled heading.
 * @param {string} name - the user's name
 * @param {string} city - the user's city
 * @param {string} color - text color for the heading
 */


function Home({color, name, city}) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;