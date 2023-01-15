import { createBrowserRouter, Router } from "react-router-dom";
import App from "../Pages/Home/App";
import ProductPage from "../Pages/Card/ProductPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },

  {
    path: "/product/:id",
    element: <ProductPage/>,
    
  },

  
  
  
]);
export default router
