import { useState } from 'react';
import './style.scss';

const BackToTop = () => {
  const [bttShow, setBttShow] = useState(false);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setBttShow(true);
    } else {
      setBttShow(false);
    }
  };

  const top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <svg
      onClick={top}
      xmlns="http://www.w3.org/2000/svg"
      className={`bi bi-arrow-up-square-fill btt ${bttShow ? 'show' : ''}`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 11.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      />
    </svg>
  );
};

export default BackToTop;
