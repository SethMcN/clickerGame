import React from 'react'
import { useState } from 'react';

export default function Upgrades(props) {
    const handleUpgrade = props.handleUpgrade;
    const BurgerFlippersData = props.Upgradelist[0];
    const Restaurants = props.Upgradelist[1];
 
    const [BurgerFlippersCountInternal, setBurgerFlippersCountInternal] = useState(BurgerFlippersData[0]);
    const [BurgerFlippersCostInternal, setBurgerFlippersCostInternal] = useState(BurgerFlippersData[1]);

    const [RestaurantsCountInternal, setRestaurantsCountInternal] = useState(Restaurants[0]);
    const [RestaurantsCostInternal, setRestaurantsCostInternal] = useState(Restaurants[1]);

    const internalBurgerFlippersData = () => {
      setBurgerFlippersCountInternal(BurgerFlippersCountInternal + 1);
      setBurgerFlippersCostInternal(math.round(BurgerFlippersCostInternal + (BurgerFlippersCostInternal*0.1)));
    };

    const internalRestaurantsData = () => {
      setRestaurantsCountInternal(RestaurantsCountInternal + 1);
      setRestaurantsCostInternal(math.round(RestaurantsCostInternal + (RestaurantsCostInternal*0.1)));
    };

    function handleClick(upgradeClass, count, cost) {
      let valid = false;
      valid = handleUpgrade(upgradeClass, count, cost);

      if (upgradeClass === 'burger-flipper' && valid === true) {
        internalBurgerFlippersData();
      } else if (upgradeClass === 'Restaurants' && valid === true) {
        internalRestaurantsData();
      }
    }

  return (
    <div className="UpgradeContainer">
      <div id='BurgerFlippers'>
        <h1>Burger Flippers</h1>
        <button onClick={() => handleClick('burger-flipper',BurgerFlippersData[0],BurgerFlippersCostInternal)}>Buy</button>
        <p className='CountText'>count = {BurgerFlippersCountInternal}</p>
        <p className='CostText'>cost = {BurgerFlippersCostInternal} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

      <div id='Restaurants'>
        <h1>Restaurants</h1>
        <button onClick={() => handleClick("Restaurants",Restaurants[0],Restaurants[1])}>Buy</button>
        <p className='CountText'>count = {Restaurants[0]}</p>
        <p className='CostText'>cost = {Restaurants[1]} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

      <div id='Burger Company'>
        <h1>Burger Company</h1>
        <button onClick={() => handleClick("Burger-Company",Restaurants[0],Restaurants[1])}>Buy</button>
        <p className='CountText'>count = {Restaurants[0]}</p>
        <p className='CostText'>cost = {Restaurants[1]} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

    </div>
  )
}