import { ProductsPageItem } from "../components/ProductsPage/ProductsPageItem";
import { useLoaderData } from "react-router";
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

// Retrieving data about available products from firebase
export async function loader({ params }) {
  let productId = params.productId;

  /* Because of the way 'Products' page is set up (index route for products being 'text-creation')
          its data will load on initial load of this page - when no 'productId' is present */
  if (params.productId === undefined) productId = "text-creation";

  const response = await fetch(
    `https://utopia-ai-dev-default-rtdb.firebaseio.com/products/${productId}.json`
  );
  const data = await response;
  return data; // This data will be needed in 'ProductsPageItem'
}
