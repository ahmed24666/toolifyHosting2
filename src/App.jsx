import "./app.scss";
import Nav from "./Components/Nav/Nav";
import { useRef, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Packages from "./Pages/Packages/Packages";
import NavLogged from "./Components/NavLogged/NavLogged";
import HomeLogged from "./Pages/HomeLogged/HomeLogged";
import { useMyContext } from "./context/MyContext";
function App() {
  const aboutRef = useRef(null);
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const { lang, setlang, t, i18n } = useMyContext();

  const Layout = () => {
    return (
      <div className="app" style={lang==='en'?{direction:'ltr'}:{direction:'rtl'}}>
        <Nav />
        <Outlet />
      </div>
    );
  };
  const Layout2 = () => {
    return (
      <div className="app" style={lang==='en'?{direction:'ltr'}:{direction:'rtl'}}>
        <NavLogged  />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/main",
      element: <Layout />,
      children: [
        {
          path: "/main/home",
          element: <Home aboutRef={aboutRef} handleClick={handleClick} />,
        },
        {
          path: "/main/packages",
          element: <Packages aboutRef={aboutRef} handleClick={handleClick} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/",
      element: <Layout2/>,
      children: [
        {
          path: "/",
          element: <HomeLogged />,
        },
        
        
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
