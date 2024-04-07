import { useState } from "react"
import { NavLink } from "react-router-dom"


import { Container } from "./styles"



import {ReactComponent as BurgerIcon } from '../../assets/burger1.svg'
import {ReactComponent as AcompsIcon } from '../../assets/fritas.svg'
import {ReactComponent as SodaPopIcon } from '../../assets/mike.svg'
import {ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import {ReactComponent as Combos} from '../../assets/combos.svg'


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
                    <NavLink to="acomps">
                        <AcompsIcon />
                        <span>Acomps</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="combos" >
                        <Combos />
                        <span>Combos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="drinks">
                        <SodaPopIcon />
                        <span>Bebidas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="ice-creams" >
                        <IceCreamIcon />
                        <span>Sobremesa</span>
                    </NavLink>
                </li>
                
            </ul>
        </nav>
        </ Container>
}