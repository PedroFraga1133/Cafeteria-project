import { useState } from "react"
import { NavLink } from "react-router-dom"


import { Container } from "./styles"



import {ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import {ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import {ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import {ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'
export function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleTeggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return <Container isMenuOpen={menuOpen}>
        <button type="button" onClick={handleTeggleMenu}>
            <img src={menuImg} alt="open and close menu" />
        </button>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <BurgerIcon />
                        <span>Burgers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="pizzas">
                        <PizzaIcon />
                        <span>Pizzas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="drinks">
                        <SodaPopIcon />
                        <span>Drinks</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="ice-creams" >
                        <IceCreamIcon />
                        <span>Desserts</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </ Container>
}