import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/productsSlice";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const products = useSelector((state)=> state.products.products)
    console.log(products)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Product Dashboard</h1>

            <div className="mt-10 mx-20 grid grid-cols-4 gap-4">
                {
                    products.map((product) =>
                        <Card key={product.id} product={product}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Home;