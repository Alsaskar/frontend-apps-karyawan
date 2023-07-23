import { useContext } from 'react';
import { SidebarContext } from '../../Router';
import './style.scss';

const BgOverlay = () => {
  const { openSidebarMobile, setOpenSidebarMobile } =
    useContext(SidebarContext);

  if (openSidebarMobile) {
    document.body.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
  }

  return (
    <div
      className={`bg-overlay ${openSidebarMobile ? 'overlay' : ''}`}
      onClick={() => setOpenSidebarMobile(openSidebarMobile ? false : true)}
    ></div>
  );
};

export default BgOverlay;
