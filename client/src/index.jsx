import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./routes/Error-page";
import MenuPage from "./routes/MenuPage";
import ShopPage from "./routes/ShopPage";
import RestaurantsPage from "./routes/RestaurantsPage";
import DeliveryPage from "./routes/DeliveryPage";
import LoginPage from "./routes/LoginPage";
import ContactsPage from "./routes/ContactsPage";
import CartPage from "./routes/CartPage";
import ContentProvider from "./context/CartContext";
import SignUpPage from "./routes/SignUpPage";
import PizzaPage from "./routes/PizzaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/delivery",
    element: <DeliveryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registration",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pizza",
    element: <PizzaPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  </React.StrictMode>
);
