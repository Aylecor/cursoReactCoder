const products = [
    {
        "id": 1,
        "name": "Camiseta de Hom Prim Equipación",
        "category": "Remeras",
        "gender": "Hombre",
        "price": 16000,
        "image": "../src/assets/remeras/camisetaOriginalHombrePrimeraEquipacionUno.jpg"
    },
    {
        "id": 2,
        "name": "Camiseta Muj Primera Equipación",
        "category": "Remeras",
        "gender": "Mujer",
        "price": 16000,
        "image": "../src/assets/remeras/camisetaOriginalMujerPrimeraEquipacionDos.jpg"
    },
    {
        "id": 3,
        "name": "Camiseta de Hom Segun Equipación",
        "category": "Remeras",
        "gender": "Hombre",
        "price": 16000,
        "image": "../src/assets/remeras/camisetaOriginalHombreSegundaEquipacionTres.jpg"
    },
    {
        "id": 4,
        "name": "Camiseta de Hom Tercera Equipación",
        "category": "Remeras",
        "gender": "Hombre",
        "price": 16000,
        "image": "../src/assets/remeras/camisetaOriginalHombreTerceraEquipacionCuatro.jpg"
    },
    {
        "id": 5,
        "name": "Camiseta Man Larga Hom Prim Equip",
        "category": "Remeras",
        "gender": "Hombre",
        "price": 16000,
        "image": "../src/assets/remeras/camisetaOriginalMangaLargaHombrePrimeraEquipacionCinco.jpg"
    }
]

export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? products.find(product => product.id === id ) : products                                  
                resolve( query )                           
            }, 2000)
        })              
}

