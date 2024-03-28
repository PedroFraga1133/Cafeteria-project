import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"




export default function Drinks() {
    const data = [
        {
            id: 1,
            snack: 'drink',
            name: 'Coca-Cola 2L',
            description: 'The family-sized handmade stuffed with three succulent meats, cheese and bacon.',
            price: 12,
            image:'https://i.imgur.com/Lg3aKhf.jpg',
        },

        {
            id: 2,
            snack: 'drink',
            name: 'Guaraná Antarctica',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 6.5,
            image:'https://i.imgur.com/hOBrOIm.jpg',
        },

        {
            id: 3,
            snack: 'drink',
            name: 'Suco de Abacaxi',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 8,
            image:'https://i.imgur.com/VV9qTMh.jpg',
        },
    ]

    return (
        <> 
        <Head title="Drinks" />
        <SnackTitle>Drinks</SnackTitle>
        <Snacks snacks={data}></Snacks>
        </>   
        )
}