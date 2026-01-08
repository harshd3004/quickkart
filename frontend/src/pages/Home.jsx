import { use, useEffect, useState } from "react"
import { getAllProducts } from "../api/productApi"
export const Home = ()=>{

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await getAllProducts();
                console.log("fetched");
                console.log(res);
                
                
                if(res){
                    setProducts(res.data.products);
                    setProductCount(res.data.total);
                }
            }
            catch(err){
                console.log("Error fetching products:", err);
            }
        };
        fetchData();
    },[])
    return (
        <>
            <h1>Home Page</h1>
            <h2>Total Products: {productCount}</h2>
        </>
    )
}