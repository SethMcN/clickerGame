import React, { useState, useEffect } from "react";

import Upgrades from "./Upgrades";
export default function MainScreen() {
  const [CompanyName, setCompanyName] = useState("Burger Clicker");

  const [clicks, setClicks] = useState(100);
  const [clicksPerSec, setClicksPerSec] = useState(0);

  const [BurgerFlipperCount, setBurgerFlipperCount] = useState(0);
  const [BurgerFlipperCost, setBurgerFlipperCost] = useState(10);

  const [RestaurantCount, setRestaurantCount] = useState(0);
  const [RestaurantCost, setRestaurantCost] = useState(100);

  const [Upgradelist, setUpgradelist] = useState([
    [BurgerFlipperCount, BurgerFlipperCost],
    [RestaurantCount, RestaurantCost],
  ]);

  useEffect(() => {
    if (clicksPerSec > 0) {
      const interval = setInterval(() => {
        setClicks((prevClicks) => prevClicks + 1);
      }, 1000 / clicksPerSec);
      return () => clearInterval(interval);
    }
  }, [clicks, clicksPerSec]);

  function handleUpgrade(upgradeClass, count, cost) {
    let isUpgradeSuccessful;
    if (clicks >= cost) {
      if (upgradeClass === "burger-flipper") {
        console.log("burger-flipper upgraded");
        setBurgerFlipperCount((prevCount) => prevCount + 1);
        setClicksPerSec((prevClicksPerSec) => prevClicksPerSec + 0.1);
        setClicks((prevClicks) => prevClicks - cost);
      }

      if (upgradeClass === "Restaurants") {
        console.log("Restaurants upgraded");
        setRestaurantCount((prevCount) => prevCount + 1);
        setClicksPerSec((prevClicksPerSec) => prevClicksPerSec + 5);
        setClicks((prevClicks) => prevClicks - cost);
      }

      isUpgradeSuccessful = true;
    } else {
      console.log("not enough burgers");
      isUpgradeSuccessful = false;
    }

    setUpgradelist([
      [BurgerFlipperCount, BurgerFlipperCost],
      [RestaurantCount, RestaurantCost],
    ]);

    return isUpgradeSuccessful;
  }

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return (
    <div className="main-container">
      <div className="left">
        <div className="Company">
          <h1 className="CompanyName">{CompanyName}</h1>
          <i className="fa-solid fa-pen-to-square" id="EditName"></i>
        </div>
        <p className="click-counter">{clicks} Burgers</p>
        <p className="clicks-perSec">
          {clicksPerSec.toFixed(2)} Burgers per second
        </p>

        <div className="button-container">
          <img
            className="click-img"
            src="freshBurger.png"
            alt="burger"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
      </div>

      <div className="right">
        <Upgrades handleUpgrade={handleUpgrade} Upgradelist={Upgradelist} />
      </div>
    </div>
  );
}
