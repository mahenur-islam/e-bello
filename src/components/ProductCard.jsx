/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import { AiFillStar } from "react-icons/ai";
const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    brandName,
    types,
    ratings,
    price,
    description,
    photoUrl,
  } = product;

  const handleDelete = (_id) => {
    console.log(_id);

    // Confirmation message to delete the product
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://e-bello-server-rnjd4fz5y-mdmahenurislams-projects.vercel.app/products/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              window.location.reload();
            }
          });
      }
    });
  };
  return (
    <Card className="max-w-[24rem] overflow-hidden bg-white px-2 pt-5 mx-auto relative">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-lg mx-auto"
      >
        <img src={photoUrl} alt={productName} className="w-64 h-64" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {productName}
        </Typography>
       <div className="flex justify-center">
       <Typography variant="h2" color="blue-gray">
          {ratings}
          <div className="5 flex mx-auto gap-0 text-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </Typography>
       </div>
        <Typography  color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between py-5 mt-10">
        <Button onClick={handleDelete} className="text-center  bg-gray-700 px-4 absolute bottom-3 right-3">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
