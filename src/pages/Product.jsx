import { ProductsPageItem } from "../components/ProductsPage/ProductsPageItem";
import { useLoaderData, useRouteLoaderData } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUrl } from "../store/urlSlice.js";

export const ProductPage = () => {
  const item = useLoaderData(); // Gets data from loader to be used in 'ProductsPageItem' page

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUrl({ url: item.url })); // Sets the which will be used in 'ProductsPageContainer'
  });

  return <ProductsPageItem item={item} />;
};

