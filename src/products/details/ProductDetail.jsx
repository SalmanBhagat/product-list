import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function ProductDetail() {
  const [productsDet, setProductsDet] = useState([]);

  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  const url = `https://dummyjson.com/products/${id}`;

  axios
    .get(url)
    .then((response) => {
      setLoader(false);
      setProductsDet(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(productsDet);

  return (
    <div className="relative flex justify-center items-center h-screen">
  {/* Main Product Card */}
  <div className="max-w-5xl mx-auto my-auto p-[30px_0px_30px_30px] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8">
    {/* Left Side - Image & Info */}
    <div className="flex-1">
      <img
        src={productsDet.thumbnail}
        alt="Essence Mascara"
        className="w-full h-auto shadow rounded-2xl"
      />
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>SKU: {productsDet.sku}</span>
        <span>Weight: {productsDet.weight}g</span>
      </div>
    </div>

    {/* Right Side - Details */}
    <div className="flex-1 space-y-4 h-[441px] overflow-y-auto pr-6 mr-2 scroll-smooth"
    style={{
    willChange: "transform",
    transform: "translateZ(0)",
  }}
    >
      <h2 className="text-2xl font-bold text-gray-800">{productsDet.title}</h2>
      <p className="text-gray-600">{productsDet.description}</p>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-semibold text-pink-600">
          ${productsDet.price}
        </span>
        <span className="text-sm text-green-600">
          ({productsDet.discountPercentage}% OFF)
        </span>
      </div>

      {/* Rating & Stock */}
      <div className="flex items-center space-x-4 text-sm">
        <div className="text-yellow-500 font-medium">
          ⭐ {productsDet.rating}
        </div>
        <div className="text-gray-700">{productsDet.stock} in stock</div>
      </div>

      {/* Brand, Category, Tags */}
      <div className="text-sm text-gray-600">
        <p><strong>Brand:</strong> {productsDet.brand}</p>
        <p><strong>Category:</strong> {productsDet.category}</p>
        <p><strong>Tags:</strong> {productsDet.tags?.join(", ")}</p>
      </div>

      {/* Dimensions */}
      <div className="text-sm text-gray-600">
        <p>
          <strong>Dimensions:</strong>{" "}
          {productsDet?.dimensions?.width} x {productsDet?.dimensions?.height} x {productsDet?.dimensions?.depth} cm
        </p>
      </div>

      {/* Shipping & Warranty */}
      <div className="text-sm text-gray-600">
        <p><strong>Shipping:</strong> {productsDet.shippingInformation}</p>
        <p><strong>Warranty:</strong> {productsDet.warrantyInformation}</p>
        <p><strong>Return Policy:</strong> {productsDet.returnPolicy}</p>
      </div>

      {/* QR & Barcode */}
      <div className="flex items-center space-x-4 mt-2">
        <img
          src={productsDet?.meta?.qrCode}
          alt="QR Code"
          className="w-16 h-16"
        />
        <span className="text-sm text-gray-700">
          Barcode: {productsDet?.meta?.barcode}
        </span>
      </div>

      {/* Reviews */}
      <div className="pt-4 border-t text-sm text-gray-700 space-y-2">
        <h3 className="font-semibold">Customer Reviews</h3>
        {productsDet?.reviews?.map((review, index) => (
          <p key={index}>
            🗣️ <strong>{review.reviewerName}</strong> {review.comment} (⭐ {review.rating})
          </p>
        ))}
      </div>

      {/* Minimum Order */}
      <div className="mt-4 text-sm text-red-600">
        Minimum Order Quantity: {productsDet.minimumOrderQuantity}
      </div>

      {/* Buy Button */}
      <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition">
        Add to Cart
      </button>
    </div>
  </div>

  {/* Loader Overlay */}
  {loader && (
    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
      <ClipLoader
        loading={loader}
        size={180}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )}
</div>

  );
}

export default ProductDetail;
