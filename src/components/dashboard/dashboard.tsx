import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.scss"
import { Avatar, Button, Col, Row } from 'antd'

import editIcon from "../../assets/icons/edit-pencil.svg"

import docsIcon from "../../assets/images/docs.png"
import warningIcon from "../../assets/images/warning.png"

import motorbikeIcon from "../../assets/images/motorbike.png"
import shopsIcon from "../../assets/images/shops.png"


const applyJobsData = [
  {
    jobTitle: "Rider",
    icon: motorbikeIcon,
    link: "../"
  },
  {
    jobTitle: "Store Reg.",
    icon: shopsIcon,
    link: "../"
  },
  {
    jobTitle: "Franchise Reg.",
    icon: shopsIcon,
    link: "../"
  },
]

const Dashboard = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);


  return (
    <div className="dashboard-main-wrapper">
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Dashboard</h3>
          <div className='head-ins'>
            <Button className='service-quality'>PSS-SQ-level : <strong>High</strong></Button>
          </div>
        </div>

      </div>
      <br />
      <Row gutter={[20, 20]}>
        <Col sm={24} md={24} lg={12}>
          <div className="user-profile-overview-card">
            <h2>Profile</h2>
            <div className="user-info-wrapper">
              <Avatar size={55} icon={<img src="https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_man_beard_brown_hair_boy_people_icon_159121.png" alt="" />} />
              <h3>Jhon Doe</h3>
              <Button className='edit-btn'><img src={editIcon} width={20} height={20} alt="" /></Button>
            </div>
            <div className="oth-info">
              <div className="gripper-list"><p className='label-hd'>Email</p><p>jhon.doe@mail.com</p></div>
              <div className="gripper-list"><p className='label-hd'>Phone</p><p>000 000000 0</p></div>
            </div>
          </div>

          <div className="quick-apply">
            <h3>Quick Apply</h3>

            <div className="apply-card-wrapper">
              {
                applyJobsData.map((item) => (
                  <div className="apply-card-bx">
                    <div className="apply-icon">
                      <img src={item.icon} width={30} height={30} alt="" />
                    </div>
                    <div className='heading-apply'>
                      <p>Apply for</p>
                      <h5>{item.jobTitle}</h5>
                    </div>
                    <Button className='apply-btn'>Apply</Button>
                  </div>
                ))
              }


            </div>

          </div>

        </Col>
        <Col sm={24} md={24} lg={12}>
          <div className="info-services-tasks">
            <h3>Todos</h3>
            <div className="wrapper-todos">
              <div className="card-todos">
                <div className="left-ar">
                  <img src={docsIcon} width={20} height={20} alt="" />
                  <p>Upload PSS KYC <span><em>Required</em></span> </p>
                </div>
                <div className="right-ar">
                  Click Here
                </div>
              </div>
              <div className="card-todos">
                <div className="left-ar">
                  <img src={warningIcon} width={20} height={20} alt="" />
                  <p>Complete Personal Information <span><em>Required</em></span> </p>
                </div>
                <div className="right-ar">
                  Click Here
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>


      <br />
      <br />
      <br />

    </div>
  )
}

export default Dashboard