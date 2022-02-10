import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
const Payment = () => {
  var oid = localStorage.getItem("orderId");
  var amount = localStorage.getItem("totalamnt");
  var bname = localStorage.getItem("bname");
  const Razorpay = useRazorpay();
  function pay_now() {
    var name = bname;
    var amt = amount;

    $.ajax({
      type: "post",
      url: "https://eshopbacnkend.herokuapp.com/cart/payment",
      data: "amt=" + amt + "&name=" + name,
      success: function (result) {
        var options = {
          key: "rzp_test_ZA4hVjuecoRjPS",
          amount: amt * 100,
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image:
            "https://image.freepik.com/free-vector/logo-sample-text_355-558.jpg",
          handler: function (response) {
            $.ajax({
              type: "post",
              url: "https://eshopbacnkend.herokuapp.com/cart/payment",
              data:
                "payment_id=" + response.razorpay_payment_id + "&oid=" + oid,
              success: function (result) {
                window.location.href = "/";
              },
            });
          },
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
      },
    });
  }

  useEffect(() => {
    pay_now();
  });
  return (
    <>
      <h1>Payment</h1>
    </>
  );
};

export default Payment;
