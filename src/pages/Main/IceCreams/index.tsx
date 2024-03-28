import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"


export default function IceCreams() {
    const data = [
        {
            id: 1,
            snack: 'ice-cream',
            name: 'Casquinha',
            description: 'The family-sized handmade stuffed with three succulent meats, cheese and bacon.',
            price: 4.5,
            image:'https://i.imgur.com/YGmeoCm.jpg',
        },

        {
            id: 2,
            snack: 'ice-cream',
            name: 'Sorvete de Chocolate',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 6,
            image:'https://i.imgur.com/osAHOLe.jpg',
        },

        {
            id: 3,
            snack: 'ice-cream',
            name: 'Sorvete de Flocos',
            description: 'Created for bacon lovers, it has very crispy bacon in all its layers, followed by the succulence of the cheese and meat.',
            price: 7,
            image:'https://i.imgur.com/qgnFLiy.jpg',
        },
    ]
    
    return (
        <> 
        <Head title="IceCreams"/>
        <SnackTitle>Desserts</SnackTitle>
        <Snacks snacks={data}></Snacks>
        </>   
        )
}