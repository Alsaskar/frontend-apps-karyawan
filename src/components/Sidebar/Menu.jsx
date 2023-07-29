import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { bool } from 'prop-types';
import { useContext } from 'react';
import { SidebarContext } from '../../Router';

const Menu = ({ sidebarMinimized }) => {
  const { dropdownActive, setDropdownActive } = useContext(SidebarContext);

  const handleClick = (event) => {
    const active = event.target.id;

    if (active === dropdownActive) {
      setDropdownActive('');
    } else {
      setDropdownActive(active);
    }
  };

  return (
    <div
      className={`menu h-100 bg-white shadow ${
        sidebarMinimized ? 'minimized' : ''
      }`}
    >
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="icon fas fa-fw fa-tachometer-alt"></i>
            <span className={sidebarMinimized ? 'minimized' : ''}>
              Dashboard
            </span>
          </NavLink>
        </li>
        <Dropdown
          id="1"
          label="Karyawan"
          icon="fa-users"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="/karyawan"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-table"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Data Karyawan
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tambah-karyawan"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-plus-square"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Input Karyawan
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <Dropdown
          id="2"
          label="Absensi"
          icon="fa-address-book"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="/absensi"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-table"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Data Absensi
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/absensi/add"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-plus-square"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Input Absensi
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <Dropdown
          id="3"
          label="Task Job"
          icon="fa-tasks"
          handleClick={handleClick}
          dropdownActive={dropdownActive}
          sidebarMinimized={sidebarMinimized}
        >
          <li>
            <NavLink
              to="/task-job"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-table"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Data Task Job
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/task-job/add"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className="icon fas fa-fw fa-plus-square"></i>
              <span className={sidebarMinimized ? 'minimized' : ''}>
                Input Task Job
              </span>
            </NavLink>
          </li>
        </Dropdown>
        <li>
          <NavLink
            to="/lainnya"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="icon fas fa-fw fa-bars"></i>
            <span className={sidebarMinimized ? 'minimized' : ''}>Lainnya</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
  sidebarMinimized: bool,
};

export default Menu;
