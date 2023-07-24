import { Route, Switch } from 'react-router-dom';
import { createContext, useState, useEffect, useMemo } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import KaryawanData from './pages/Karyawan.Data';

export const SidebarContext = createContext(null);

const Router = () => {
  // Global state for sidebar
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dropdownActive, setDropdownActive] = useState('');

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches)
      setOpenSidebarMobile(true);
  }, []);

  // const sidebar = useMemo(() => {
  //   return {
  //     openSidebarMobile: openSidebarMobile,
  //     setOpenSidebarMobile: setOpenSidebarMobile,
  //     sidebarMinimized: sidebarMinimized,
  //     setSidebarMinimized: setSidebarMinimized,
  //   };
  // }, [openSidebarMobile, sidebarMinimized]);

  return (
    <SidebarContext.Provider
      value={{
        openSidebarMobile: openSidebarMobile,
        setOpenSidebarMobile: setOpenSidebarMobile,
        sidebarMinimized: sidebarMinimized,
        setSidebarMinimized: setSidebarMinimized,
        dropdownActive: dropdownActive,
        setDropdownActive: setDropdownActive,
      }}
    >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/karyawan" component={KaryawanData} />
      </Switch>
    </SidebarContext.Provider>
  );
};

export default Router;
