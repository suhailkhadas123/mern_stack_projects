import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout,Container,Payment} from "./index.jsx";
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
        }
      ]
    }
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
