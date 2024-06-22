import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login />),
  },
])

function App() {

  return(
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
