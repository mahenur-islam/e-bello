import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const MyCart = () => {
    const products = useLoaderData();
    return (
        <div>
           <h1 className="text-center my-10 text-3xl md:text-4xl font-bold font-serif">Products You Added</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                products.map(product => 
                <ProductCard key={product._id} product={product}></ProductCard>
                )
            }
           </div>
        </div>
    );
};

export default MyCart;