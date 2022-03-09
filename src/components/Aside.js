import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaSignOutAlt} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import sidebarBg from './assets/bg2.jpg';
import useAuth from '../cores/useAuth'

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const nevigate = useNavigate()
  const { logout } = useAuth();
  const logOut = async () => {
    await logout().then(() => {
      nevigate('/login', { replace: true });
    });
  }
  return (
    <ProSidebar
    //   image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Main Menu
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            <Link to={'/'}>Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}><Link to={'/product'}>Product</Link></MenuItem>
          <MenuItem onClick={logOut} icon={<FaSignOutAlt />}>Logout</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;