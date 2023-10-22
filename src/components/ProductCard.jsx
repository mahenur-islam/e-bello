/* eslint-disable react/prop-types */
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
    <div>
      <div className="card card-side w-full bg-base-100 shadow-xl mb-10 text-left">
        <figure>
          <img src={photoUrl} alt="Movie" className="w-[200px] h-[200px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{productName}</h2>
          <p className="font-semibold">
            {brandName}
          </p>
          <h3 className="text-orange-600 font-bold">{ratings}</h3>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
