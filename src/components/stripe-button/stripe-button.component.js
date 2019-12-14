import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2nM6pqRkkYzzvUzEClYL9jS6";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
      
    <StripeCheckout
      name="Crwn Clothing"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      descriptions={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
