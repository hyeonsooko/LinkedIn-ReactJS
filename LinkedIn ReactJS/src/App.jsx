import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login />),
    errorElement: <ErrorPage />,
  },
]);

function App() {

  return(
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
