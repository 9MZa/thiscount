import { createBrowserRouter } from "react-router-dom";
import DiscountPage from "@/pages/Discount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscountPage />,
  },
  {
    path: "/discount",
    element: <DiscountPage/>,
  },
  {
    path: "/vat",
    element: <DiscountPage />,
  },
  {
    path: "/cm-inch",
    element: <DiscountPage />,
  },
]);
