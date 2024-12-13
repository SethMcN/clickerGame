import React, { useState,useEffect } from 'react'

import Upgrades from './Upgrades';
export default function MainScreen() {
  
  const [CompanyName, setCompanyName] = useState('Burger Clicker');

  const [clicks, setClicks] = useState(100);
  const [clicksPerSec, setClicksPerSec] = useState(0);

  const [burgerFlippersCount, setBurgerFlippersCount] = useState(0);
  const [BurgerFlippersCost, setBurgerFlippersCost] = useState(10);

  const [RestaurantsCount, setRestaurantsCount] = useState(0);
  const [RestaurantsCost, setRestaurantsCost] = useState(100);

  const [Upgradelist, setUpgradelist] = useState([[burgerFlippersCount,BurgerFlippersCost], [RestaurantsCount,RestaurantsCost]]);


  useEffect(() => {
    if (clicksPerSec > 0) {
      const interval = setInterval(() => {
        setClicks(clicks + 1);
      }, 1000 / clicksPerSec);
      return () => clearInterval(interval);
    }
  }, [clicks, clicksPerSec]);



  function handleUpgrade(upgradeClass, count, cost) {
    console.log(count,cost)
    let returnBool;
    if (clicks >= cost) {

      if (upgradeClass === 'burger-flipper'){
        console.log('burger-flipper upgraded');
        setBurgerFlippersCount(count + 1);
        setClicksPerSec(clicksPerSec + 0.1);
        setClicks(clicks - cost);}
        
      if (upgradeClass === 'Restaurants'){
        console.log('Restaurants upgraded')
        setRestaurantsCount(count + 1);
        setClicksPerSec(clicksPerSec + 5);
        setClicks(clicks - cost);}
      
      returnBool = true;}

    else {
      console.log('not enough burgers')
      returnBool = false;
    }

    setUpgradelist([[burgerFlippersCount,BurgerFlippersCost], [RestaurantsCount,RestaurantsCost]]);

    return returnBool;

  }

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div className='main-container'>
      <div className='left'>
        <div className='Company'>
          <h1 className='CompanyName'>{CompanyName}</h1>
          <i className="fa-solid fa-pen-to-square" id='EditName'></i>
        </div>
        <p className='click-counter'>{clicks} Burgers</p>
        <p className='clicks-perSec'>{(clicksPerSec).toFixed(2)} Burgers per second</p>

        <div className='button-container'>
          <img className='click-img' src="/src/components/freshBurger.png" alt="burger" onClick={() => { handleClick();}}/>
        </div>
      </div>
        

      <div className='right'> 
        <Upgrades handleUpgrade={handleUpgrade} Upgradelist={Upgradelist}/>
      </div>

    </div>
  );
}