import React from 'react'
import "./sideBar.scss"
import { Avatar, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import orderIcon from "../../assets/icons/orders.svg"
import productsIcon from "../../assets/icons/products.svg"
import settingsIcon from "../../assets/icons/settings.svg"
import packagesIcon from "../../assets/icons/packages.svg"
import marketingIcon from "../../assets/icons/marketing.svg"
import analysisIcon from "../../assets/icons/analysis.svg"
import guideIcon from "../../assets/icons/memo-pad.svg"
import manageUsersIcon from "../../assets/icons/user-gear.svg"
import profileIcon from "../../assets/icons/user.svg"

import {
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(<div onClick={() => navigate('./home')}>Dashboard</div>, '1', <PieChartOutlined />),
    getItem(<div onClick={() => navigate('./user-Profile')}>Manage Profile</div>, '2', <img src={profileIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./upload-kyc')}>Upload KYC</div>, '3', <img src={profileIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./packages')} >Packages</div>, '7', <img src={packagesIcon} width={15} height={15} alt="" />),
    getItem(<div>Reports</div>, '11', <img src={analysisIcon} width={15} height={15} alt="" />),
    getItem(<div>User Guides</div>, '12', <img src={guideIcon} width={15} height={15} alt="" />),
  ];

  return (
    <div className='main-sidebar-wrapper'>
      <div className="logo-main-area" style={{ color: "#fff" }}>
        <h3>PSS</h3>
        <p>Personal Security Service</p>
      </div>
      <div className="user-utils-wrapper">
        {/* <div className="user-utils-main-inner">
          <Avatar size={64} icon={<UserOutlined />} />
          <h3>Apex Limited</h3>
        </div> */}

        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
          items={items}
        />
      </div>

    </div>
  )
}

export default SideBar