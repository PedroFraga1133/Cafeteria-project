import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"





export default function Acomps() {
    
    const { acomps } = useSnack()

    
    return (
        <> 
        <Head title="Acomps" />
        <SnackTitle>Acomps</SnackTitle>
        <Snacks snacks={acomps}></Snacks>
        </>   
        )
}