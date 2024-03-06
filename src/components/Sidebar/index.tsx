import { Container } from "./styles"

import {ReactComponent as BurgerIcon } from '../../assets/burger.svg'

import menuImg from '../../assets/menu.svg'
export function Sidebar() {
    return <Container>
        <button type="button">
            <img src={menuImg} alt="abrir e feixar menu" />
        </button>
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <BurgerIcon />
                        <span>Burger</span>
                    </a>
                </li>
            </ul>
        </nav>
        </ Container>
}