import { Link } from 'react-router-dom';

const brands = [
  { id: 1, brand: 'Apple', image: 'https://i.ibb.co/1r4fpb6/brand-apple-svgrepo-com.png' },
  { id: 2, brand: 'Samsung', image: 'https://i.ibb.co/WBPwxNv/samsung-svgrepo-com.png' },
  { id: 3, brand: 'Xiaomi', image: 'https://i.ibb.co/QpB61bn/xiaomi-svgrepo-com.png' },
  { id: 4, brand: 'Huawei', image: 'https://i.ibb.co/vPY3kZK/huawei-svgrepo-com.png' },
  { id: 5, brand: 'Vivo', image: 'https://i.ibb.co/fnRP6wF/vivo-2-logo-svgrepo-com-1.png' },
  { id: 6, brand: 'OnePlus', image: 'https://i.ibb.co/M8VvQYg/oneplus-svgrepo-com.png' },
];

const BrandList = () => {
  return (
    <div className='p-10'>
      <h1 className='text-center text-3xl md:text-5xl my-10'>Brands</h1>
      <ul className='grid grid-cols-1 md:grid-cols-6 gap-5'>
        {brands.map((brand) => (
          <li key={brand.id} >
            <Link to={`/products/${brand.brand}`} >
             <div className='bg-gray-100 rounded-xl p-2 hover:opacity-50'>
             <img src={brand.image} alt={brand.brand} className='w-1/2 mx-auto'/>
              <h3 className='text-center'>{brand.brand}</h3>
             </div>
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
