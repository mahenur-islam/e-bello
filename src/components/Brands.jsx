// Home.js

import { Link } from 'react-router-dom';

const brands = [
    { id: 1, name: 'Apple', image: 'https://i.ibb.co/1r4fpb6/brand-apple-svgrepo-com.png' },
    { id: 2, name: 'Samsung', image: 'https://i.ibb.co/WBPwxNv/samsung-svgrepo-com.png' },
    { id: 3, name: 'Xiaomi', image: 'https://i.ibb.co/QpB61bn/xiaomi-svgrepo-com.png' },
    { id: 4, name: 'Huawei', image: 'https://i.ibb.co/vPY3kZK/huawei-svgrepo-com.png' },
    { id: 5, name: 'Vivo', image: 'https://i.ibb.co/fnRP6wF/vivo-2-logo-svgrepo-com-1.png' },
    { id: 6, name: 'OnePlus', image: 'https://i.ibb.co/M8VvQYg/oneplus-svgrepo-com.png' },
];

const Brands = () => {
  return (
    <div>
      <div className="brand-list grid grid-cols-1 md:grid-cols-6 gap-5 my-40 ">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/products/${brand.name}`}>
            <div className="brand-card flex flex-col justify-center items-center mx-auto w-60 bg-gray-200 rounded-lg hover:bg-gray-50 p-2">
              <img src={brand.image} alt={brand.name} className='w-32' />
              <p>{brand.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
