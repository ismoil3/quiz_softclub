import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Result from "./pages/result/result";

function App()
{
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/result",
        element:<Result/>
      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App;
