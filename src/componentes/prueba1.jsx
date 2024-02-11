import React from 'react';
import './prueba1.css';

export default function Data(){
    const data = {
        reviews: [
            {
                review: {
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating:5,
                    title: "Assassin's Creed Odyssey Deluxe",
                    description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                    date: "hace 22 horas"
                }
            },{
                review: {
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating:5,
                    title: "Assassin's Creed Odyssey Deluxe",
                    description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                    date: "Ayer"
                }
            },{
                review: {
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating:5,
                    title: "Assassin's Creed Odyssey Deluxe",
                    description:"Maravilla de juego!.",
                    date: "Ayer"
                }
            },{
                review: {
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating:5,
                    title: "Assetto Corsa Ultimate Edition",
                    description:"Como siempre!",
                    date: "Hace 2 dias"
                }
            },{
                review: {
                    avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                    rating:5,
                    title: "River city girls",
                    description:"Excelente calidad.",
                    date: "hace 3 dias"
                }
            },
        ]
    
    }

    return (
        <ul>
            {data.reviews.map((item, index) => 
            <div key={index} className={`container item-${index}`}>
                <img src={item.review.avatar} alt="imagen" />
                <p>rating:{item.review.rating}</p>
            <p>{item.review.title}</p>
            <p>{item.review.description}</p>
            <p>{item.review.date}</p>
            </div>
            
            
            )}
        </ul>
    )
}





// export default function Prueba(){
//     const List = [
//         {nombre: "Fabian"},
//         {nombre: "Juan"}
//     ]

//     return (
//         <ul>
//             {List.map(item => <li>{item.nombre}</li>)}
//         </ul>
//     )
// }


// export default function Prueba(){
//     const List = ["Juan", "Pablo", "Pedro"]

//     return (
//         <ul>
//             {List.map(item => <li>{item}</li>)}
//         </ul>
//     )
// }