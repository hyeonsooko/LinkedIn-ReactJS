import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from "./error-page";
import Home from "./components/Home.jsx"
import Header from './components/Header.jsx'
import { useEffect } from 'react';
import { getUserAuth } from "./actions"
import { connect } from 'react-redux'

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

function App(props) {
  useEffect(() => {
    props.getUserAuth()
  }, [])

  return(
    <>
      <RouterProvider router={router} />
    </>
  );
}

const mapStateToProps = (sate) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
