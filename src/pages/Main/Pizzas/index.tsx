import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"



export default function Pizzas() {
    const data = [
        {
            id: 1,
            snack: 'pizza',
            name: 'Calabresa',
            description: 'The family-sized handmade stuffed with three succulent meats, cheese and bacon.',
            price: 25,
            image:'https://i.imgur.com/5rjJGkV.jpg',
        },

        {
            id: 2,
            snack: 'pizza',
            name: 'Portuguesa',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 28.5,
            image:'https://i.imgur.com/WCoyGoI.jpg',
        },

    ]
    
    return (
        <> 
        <Head title="Pizzas" />
        <SnackTitle>Pizzas</SnackTitle>
        <Snacks snacks={data}></Snacks>
        </>   
        )
}