import styles from "./ProductsPageItem.module.css";
import { useState } from "react";
import { useNavigation } from "react-router";

export const ProductsPageItem = (props /* props.item service based on url */) => {

  //Adding fade animation on loading
  //------------------------------------------
  let wrapperClass = styles["products-page-item--wrapper"];
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading)
    wrapperClass = `${styles["products-page-item--wrapper"]} 
        ${styles["product-page-item--wrapper__blur"]}`;

  //------------------------------------------


  return <div className={wrapperClass}>
    <div className={styles["products-page-item--main"]}>
      <div className={styles["products-page-item--main_header"]}>
        <h1>{props.item.title}</h1>
        <h3>{props.item.titleDescription}</h3>
      </div>
      <div className={styles["products-page-item--main_description"]}>
        <img src={props.item.url} alt={`${props.item.id} picture can't be loaded`} />
        <p>{props.item.text}</p>
      </div>
      <div className={styles["products-page-item--main_actions"]}>
        {/* TO DO: Add functionality */}
        <button>LEARN MORE</button>
        <button>BUY TOKENS</button>
      </div>
    </div>
  </div>;
};