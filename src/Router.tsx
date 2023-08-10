import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CompleteOrder from "./pages/CompleteOrder/CompleteOrder";
import DefaultLayout from "./layouts/Default";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
