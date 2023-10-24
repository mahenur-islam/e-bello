import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const brands = [
  { id: 1, brandName: 'Apple', image: 'https://i.ibb.co/1r4fpb6/brand-apple-svgrepo-com.png' },
  { id: 2, brandName: 'Samsung', image: 'https://i.ibb.co/WBPwxNv/samsung-svgrepo-com.png' },
  { id: 3, brandName: 'Xiaomi', image: 'https://i.ibb.co/QpB61bn/xiaomi-svgrepo-com.png' },
  { id: 4, brandName: 'Huawei', image: 'https://i.ibb.co/vPY3kZK/huawei-svgrepo-com.png' },
  { id: 5, brandName: 'Vivo', image: 'https://i.ibb.co/fnRP6wF/vivo-2-logo-svgrepo-com-1.png' },
  { id: 6, brandName: 'OnePlus', image: 'https://i.ibb.co/M8VvQYg/oneplus-svgrepo-com.png' },
];

const BrandList = () => {
  const [data, setData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleShowProduct = (e) => {
    console.log(e);
    setSelectedBrand(e.toLowerCase()); 
  };

  useEffect(() => {
    fetch("https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        if (selectedBrand) {
          // Filter data based on the selected brand
          const filteredData = data.filter(
            (item) => item.brandName.toLowerCase() === selectedBrand
          );
          setData(filteredData);
          console.log(data);
        } 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedBrand]);

  return (
    <div className='p-10'>
      <h1 className='text-center text-xl md:text-3xl my-10'>Brands</h1>
      <ul className='grid grid-cols-1 md:grid-cols-6 gap-5'>
        {brands.map((brand) => (
          <li key={brand.id}>
            <Link onClick={() => handleShowProduct(brand.brandName)}>
              <div className='bg-gray-100 rounded-xl p-2 hover:opacity-50'>
                <img src={brand.image} alt={brand.brandName} className='w-1/2 mx-auto' />
                <h3 className='text-center'>{brand.brandName}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
        {data.map((item) => (
          <Link   key={item._id} to={`/product/${item._id}`}>
            <div className="card w-72 h-[480px] bg-base-200 shadow-xl mx-auto mt-2 ">
              <figure>
                <img className="w-64" src={item.photoUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-md">
                  {item.brandName}!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-justify text-2xl">{item.productName}</p>
                <div className="card-actions justify-end">
                  <div className="text-xl">${item.price}</div>
                  <div className="badge badge-outline">
                    {item.AvailableQuantity ? "Stock In" : "Stock Out"}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> 
    </div>
  );
};

export default BrandList;
