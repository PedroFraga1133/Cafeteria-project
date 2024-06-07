import { useSnack } from "../../../hooks/useSnack"


import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"





export default function Combos() {
    
    const { combos } = useSnack()


   
    return (
    <> 
    <Head title="Combos" />
    <SnackTitle>Combos</SnackTitle>
    <Snacks snacks={combos}></Snacks>
    </>   
    )
}