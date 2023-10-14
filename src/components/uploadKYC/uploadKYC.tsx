import React, { useState } from 'react'
import "./uploadKYC.scss"
import { Button, Image } from 'antd'
import CommonNote from '../../shared/commonNote/commonNote';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const UploadKYC = () => {

  const [idVerificationValue, setIdVerificationValue] = useState();
  const [frontImage, setFrontImage] = useState<any>(null);
  const [backImage, setBackImage] = useState<any>(null);

  const handleFrontImageChange = (e: any) => {
    const file = e.target.files[0];
    setFrontImage(URL.createObjectURL(file));
  };

  const handleBackImageChange = (e: any) => {
    const file = e.target.files[0];
    setBackImage(URL.createObjectURL(file));
  };


  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setIdVerificationValue(e.target.value);
  };

  return (
    <div className='upload-kyc-main-wrapper'>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <h3>Upload KYC</h3>
        <div className='head-ins'>
          <Button className='info-hd-badge'>KYC Status : <strong>Not Applied</strong></Button>
        </div>
      </div>


      {/* <div>
        <label htmlFor="frontImage">Front Side Image:</label>
        <input type="file" id="frontImage" accept="image/*" onChange={handleFrontImageChange} />
        {frontImage && <img src={frontImage} alt="Front Side" width="200" />}
      </div>

      <div>
        <label htmlFor="backImage">Back Side Image:</label>
        <input type="file" id="backImage" accept="image/*" onChange={handleBackImageChange} />
        {backImage && <img src={backImage} alt="Back Side" width="200" />}
      </div> */}
      <CommonNote content='Please upload clear images for quick processings' />

      <div className="upload-wrapper-cont" style={{ marginTop: "30px" }}>
        <div className="head">
          <h3>Id Verification</h3>
          <h5>Select card type</h5>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Radio.Group onChange={onChange} value={idVerificationValue}>
            <Radio value={"nationalId"}><span style={{ color: "#8e44ad" }}>National ID card</span></Radio>
            <Radio value={"passport"}><span style={{ color: "#8e44ad" }}>Passport</span></Radio>
            <Radio value={"drivingLicense"}><span style={{ color: "#8e44ad" }}>Driving License</span></Radio>
          </Radio.Group>
        </div>

        {idVerificationValue &&
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <label htmlFor="frontImage" className='common-btn' >
              {frontImage ? "Change (Front Side Image) " : "Front Side"}
            </label>
            <input type="file" id="frontImage" accept="image/*" onChange={handleFrontImageChange} hidden />
            <label htmlFor="backImage" className='common-btn'>
              {backImage ? "Change (Back Side Image)" : 'Back Side'}
            </label>
            <input type="file" id="backImage" accept="image/*" onChange={handleBackImageChange} hidden />
          </div>}

        <div style={{ display: "flex", width: "90%", alignItems: "center", gap: "10px", marginTop: "20px" }}>
          {frontImage && <Image style={{ borderRadius: "8px" }} src={frontImage} alt="Front Side" width={100} height={100} />}
          {backImage && <Image style={{ borderRadius: "8px" }} src={backImage} alt="Back Side" width={100} height={100} />}
        </div>

      </div>

      <div className="upload-wrapper-cont" style={{ marginTop: "10px" }}>
        <div className="head">
          <h3>Face Verification</h3>
          <h5>Select card type</h5>
        </div>
        <br />
        <Button className='common-btn'>Start Face Verification</Button>
      </div>

    </div>
  )
}

export default UploadKYC