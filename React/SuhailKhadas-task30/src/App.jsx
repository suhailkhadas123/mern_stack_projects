
import {Layout,Home,Login,Dashboard,Signup,Products} from "./components"
import {createBrowserRouter, RouterProvider} from "react-router-dom"




function App() {

  const router = createBrowserRouter([
    {
      path :"/",
      element : <Layout/>,
      children :[
        {
          path :"",
          element : <Home/>
        },
        {
          path :"/products",
          element : <Products/>
        },
        // {
        //   path :"/contact",
        //   element : <Contact/>
        // },
        {
          path :"/login",
          element : <Login/>
        },
        {
          path :"/signup",
          element : <Signup/>
        },
        {
          path :"/dashboard",
          element : <Dashboard/>
        }

      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
