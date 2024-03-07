import { useState } from "react"

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
                    <a href="#" className="active">
                        <BurgerIcon />
                        <span>Burger</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <PizzaIcon />
                        <span>Pizza</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SodaPopIcon />
                        <span>Drinks</span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <IceCreamIcon />
                        <span>Desserts</span>
                    </a>
                </li>
            </ul>
        </nav>
        </ Container>
}