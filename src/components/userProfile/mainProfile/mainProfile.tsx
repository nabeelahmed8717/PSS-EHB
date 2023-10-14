import React from 'react'
import "./mainProfile.scss"
import { Button, Col, Form, Image, Input, Row, Select } from 'antd'
const { Option } = Select;

const countries = [
    'Country 1',
    'Country 2',
    'Country 3',
    // Add more countries here
];

const MainProfile = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='main-profile-wrapper'>
            <div className="change-image-wrapper">
                <Image src='https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_man_beard_brown_hair_boy_people_icon_159121.png' alt='' />
                <Button className='common-btn-shd'>Change Image</Button>
            </div>

            <div style={{ borderTop: "1px solid #e7e7e9", marginTop: "20px", paddingTop: "20px" }}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    rootClassName='global-form'
                    layout="vertical">


                    <Row gutter={[20, 10]}>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Country"
                                name="country"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select placeholder="Select a country" style={{ width: '100%', height: '40px' }}>
                                    {countries.map((country, index) => (
                                        <Option key={index} value={country}>
                                            {country}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
<br />
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                            <Button className='common-btn'>Save Changes</Button>
                            </div>
                        </Col>
                    </Row>

                </Form>
            </div>

        </div>
    )
}

export default MainProfile