import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsCard from "../products/ProductsCard";
import ProductDetail from "../products/details/ProductDetail";

const rounting = createBrowserRouter([
    { path: "/product-list", element: <ProductsCard /> },
    { path: "/products/detail/:id", element: <ProductDetail /> },
]);

export default rounting;
