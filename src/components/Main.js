import React from 'react';
// import { useIntl } from 'react-intl';
// import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
// import reactLogo from '../logo.svg';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
  props,
}) => {
  // const intl = useIntl();
  return (
    <main>
      <div className="shadow-sm p-3 top-navbar">
        <div className="btn-toggle" onClick={() => handleCollapsedChange(!collapsed)}>
          <FaBars />
        </div>
      </div>
      {/* <header className='flex'>
        <h1>MyanmarAPN</h1>
      </header> */}
      <div className='flex container p-5 flex-col'>
        <Outlet />
      </div>
      
      <footer>
        <small>
          © {new Date().getFullYear()} made with by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://venuslab.co">
            Venuslab.co
          </a>  
        </small>
      </footer>
    </main>
  );
};

export default Main;