import { useState, useEffect, useContext } from "react"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"




import { SnackContext } from "../../../App"

export default function Drinks() {
    
 
    const { drinks } = useContext(SnackContext)

    return (
        <> 
        <Head title="Drinks" />
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={drinks}></Snacks>
        </>   
        )
}