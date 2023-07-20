import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

/* eslint-disable react/prop-types */

const Card = ({product}) => {
    const dispatch = useDispatch()
    const addToCart =(product)=>{
        dispatch(add(product))
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={product.image} className="w-[100px] h-[100px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                <p>BDT {product.price} /-</p>
                    <button onClick={()=>addToCart(product)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;