import { v4 as uuidv4 } from 'uuid';

function sendData(){
    return[
        {
            name: "HEATHENS",
            artist: "21-pilot",
            cover:"https://images-eu.ssl-images-amazon.com/images/I/61QHnD41+OL._AC_US160_.jpg",
            id: uuidv4(),
            active:true,
            color:["#a9dbb0", "#aeabab"],
            audio:"https://databrainz.com/cache/477050e59989ae51610641da4f029cd5/b2233e5dc1082375fd8b/Twenty%20One%20Pilots/Heathens"
        },
        {
            name: "WHOOPTY",
            artist: "cj",
            cover:"https://m.media-amazon.com/images/I/71pponK--EL._AC_UY160_.jpg",
            id: uuidv4(),
            active:false,
            color:["#000303", "#f1d302"],
            audio:"https://databrainz.com/cache/773ca7a6699a74c40f9f7b4d2a62bbb9/b2233e5fc60c2978fe80/Cj/Whoopty"
        },
        {
            name:"NOT AFRAID",
            artist:"Eminem",
            cover:"https://images-na.ssl-images-amazon.com/images/I/51CxfP-UxaL._AA160_.jpg",
            id:uuidv4(),
            active:false,
            color:["#e5e4f2", "#f9f9f9"],
            audio:"https://databrainz.com/cache/8e81521a3d0461cca42923de9f41981a/b2233e51c50a2e78fa84/Eminem/Not%20Afraid"
        },
        {
            name:"I NEED A DOCTOR",
            artist:"Eminem",
            cover:"https://images-na.ssl-images-amazon.com/images/I/51wOtL4dKAL._AA160_.jpg",
            id:uuidv4(),
            active:false,
            color:["#587344", "#e3fed1"],
            audio:"https://databrainz.com/cache/a1fafe36a2e5a7408bdc1019fbe36732/b2233e5fc20b2d7ef88b/Dr.%20Dre/I%20Need%20A%20Doctor"
        },
        {
            name:"STAYIN' ALIVE",
            artist:"Bee Gees",
            cover:"https://i2.wp.com/qoret.com/wp-content/uploads/2019/02/bee-gees-%E2%80%93-stayin%E2%80%99-alive.jpg?w=300&ssl=1",
            id:uuidv4(),
            active:false,
            color:["#dedfdc", "#433941"],
            audio:"https://databrainz.com/cache/deef72ffceaf94351a83f9317e7d026e/b2233e51c70f2d75fd82/Begees/Staying%20Alive"
        }
    ]
}

export default sendData;