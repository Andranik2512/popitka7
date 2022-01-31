import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom'
// import Admin from "../pages/Admin";
// import Auth from "../pages/Auth";
// import Basket from "../pages/Basket";
// import DevicePage from "../pages/DevicePage";
// import Notfoundpage from "../pages/Notfoundpage";
// import Shop from "../pages/Shop";
import { SHOP_ROUTE } from "../utils/consts";


import { authRoutes, publicRoutes } from "./routes";


const AppRouter: FC = () => {
  const isAuth = false
  return (
    <Routes>
      {isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
    </Routes>
  );
};

export default AppRouter;



    //  <Route path={'/admin'} element={<Admin />}/>
    //   <Route path={'/login'} element={<Auth />}/>
    //   <Route path={'/registration'} element={<Auth />}/>
    //   <Route path={'/'} element={<Shop />}/>
    //   <Route path={'/basket'} element={<Basket />}/>
    //   <Route path={'/device'} element={<DevicePage />}/>
    //   <Route path={'*'} element={<Notfoundpage />}/>