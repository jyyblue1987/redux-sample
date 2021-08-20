import React from "react";

function NotFound({ path }) {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>Page1 ({path}) Can not be found.</p>
      <img
        alt="404"
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
      />
    </>
  );
}

export default NotFound;