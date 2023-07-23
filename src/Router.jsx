import { Route, Switch } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const SidebarContext = createContext(null);

const Router = () => {
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches)
      setOpenSidebarMobile(true);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        openSidebarMobile: openSidebarMobile,
        setOpenSidebarMobile: setOpenSidebarMobile,
        sidebarMinimized: sidebarMinimized,
        setSidebarMinimized: setSidebarMinimized,
      }}
    >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </SidebarContext.Provider>
  );
};

export default Router;
