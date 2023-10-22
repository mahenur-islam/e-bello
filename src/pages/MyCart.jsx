import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const MyCart = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>
           <h1 className="text-center my-10 text-3xl md:text-4xl font-bold font-serif">Products You Added</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center p-10 bg-sky-300">
           {
                products.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    products.map(product => 
                        <ProductCard key={product._id} product={product} />
                    )
                )
            }
           </div>
        </div>
    );
};

export default MyCart;