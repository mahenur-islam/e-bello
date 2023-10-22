/* eslint-disable react/prop-types */
// ProductCardDetails.js

import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCardDetails = ({ product }) => {
  const {
    _id,
    productName,
    brandName,
    description,
    types,
    price,
    rating,
    photoUrl,
  } = product;

  
  console.log(product);
  const handleUpdate = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      <Card className="w-full  max-w-[26rem] shadow-lg p-3 ">
        <CardHeader floated={false} color="blue-gray" className="shadow-none">
          <img src={photoUrl} alt="ui/ux review check" />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
            {productName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <AiTwotoneStar />
              5.0
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray" className="text-md">
            {brandName}
            </Typography>
          <Typography color="gray">
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true} className="text-black border p-2 rounded-lg hover:bg-sky-800 hover:text-white mb-5">
            Show Details
          </Button>
          
          <Link to = {`/updateProduct/${_id}`}>
          <Button size="lg" fullWidth={true} className="text-black border p-2 rounded-lg hover:bg-sky-800 hover:text-white mb-5" onClick = {()=>handleUpdate(_id)}>
            Update
          </Button>
          </Link>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCardDetails;
