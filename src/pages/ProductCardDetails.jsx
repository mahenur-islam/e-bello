/* eslint-disable react/prop-types */
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

  const handleShowDetails = (_id) => {
    console.log(_id);
  };

  return (
    <div className="w-96 h-auto mb-6 p-3">
      <Card className="w-full shadow-lg p-3 bg-gray-200  h-[45rem]">
        <CardHeader floated={false} color="blue-gray" className="shadow-none">
          <div className="h-96">
            <img src={photoUrl} alt="ui/ux review check" className="w-full h-full object-cover" />
          </div>
        </CardHeader>
        <CardBody className="relative">
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
          <Typography variant="h5" color="blue-gray" className="text-md">
            {types}
          </Typography>
          <Typography color="gray">{description}</Typography>
        </CardBody>
        <CardFooter className="absolute bottom-3 flex justify-center items-center gap-5">
          <Link to={`/showdetails/${_id}`}>
            <Button
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-sky-600"
              onClick={() => handleShowDetails(_id)}
            >
              Show Details
            </Button>
          </Link>

          <Link to={`/updateProduct/${_id}`}>
            <Button
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-sky-600"
              onClick={() => handleUpdate(_id)}
            >
              Update
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCardDetails;
