import Swal from "sweetalert2";
import { useRef } from "react";
const AddProduct = () => {

  const formRef = useRef(null);
  //function to add product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const brandName = form.brand_name.value;
    const types = form.types.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const description = form.description.value;
    const photoUrl = form.photo_url.value;
    const newProduct = {
      productName,
      brandName,
      types,
      ratings,
      price,
      description,
      photoUrl,
    };
    console.log(newProduct);

    //send newProduct from data
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          formRef.current.reset();
        }
      });

      fetch("http://localhost:5000/brands", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: brandName }),
      });

      formRef.current.reset();
  };
  return (
    <div className="w-full text-center  p-1 md:p-10">
      <div className="w-full md:w-1/2 mx-auto bg-gray-100 shadow-2xl p-10">
        <h1 className="font-serif text-xl md:text-3xl font-extrabold">
          Add Product
        </h1>
        <form className=" p-10" onSubmit={handleAddProduct} ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                className="input input-bordered  w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                className="input input-bordered  w-full max-w-xs md:max-w-2xl"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Types"
                name="types"
                className="input input-bordered  w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="ratings"
                placeholder="Rating"
                className="input input-bordered  w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered  w-full max-w-2xl"
            />
          </div>
          <div className="form-control mt-5">
            {/* <input type="text" placeholder="Short Description" className="input input-bordered  w-full max-w-xs" /> */}
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
              className="input input-bordered  w-full max-w-2xl"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Add Product"
              className="btn btn-primary hover:bg-transparent hover:text-blue-800 px-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
