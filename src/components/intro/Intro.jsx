import React from 'react';
import '../intro/Intro.css';
import IMG from '../../assets/img2.jpg'

const Intro = () => {
  return (
    <div className='intro'>
       <div className="intro-content">
         <h2>Feed Your Hunger, Fuel Your Day.</h2>
         <p>Satisfy your cravings with our delicious dishes, crafted to make every meal memorable. Whether you're dining in or on the go, we've got the flavors you’ll love. Come hungry!</p>
       </div>
       <div className="dishes-slides">
            <img src={IMG} alt="dishes" />
       </div>
    </div>
  )
}

export default Intro
