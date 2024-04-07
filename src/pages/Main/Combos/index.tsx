import { useState, useEffect, useContext } from "react"


import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"


import { SnackContext } from "../../../App"


export default function Combos() {
    
    const { combos } = useContext(SnackContext)


   
    return (
    <> 
    <Head title="Combos" />
    <SnackTitle>Combos</SnackTitle>
    <Snacks snacks={combos}></Snacks>
    </>   
    )
}