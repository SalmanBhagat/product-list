import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function ProductsCard() {
  const [products, setProducts] = useState([]);

  const [loader, setLoader] = useState(true);

  // const {id} = useParams();

  const url = "https://dummyjson.com/products";

  axios
    .get(url)
    .then((response) => {
      setLoader(false)
      setProducts(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="mt-6 mb-6 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >

        {/* Content */}
        <div className="p-5 space-y-3">
        {/* Image */}
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full object-contain"
        />
          {/* Title + Brand */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            {
              item.brand && (
            <p className="text-sm text-gray-500">
              Brand: <span className="font-medium">{item.brand}</span>
            </p>
              )
            }
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">
            {item.description}
          </p>

          {/* Price & Discount */}
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-pink-600">${item.price}</p>
            <p className="text-sm text-gray-500 line-through">
              ${(item.price + (item.price * item.discountPercentage) / 100).toFixed(2)}
            </p>
            <span className="text-green-600 text-sm">
              {item.discountPercentage.toFixed(2)}% off
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-700">{item.rating}</span>
          </div>

          {/* Stock */}
          <div className="text-sm text-gray-600">
            Stock: <span className="font-medium">{item.stock}</span>
          </div>

          {/* CTA */}
            <Link to={"/products/detail/" + item.id} className="w-full bg-pink-600 hover:bg-pink-700 block text-center text-white font-semibold py-2 rounded-xl mt-2 transition duration-200">Buy Now</Link>
        </div>
      </div>
    ))}

    {/* Loader */}
    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
      <ClipLoader
        loading={loader}
        size={180}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  </div>
</div>

  );
}

export default ProductsCard;
