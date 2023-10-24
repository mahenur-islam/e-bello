import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";

const UpdateProduct = () => {
  const formRef = useRef(null);
  const product = useLoaderData();
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const product_id = product._id;
    const productName = form.product_name.value;
    const brandName = form.brand_name.value;
    const types = form.types.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const description = form.description.value;
    const photoUrl = form.photo_url.value;
    const updatedProduct = {
      productName,
      brandName,
      types,
      ratings,
      price,
      description,
      photoUrl,
    };

   
    fetch(`https://e-bello-server-eqg1y2hj3-mdmahenurislams-projects.vercel.app/products/${product_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Product updated successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      // Handle the error and show a message to the user
      Swal.fire({
        title: "Error",
        text: "There was an error updating the product. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    });
  };

  useEffect(() => {
    if (product) {
      formRef.current.product_name.value = product.productName;
      formRef.current.brand_name.value = product.brandName;
      formRef.current.types.value = product.types;
      formRef.current.ratings.value = product.ratings;
      formRef.current.price.value = product.price;
      formRef.current.description.value = product.description;
      formRef.current.photo_url.value = product.photoUrl;
    }
  }, [product]);

  return (
    <div className="w-full text-center p-1 md:p-10">
      <div className="w-full md:w-1/2 mx-auto bg-gray-100 shadow-2xl p-10">
        <h1 className="font-serif text-xl md:text-3xl font-extrabold">
          Update Product
        </h1>
        <form className="p-10" onSubmit={handleUpdateProduct} ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                className="input input-bordered w-full max-w-xs md:max-w-2xl"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Types"
                name="types"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="ratings"
                placeholder="Rating"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="form-control mt-5">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              name="photo_url"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Update Product"
              className="btn btn-primary hover:bg-transparent hover:text-blue-800 px-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
