import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Pages/Landing/Landing";
import Auth from "./components/Pages/Auth/Auth";
import Payment from "./components/Pages/Payment/Payment";
import Cart from "./components/Pages/Cart/Cart";
import Orders from "./components/Pages/Orders/Orders";
import Results from "./components/Pages/Results/Results";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51Q25jdP583VvMpTxx4znGqdKq9hZH2JdnRoQ7BxEbWkNKohkhA2X2KYNp9CGpUAi20BBuZJrUVAgOPumJ53IH3YH00dv2Lg8u8"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to see your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
