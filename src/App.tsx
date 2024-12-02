import { useRoutes } from "react-router-dom";
import DefaultLayout from "./pages/default-layout/default-layout";
function App() {
  let element: any = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
    },
  ]);

  return element;
}

export default App;
