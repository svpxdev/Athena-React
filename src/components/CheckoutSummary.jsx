import React from "react";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import bookList from "../Books";
import CurrencyFormat from "react-currency-format";
import { getBasketValue } from "../Reducer";
import { useBasketState } from "../StateProvider";

export default function CheckoutSummary() {
  const [{ basket }] = useBasketState();
  const amount = getBasketValue(basket);
  const vat_amount = amount * 0.19;

  return (
    <>
      <div className="checkout__main">
        <div className="checkout__summary">
          <div className="checkout__summaryBox">
            <p className="checkout__summaryHeader">Shipping Address</p>
            <p className="checkout__summaryBody">
              Mr Mustermann, <br /> Waldenstrasse 56, <br /> 10788 Berlin
              <br />
              Ph: +49 175 25447755
              <br /> Email: mustermann@athena.com
            </p>
            <a href="" className="checkout__link">
              Change delivery address
            </a>
          </div>
          <div className="checkout__summaryBox">
            <p className="checkout__summaryHeader">Payment Method</p>
            <input type="checkbox" />
            <label> PayPal</label>
            <p className="checkout__summaryBody"> </p>
            <p className="checkout__summaryHeader">Billing Address</p>
            <p className="checkout__summaryBody">
              Mr Mustermann, <br /> Waldenstrasse 56, <br /> 10788 Berlin
            </p>
            <a href="" className="checkout__link">
              Change billing address
            </a>
          </div>
          <div className="checkout__summaryBox checkout__boxBorder">
            <p className="checkout__summaryHeader">Order Summary</p>
            <p className="checkout__headerBody">Items Total: </p>
            <div className="checkout__tableRow">
              <div className="checkout__tableCol1">
                <p className="checkout__headerBody">{basket?.length} Items </p>
              </div>
              <div className="checkout__tableCol2">
                <p className="checkout__headerBody">
                  <strong>
                    {" "}
                    <CurrencyFormat
                      decimalScale={2}
                      value={amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"€"}
                    />
                  </strong>
                </p>
              </div>
            </div>
            <div className="checkout__tableRow">
              <div className="checkout__tableCol1">
                <p className="checkout__headerBody">VAT @ 19% </p>
              </div>
              <div className="checkout__tableCol2">
                <p className="checkout__headerBody">
                  <strong>
                    <CurrencyFormat
                      decimalScale={2}
                      value={vat_amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"€"}
                    />
                  </strong>{" "}
                </p>
              </div>
            </div>
            <hr />
            <div className="checkout__tableRow">
              <div className="checkout__tableCol1">
                <p className="checkout__headerBody">Total </p>
              </div>
              <div className="checkout__tableCol2">
                <p className="checkout__headerBody">
                  <strong>
                    <CurrencyFormat
                      decimalScale={2}
                      value={amount + vat_amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"€"}
                    />
                  </strong>
                </p>
              </div>
            </div>

            <div className="checkout__placeOrder">
              <a href=""> Place Order </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
