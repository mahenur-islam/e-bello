import { useLoaderData } from "react-router-dom";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowDetails = () => {
  const product = useLoaderData();
  const {
    productName,
    brandName,
    description,
    types,
    price,
    rating,
    photoUrl,
  } = product;

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products/${product._id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [product._id]);

  return (
    <div>
      <h1>Show Product Details</h1>
      {productData ? (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col  w-full">
            <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{productName}</h1>
              <div className="flex flex-row">
                <p className="font-bold">{brandName}</p>
                <p>{rating}</p>
              </div>
              <p className="text-sm font-semibold">{types}</p>
              <p className="py-3">{description}</p>
              <p className="font-bold text-orange-600 mb-3">${price}</p>
              <Link to="/" className="btn btn-primary">
                Go Back to Homepage
              </Link>
              <Link  className="btn btn-primary ml-10">
                Add to Cart 
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ShowDetails;
