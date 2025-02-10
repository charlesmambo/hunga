import React from 'react';
import '../LoginMenu/LoginMenu.css';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import { IoIosSearch } from "react-icons/io";
import MenuCategory from '../menuCategory/MenuCategory';
import { PiBowlFood } from "react-icons/pi";
import { PiHamburger } from "react-icons/pi";
import { GrToast } from "react-icons/gr";
import { LuSalad } from "react-icons/lu";
import { LuVegan } from "react-icons/lu";
import { BsEggFried } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import { TbMilkshake } from "react-icons/tb";
import { RiDrinks2Line } from "react-icons/ri";
import { PiWineDuotone } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { TbCheese } from "react-icons/tb";


const LoginMenu = () => {
  return (
    <div className='login-menu'>
        <div className="login-menu-header">
            <div className="login-menu-header-content">
                 <h2>Menu</h2>
                 <p>Category</p>
            </div>
            <div className="search-input">
                 <IoIosSearch className='search-icon'/>
                <input type="search" name="search" placeholder='Search Your Menu Here'/>
                <PrimaryBtn text="Search"  className="search-dish" />
            </div>
        </div>
        <div className="menu-category">
            <MenuCategory icon={PiBowlFood} label="Breakfast" />
            <MenuCategory icon={PiHamburger} label="Burgers" />
            <MenuCategory icon={GrToast} label="Toasties" />
            <MenuCategory icon={LuSalad} label="Salads" />
            <MenuCategory icon={PiBowlFood} label="Bagels" />
            <MenuCategory icon={LuVegan} label="Vegan" />
            <MenuCategory icon={BsEggFried} label="Light Meals" />
            <MenuCategory icon={CiCoffeeCup} label="Coffee" />
            <MenuCategory icon={PiCoffee} label="Teas" />
            <MenuCategory icon={TbMilkshake} label="Milkshakes" />
            <MenuCategory icon={TbMilkshake} label="Smoothies" />
            <MenuCategory icon={RiDrinks2Line} label="Soft Drinks" />
            <MenuCategory icon={PiWineDuotone} label="Wine" />
            <MenuCategory icon={LiaCocktailSolid} label="Cocktails" boxClassName="cocktail-category"  />
            <MenuCategory icon={TbCheese} label="Little Bits" boxClassName="cocktail-category"  />
        </div>
    </div>
  )
}

export default LoginMenu