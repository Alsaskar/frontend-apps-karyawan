import { string, node, func, bool } from 'prop-types';

const Dropdown = ({
  id,
  label,
  handleClick,
  dropdownActive,
  icon,
  sidebarMinimized,
  children,
}) => {
  return (
    <ul>
      <li id={id} className="menu-dropdown" onClick={handleClick}>
        <i id={id} className={`icon fas fa-fw ${icon}`}></i>
        <span id={id} className={sidebarMinimized ? 'minimized' : ''}>
          {label}
        </span>
        <i
          id={id}
          className={`fas fa-solid fa-caret-down ${
            dropdownActive === id ? 'active' : ''
          } ${sidebarMinimized ? 'minimized' : ''}`}
        ></i>
      </li>
      <ul className={`submenu ${dropdownActive === id ? 'active' : ''}`}>
        {children}
      </ul>
    </ul>
  );
};

Dropdown.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  handleClick: func.isRequired,
  dropdownActive: string.isRequired,
  icon: string.isRequired,
  sidebarMinimized: bool,
  children: node,
};

export default Dropdown;
