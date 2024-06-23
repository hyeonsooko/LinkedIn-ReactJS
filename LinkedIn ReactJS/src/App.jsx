import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from "./error-page";
import Home from "./components/Home.jsx"
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
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
