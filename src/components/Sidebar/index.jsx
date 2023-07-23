import Menu from './Menu';
import Profile from './Profile';
import { useContext } from 'react';
import { SidebarContext } from '../../Router';
import './style.scss';

const Sidebar = () => {
  const { openSidebarMobile, sidebarMinimized } = useContext(SidebarContext);

  return (
    <div className={`sidebar-wrapper ${openSidebarMobile ? 'open' : ''}`}>
      <div
        className={`sidebar p-3 d-flex flex-column bg-white ${
          sidebarMinimized ? 'minimized' : ''
        }`}
      >
        <div className={`logo-desktop ${sidebarMinimized ? 'minimized' : ''}`}>
          {/* <img
            className={sidebarMinimized ? 'minimized' : ''}
            src="/images/zallogo.png"
          /> */}
          <div
            className={`logo bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded ${
              sidebarMinimized ? 'minimized' : ''
            }`}
          >
            Logo
          </div>
          <h3 className={sidebarMinimized ? 'minimized' : ''}>
            Apps
            <br />
            Karyawan
          </h3>
        </div>
        <Profile sidebarMinimized={sidebarMinimized} />
        <Menu sidebarMinimized={sidebarMinimized} />
      </div>
    </div>
  );
};

export default Sidebar;
