/* eslint-disable react/prop-types */
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
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
          fetch(`http://localhost:5000/products/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your product has been deleted.", "success");
                window.location.reload();
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="card w-96 h-[40rem] bg-base-100 shadow-xl p-5">
        <figure className="px-10 pt-10">
          <img
            src={photoUrl}
            alt="Shoes"
            className="rounded-xl w-[250px] h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <p>{brandName}</p>
          <p>{description}</p>
          <p>{types}</p>
          <p>{price}</p>
          <div className="card-actions">
            <RiDeleteBin5Fill
              className="text-red-500 text-2xl md:text-3xl hover:text-black"
              onClick={() => handleDelete(_id)}
            ></RiDeleteBin5Fill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
