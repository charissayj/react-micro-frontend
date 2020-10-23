import React from "react";

const Header = ({ children }) => {
  return (
    <div>
      {children}
      <p>Puppies like Micro Frontends</p>
      <img
        src="https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200"
        alt="puppy"
      />
    </div>
  );
};

export default Header;
