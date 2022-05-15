import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../components/ItemCount/ItemCount"
import ItemList from "../components/ItemList/ItemList"
import { getFetch } from "../helpers/getFetch"


const ItemListContainer =( {saludo} ) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProducts(respuesta.filter((prod) => prod.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProducts(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])

    const onAdd =( cant) => {
        console.log (cant)
    }

    return (
        <div>
            {saludo}
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            { loading ? 
                <h2>Cargando...</h2> 
                : 
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList products={products} />
                </div>
            }
        </div> 
        
    )
}
            
export default ItemListContainer

