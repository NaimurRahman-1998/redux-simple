import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Store/cartSlice";

const Cart = () => {
    const cartProducts = useSelector((state)=> state.cart)
    console.log(cartProducts)
    const dispatch = useDispatch()
    
    const removeFromCart =(id)=>{
        dispatch(remove(id))
    }
    return (
        <div className="mx-28">
            <ul>
                {
                    cartProducts.map(singleProduct=>
                    <li key={singleProduct.id}>
                        <span>{singleProduct.title} <button onClick={()=>removeFromCart(singleProduct.id)}>X</button></span>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Cart;