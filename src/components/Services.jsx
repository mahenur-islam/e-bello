
import {TbTruckDelivery} from 'react-icons/tb'
import {SiCashapp} from 'react-icons/si'
import { GoGift } from "react-icons/go";
import {GiReturnArrow,GiDeerTrack} from 'react-icons/gi';


const Services = () => {
  return (
    <div className="py-32">
      <div>
        <h1 className="text-xl font-semibold md:text-5xl text-center dark:text-white">
          Why Choose Us?
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-3 py-3  items-center justify-center">
        <div className="card w-64 bg-base-100 shadow-xl mx-auto">
          <div className="card-body items-center text-center hover:bg-gray-100">
            <TbTruckDelivery className="text-7xl"></TbTruckDelivery>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl mx-auto">
          <div className="card-body items-center text-center hover:bg-gray-100">
            <GoGift className="text-7xl"></GoGift>
            <h2 className="card-title">Wide Range of Products</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl mx-auto">
          <div className="card-body items-center text-center hover:bg-gray-100">
            <SiCashapp className="text-7xl"></SiCashapp>
            <h2 className="card-title">Safe Online Payments</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl mx-auto">
          <div className="card-body items-center text-center hover:bg-gray-100">
            <GiReturnArrow className="text-7xl"></GiReturnArrow>
            <h2 className="card-title">Hassle-Free Returns</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl hover:bg-gray-100 mx-auto">
          <div className="card-body items-center text-center">
            <GiDeerTrack className="text-7xl"></GiDeerTrack>
            <h2 className="card-title">Tracking Feature</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
