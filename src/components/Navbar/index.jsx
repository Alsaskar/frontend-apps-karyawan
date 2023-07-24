import { useContext } from 'react';
import { SidebarContext } from '../../Router';
import { NavLink } from 'react-router-dom';
import { node } from 'prop-types';
import './style.scss';

const NavbarCustom = ({ breadcrumb }) => {
  const {
    openSidebarMobile,
    setOpenSidebarMobile,
    sidebarMinimized,
    setSidebarMinimized,
  } = useContext(SidebarContext);

  return (
    <>
      <nav className="navbar-custom">
        <div className="left">
          <div
            className="sidebar-toggle-desktop"
            onClick={() => setSidebarMinimized(sidebarMinimized ? false : true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="sidebar-toggle-mobile"
            onClick={() =>
              setOpenSidebarMobile(openSidebarMobile ? false : true)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb desktop ps-3">{breadcrumb}</ol>
          </nav>
        </div>
        <div className="logo-mobile">
          <h2 className="m-0">Apps Karyawan</h2>
        </div>
        <div className="right">
          <p className="text-muted m-0">
            Halo <u>User!</u>
          </p>
          <div className="menu">
            <div className="dropdown">
              <img
                className="dropdown-toggle"
                src="/svg/person-fill.svg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to="/profile"
                    className={`dropdown-item ${({ isActive }) =>
                      isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-user fa-sm"></i>
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/todolist"
                    className={`dropdown-item ${({ isActive }) =>
                      isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-list-ul fa-sm"></i>
                    <span>To do list</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/activitylog"
                    className={`dropdown-item ${({ isActive }) =>
                      isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-cogs fa-sm"></i>
                    <span>Activity Log</span>
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/logout"
                    className={`dropdown-item ${({ isActive }) =>
                      isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-sign-out-alt fa-sm"></i>
                    <span>Logout</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mobile ps-3">{breadcrumb}</ol>
      </nav>
    </>
  );
};

NavbarCustom.propTypes = {
  breadcrumb: node,
};

export default NavbarCustom;
