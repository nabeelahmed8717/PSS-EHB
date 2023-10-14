import { Button, Tabs, TabsProps } from 'antd';
import React from 'react'
import MainProfile from './mainProfile/mainProfile';

const UserProfile = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Main Profile',
      children: <MainProfile/>,
    },
    {
      key: '2',
      label: 'Seller Profile',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Marketing Profile',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <div>
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Dashboard</h3>
          <div className='head-ins'>
            <Button className='info-hd-badge'>Profile Completion : <strong>20%</strong></Button>
          </div>
        </div>

      </div>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default UserProfile