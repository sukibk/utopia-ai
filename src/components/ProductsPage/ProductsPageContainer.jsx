import { Card80 } from "../UI/Card80.jsx";
import { ProductsPageItem } from "./ProductsPageItem";
import { ProductsPageItems } from "./ProductsPageItems.jsx";
import styles from "./ProductsPageContainer.module.css";
import { json, Outlet } from "react-router";
import { useRouteLoaderData } from "react-router";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router";

export const ProductsPageContainer = () => {
  const item = useRouteLoaderData("propId");
  const url = useSelector((store) => store.url.url);

  return (
    <section className={styles["products"]}>
      <div className={styles["products-container--wrapper"]}>
        <Card80 className={styles["products-container--main"]}>
          <div
            className={styles["products-container--main_background"]}
            style={{ background: `url(${url}) center center` }}
          />
          <Outlet style={{ color: "red" }} context={item} />
          <ProductsPageItems className={styles.items} />
        </Card80>
      </div>
    </section>
  );
};

export async function loader({ params }) {
  let productId = params.productId;

  /* Because of the way 'Products' page is set up (index route for products being 'text-creation')
          its data will load on initial load of this page - when no 'productId' is present */
  if (params.productId === undefined) productId = "text-creation";

  // Delays any fetching
  const delayFetch = (url, options) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(url, options));
      }, options.delay);
    });

  const response = delayFetch(
    `https://utopia-ai-dev-default-rtdb.firebaseio.com/products/${productId}.json`,
    {
      delay: 0,
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  const response2 = delayFetch(
    `https://utopia-ai-dev-default-rtdb.firebaseio.com/products/${productId}.json`,
    {
      delay: 0,
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await response;
  return data; // This data will be used in Product.jsx and needed in 'ProductsPageItem'
}
