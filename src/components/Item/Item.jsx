import { Link } from "react-router-dom"

const Item = ( {prod} ) => {
  return (           
        <div className='col-md-4'>                        
        <Link to={`${prod.id}`}>
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.category} - ${prod.gender}`}
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' />
                </div>
                <div className="card-footer">  
                {`${prod.price}`}                                                  
                    <button className="btn btn-outline-primary btn-block">
                        Detalle del producto
                    </button>                
                </div>
            </div>
        </Link>                                                                                
        </div>
  )
}

export default Item