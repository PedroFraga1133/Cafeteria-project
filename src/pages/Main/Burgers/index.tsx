import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"


export default function Burgers() {
    const data = [
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description: 'The family-sized handmade stuffed with three succulent meats, cheese and bacon.',
            price: 25.5,
            image:'https://i.imgur.com/upjIUnG.jpg',
        },

        {
            id: 2,
            snack: 'burger',
            name: 'Extra bacon',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 23.5,
            image:'https://i.imgur.com/B4J04AJ.jpg',
        },
    ]

    
   
    return (
    <> 
    <Head title="Burgers" />
    <SnackTitle>Burgers</SnackTitle>
    <Snacks snacks={data}></Snacks>
    </>   
    )
}