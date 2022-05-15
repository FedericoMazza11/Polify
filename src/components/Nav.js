import React, {useState} from 'react'
import {ReactComponent as Homeicon} from '../svgs/home.svg'
import {ReactComponent as Searchicon} from '../svgs/search.svg'
import {ReactComponent as Libraryicon} from '../svgs/library.svg'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
	return (
      <div className="navbar"> 
       <div className="logo"> <img src='./polifyLogo.png' alt='./polifyLogo.png'/> </div>
        <ul>
        <NavLink exact to="/" >
          <li> <Homeicon/> Inicio </li>
        </NavLink>
        <NavLink to="/Buscar">
          <li> <Searchicon/> Buscar </li>
        </NavLink>
        <NavLink to="/Biblioteca">
          <li> <Libraryicon/> Tu biblioteca </li>
        </NavLink>
        </ul>


     </div>
	)
};

export default Nav