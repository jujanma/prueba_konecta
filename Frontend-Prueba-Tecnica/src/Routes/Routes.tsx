import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Users from "../Blocks/Users/Users";
import ProductList from "../Blocks/ProductsList/ProductList";
import ProductDetail from "../Blocks/ProductDetail/ProductDetail";
import AuthenticatedRoute from "./AuthenticatedRoute";

const routerList = createBrowserRouter(
  [
    {
      path: `/`,
      element: <AuthenticatedRoute element={<Home />} />,
    },
    {
      path: `/users`,
      element: (
        <AuthenticatedRoute
          element={<Home><Users/></Home>}
          allowedRoles={["Administrador"]}
        />
      ),
    },
    {
      path: `/products`,
      element: <AuthenticatedRoute element={<Home><ProductList/></Home>} />,
    },
    {
      path: `/products/:id`,
      element: <AuthenticatedRoute element={<Home><ProductDetail/></Home>} />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]
);

export default routerList;