// useEffect

import { useState, useEffect } from "react";

const Effect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener('resize', handleResize)
  }, [])

  return (

      <div>{windowWidth}</div>

  );
};

export default Effect;
