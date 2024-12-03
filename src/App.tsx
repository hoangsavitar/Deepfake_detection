import { useRoutes } from "react-router-dom";
import DefaultLayout from "./pages/default-layout/default-layout";
import HomePage from "./pages/home/home";
function App() {
  let element: any = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        }
      ]
    },
  ]);

  return element;
}

export default App;
