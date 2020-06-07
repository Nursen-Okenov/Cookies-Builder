import React, { useState, useEffect } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";
import CookiesControls from "../../components/CookiesBuilder/CookiesControls/CookiesControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/CookiesBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHander from "../../hoc/withErrorHander/withErrorHander";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withErrorHander(() => {
  const { ingredients, price } = useSelector(state => state.builder);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce(
      (canOrder, ingredient) => {
        return !canOrder ? ingredient.quantity > 0 : canOrder;
      },
      false
    );
    output = (
      <>
        <CookiesKit price={price} ingredients={ingredients} />
        <CookiesControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.CookiesBuilder}>
      <h2>Cookies builder</h2>
      {output}
    </div>
  );
}, axios);
