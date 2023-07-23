import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Store/cartSlice";

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart)
    console.log(cartProducts)
    const dispatch = useDispatch()

    const removeFromCart = (id) => {
        dispatch(remove(id))
    }

    return (
        <div className="mx-28">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map(singleProduct =>
                                <tr key={singleProduct.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleProduct.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{singleProduct.title}</div>
                                                <div className="text-sm opacity-50">{singleProduct.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleProduct.description}
                                    </td>
                                    <td>{singleProduct.price} /-</td>
                                    <th>
                                        <button onClick={()=>removeFromCart(singleProduct.id)} className="btn btn-ghost btn-xs bg-red-500">X</button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {/* <ul>
                {
                    cartProducts.map(singleProduct=>
                    <li key={singleProduct.id}>
                        <span>{singleProduct.title} <button onClick={()=>removeFromCart(singleProduct.id)}>X</button></span>
                    </li>
                    )
                }
            </ul> */}
        </div>
    );
};

export default Cart;