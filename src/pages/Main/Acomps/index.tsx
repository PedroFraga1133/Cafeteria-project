import { useState, useEffect, useContext } from "react"


import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

import { SnackContext } from "../../../App"



export default function Acomps() {
    
    const { acomps } = useContext(SnackContext)


    
    return (
        <> 
        <Head title="Acomps" />
        <SnackTitle>Acomps</SnackTitle>
        <Snacks snacks={acomps}></Snacks>
        </>   
        )
}