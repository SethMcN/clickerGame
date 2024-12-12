import React from 'react'
import { useState } from 'react';


export default function Upgrades(props) {
    const handleUpgrade = props.handleUpgrade;
    const BurgerFlippersData = props.Upgradelist[0];
    const PattyCookerData = props.Upgradelist[1];
 
    const [BurgerFlippersCountInternal, setBurgerFlippersCountInternal] = useState(BurgerFlippersData[0]);
    const [BurgerFlippersCostInternal, setBurgerFlippersCostInternal] = useState(BurgerFlippersData[1]);

    const [PattyCookerCountInternal, setPattyCookerCountInternal] = useState(PattyCookerData[0]);
    const [PattyCookerCostInternal, setPattyCookerCostInternal] = useState(PattyCookerData[1]);

    const internalBurgerFlippersData = () => {
      setBurgerFlippersCountInternal(BurgerFlippersCountInternal + 1);
      setBurgerFlippersCostInternal(math.round(BurgerFlippersCostInternal + (BurgerFlippersCostInternal*0.15)));

    };

    const internalPattyCookersData = () => {
      setPattyCookerCountInternal(PattyCookerCountInternal + 1);
      setPattyCookerCostInternal(math.round(PattyCookerCostInternal + (PattyCookerCostInternal*0.15)));
    };

    console.log(BurgerFlippersData[0],BurgerFlippersData[1]);

    function handleClick (upgradeClass, count, cost) {
      let valid = false;
      valid = handleUpgrade(upgradeClass,count, cost);

      if (upgradeClass === 'burger-flipper' && valid === true) {
        internalBurgerFlippersData();}


      if (upgradeClass === 'patty-cooker' && valid === true) {
        internalPattyCookersData();}
    }
  

  return (
    <div className="UpgradeContainer">
      <div id='BurgerFlippers'>
        <h1>Burger Flippers</h1>
        <button onClick={() => handleClick('burger-flipper',BurgerFlippersData[0],BurgerFlippersCostInternal)}>Buy</button>
        <p className='CountText'>count = {BurgerFlippersCountInternal}</p>
        <p className='CostText'>cost = {BurgerFlippersCostInternal} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

      <div id='PattyCookers'>
        <h1>Patty Cookers</h1>
        <button onClick={() => handleClick("patty-cooker",PattyCookerData[0],PattyCookerData[1])}>Buy</button>
        <p className='CountText'>count = {PattyCookerData[0]}</p>
        <p className='CostText'>cost = {PattyCookerData[1]} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

      <div id='PattyCookers'>
        <h1>Patty Cookers</h1>
        <button onClick={() => handleClick("patty-cooker",PattyCookerData[0],PattyCookerData[1])}>Buy</button>
        <p className='CountText'>count = {PattyCookerData[0]}</p>
        <p className='CostText'>cost = {PattyCookerData[1]} <img src="src/components/freshBurger.png" alt="" /> </p>
      </div>

    </div>
  )
}