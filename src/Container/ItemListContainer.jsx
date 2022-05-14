import ItemCount from "../components/ItemCount/ItemCount"

const ItemListContainer =( {saludo} ) => {
    const onAdd =( cant) => {
            console.log (cant)
    }

    return (
        <div>
            {saludo}
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div> 
        
    )
}
            
export default ItemListContainer

