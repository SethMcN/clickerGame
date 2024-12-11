import React from 'react'

export default function FallingBurgersBackground() {
    const burgerStyle = {
        position: "absolute",
        top: Math.random() * 100,
        left: xCoord,
        height: "fit-content",
        width: "fit-content",
        border: "none",
        backgroundImage: zombie1,
      };
    



  return (
    <div>
      <img src="src\assets\freshBurger.png" alt="" />
    </div>
  )
}
