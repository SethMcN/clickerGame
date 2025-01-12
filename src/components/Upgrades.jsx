import React, { useState, useEffect } from "react";

export default function Upgrades(props) {
  const handleUpgrade = props.handleUpgrade;
  const BurgerFlippersData = props.Upgradelist[0];
  const Restaurants = props.Upgradelist[1];

  const [BurgerFlippersCountInternal, setBurgerFlippersCountInternal] =
    useState(BurgerFlippersData[0]);
  const [BurgerFlippersCostInternal, setBurgerFlippersCostInternal] = useState(
    BurgerFlippersData[1]
  );

  const [RestaurantsCountInternal, setRestaurantsCountInternal] = useState(
    Restaurants[0]
  );
  const [RestaurantsCostInternal, setRestaurantsCostInternal] = useState(
    Restaurants[1]
  );

  // Synchronize internal state with props
  useEffect(() => {
    setBurgerFlippersCountInternal(BurgerFlippersData[0]);
    setBurgerFlippersCostInternal(BurgerFlippersData[1]);
    setRestaurantsCountInternal(Restaurants[0]);
    setRestaurantsCostInternal(Restaurants[1]);
  }, [props.Upgradelist]);

  const internalBurgerFlippersData = () => {
    setBurgerFlippersCountInternal(BurgerFlippersCountInternal + 1);
    setBurgerFlippersCostInternal(
      Math.round(BurgerFlippersCostInternal + BurgerFlippersCostInternal * 0.1)
    );
  };

  const internalRestaurantsData = () => {
    setRestaurantsCountInternal(RestaurantsCountInternal + 1);
    setRestaurantsCostInternal(
      Math.round(RestaurantsCostInternal + RestaurantsCostInternal * 0.1)
    );
  };

  function handleClick(upgradeClass, count, cost) {
    if (handleUpgrade(upgradeClass, count, cost)) {
      if (upgradeClass === "burger-flipper") {
        internalBurgerFlippersData();
      } else if (upgradeClass === "Restaurants") {
        internalRestaurantsData();
      }
    }
  }

  return (
    <div className="UpgradeContainer">
      <div id="BurgerFlippers">
        <h1>Burger Flippers</h1>
        <button
          onClick={() =>
            handleClick(
              "burger-flipper",
              BurgerFlippersCountInternal,
              BurgerFlippersCostInternal
            )
          }
        >
          Buy
        </button>
        <p className="CountText">count = {BurgerFlippersCountInternal}</p>
        <p className="CostText">
          cost = {BurgerFlippersCostInternal}{" "}
          <img src="freshBurger.png" alt="" />{" "}
        </p>
      </div>

      <div id="Restaurants">
        <h1>Restaurants</h1>
        <button
          onClick={() =>
            handleClick(
              "Restaurants",
              RestaurantsCountInternal,
              RestaurantsCostInternal
            )
          }
        >
          Buy
        </button>
        <p className="CountText">count = {RestaurantsCountInternal}</p>
        <p className="CostText">
          cost = {RestaurantsCostInternal}{" "}
          <img src="BurgerCookersAmination.gif" alt="" />{" "}
        </p>
      </div>

      <div id="Burger Company">
        <h1>Burger Company</h1>
        <button
          onClick={() =>
            handleClick(
              "Burger-Company",
              RestaurantsCountInternal,
              RestaurantsCostInternal
            )
          }
        >
          Buy
        </button>
        <p className="CountText">count = {RestaurantsCountInternal}</p>
        <p className="CostText">
          cost = {RestaurantsCostInternal} <img src="freshBurger.png" alt="" />{" "}
        </p>
      </div>
    </div>
  );
}
