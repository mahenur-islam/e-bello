import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BrandProducts = () => {
    const { brandName } = useParams(); // Use useParams to get the route parameter

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products for the specific brand from the server using a query parameter
        fetch(`http://localhost:5000/products?brandName=${brandName}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [brandName]);

    return (
        <div>
            <h1>Products for {brandName}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : products.length === 0 ? (
                <p>No data found for {brandName}.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.productName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BrandProducts;


