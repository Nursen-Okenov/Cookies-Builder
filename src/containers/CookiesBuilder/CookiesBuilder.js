import React, { useState } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";
import CookiesControls from "../../components/CookiesBuilder/CookiesControls/CookiesControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/CookiesBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHander from "../../hoc/withErrorHander/withErrorHander";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default withErrorHander(() => {
  const { ingredients, price } = useSelector((state) => state);

  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

  function finishOrder() {
    const queryParams = Object.keys(ingredients).map(
      (ingredient) =>
        encodeURIComponent(ingredient) +
        "=" +
        encodeURIComponent(ingredients[ingredient])
    );
    queryParams.push("price=" + encodeURIComponent(price.toFixed(2)));

    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
    });
  }

  /*
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);
*/

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <CookiesKit price={price} ingredients={ingredients} />
        <CookiesControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }
  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={finishOrder}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.CookiesBuilder}>
      <h2>Cookies builder</h2>
      {output}
      <Modal show={isOrdering} hideCallback={canOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
