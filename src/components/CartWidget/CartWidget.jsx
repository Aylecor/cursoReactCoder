import Img from '../assets/logo.png'
import {BsFillArchiveFill} from "react-icons/bs";

const CartWidget = () => {
    return (
        <>
            <img src= {Img} className='w-25' alt="Imagen Logo"/>
            <h3>< BsFillArchiveFill/> </h3>
        </>
    )
}

export default CartWidget