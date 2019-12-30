import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
    alert("Payment Success!");
  };

  const priceForStripe = price * 100;
  const publishableKey = "pk_test_g1EipBknoIV5jLR93l0gxxGC00OHJYFtis";
  return (
    <StripeCheckout
      label="Purchase Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`The total is $${price}`}
      amount={priceForStripe}
      panelLabel="Purchase Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
