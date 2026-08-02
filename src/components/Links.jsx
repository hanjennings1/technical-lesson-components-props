import React from "react";


/*
 * Links renders clickable GitHub and LinkedIn URLs.
 * @param {string} github - URL to the user's GitHub profile
 * @param {string} linkedin - URL to the user's LinkedIn profile
 */

function Links({github,linkedin}) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;