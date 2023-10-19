import { FcOvertime } from "react-icons/fc";
import {GoGift} from 'react-icons/go'

const Services = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-xl font-semibold md:text-3xl text-center">
          Why Choose Us?
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 p-10 gap-3  ">
        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FcOvertime className="text-7xl"></FcOvertime>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <GoGift className="text-7xl"></GoGift>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FcOvertime className="text-7xl"></FcOvertime>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FcOvertime className="text-7xl"></FcOvertime>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>

        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FcOvertime className="text-7xl"></FcOvertime>
            <h2 className="card-title">Swift Delivery Services</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
