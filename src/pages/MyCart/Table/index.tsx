import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";

import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";
import { EmptyCart } from "../../../components/EmptyCart";


export function Table() {
    const { cart}  = useCart()
    const [windowWidth, setWindowWidth] = useState(document.documentElement.
    clientWidth)
    

    useEffect(() => {
        function updateTableComponentBasedInWindowWidth() {
            const currentWidth = document.documentElement.clientWidth
            setWindowWidth(currentWidth)
        }

        window.addEventListener('resize', updateTableComponentBasedInWindowWidth)
        
        return () => {
            window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
        }
    },[])

    if (cart.length === 0) return <EmptyCart title="Ops! Parece que você não tem pedidos, peça já!😞" />

        
        
    return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}