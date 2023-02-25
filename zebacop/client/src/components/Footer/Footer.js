import React from "react";
import "./Footer.css";
import companyLog from "../../../src/images/logo.png";
import { TwitterOutlined } from "@ant-design/icons";
import { FaEnvelope, FaTelegramPlane,FaDiscord, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="FooterWrapper">
      <div className="footer_Section_wrapper">

        <div className="footer_logo_detail_wrapper">
          <img src={companyLog} alt="" className="footer_company_logo" />
          <p className="footer_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure
            sequi distinctio hic. Asperiores pariatur fugiat expedita molestias
            corrupti nesciunt impedit doloribus illum amet id nihil, officia
            enim ad quos.
          </p>
        </div>

        <div className="footer_sociallinks_wrapper">
          <TwitterOutlined  className="footer_socail_links"/>
          <FaEnvelope  className="footer_socail_links"/>
          <FaTelegramPlane  className="footer_socail_links"/>
          <FaDiscord  className="footer_socail_links"/>
          <FaFacebook  className="footer_socail_links"/>
        </div>
        
      </div>

    </div>
  );
}

export default Footer;
