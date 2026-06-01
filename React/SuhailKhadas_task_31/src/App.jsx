import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout,Container,Payment,Cart} from "./index.jsx";
import {CartProvider} from "./components/context/CartContext.jsx";
function App() {
  
  const router =createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "",
          element: <Container/>
        },
        {
          path:"Payment",
          element: <Payment/>
        },
        {
          path:"Products",
          element: <Container/>
        }
      ]
    }
  ]);
  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </>
  )
}

export default App
