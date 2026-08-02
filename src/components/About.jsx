import React from "react";
import Links from "./Links";

/*
 * About displays the user's bio and a photo, and renders
 * the Links component with the user's social/portfolio links.
 * @param {string} bio - short biography text
 * @param {object} links - object containing github and linkedin URLs
 */

function About({bio,links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
 <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;