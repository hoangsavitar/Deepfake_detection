import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/home";
import DefaultClient from "./pages/default-client/default-client";
import { LoginPage } from "./pages/login/login";
import ManageModel from "./pages/manage-model/manage-model";
function App() {
  let element: any = useRoutes([
    {
      path: "/",
      element: <DefaultClient />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "manage-model",
          element: <ManageModel />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return element;
}

export default App;
