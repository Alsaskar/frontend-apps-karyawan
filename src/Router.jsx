import { Route, Switch } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import KaryawanData from './pages/Karyawan.Data';
import KaryawanInput from './pages/Karyawan.Input';
import ScrollToTop from './components/ScrollToTop';

export const SidebarContext = createContext(null);

const Router = () => {
  // Global state for sidebar
  const sidebarMinimizedLS = localStorage.getItem('sidebar-minimized')
    ? localStorage.getItem('sidebar-minimized')
    : localStorage.setItem('sidebar-minimized', false);

  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(
    JSON.parse(sidebarMinimizedLS)
  );
  const [dropdownActive, setDropdownActive] = useState('');

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
        dropdownActive: dropdownActive,
        setDropdownActive: setDropdownActive,
      }}
    >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/karyawan" component={KaryawanData} />
        <Route path="/tambah-karyawan" component={KaryawanInput} />
      </Switch>
      <ScrollToTop />
    </SidebarContext.Provider>
  );
};

export default Router;
