import { TwitterOutlined } from '@ant-design/icons'
import React from 'react'
import { FaEnvelope, FaTelegramPlane, } from 'react-icons/fa'
import './ProjectDetailsContainer.css'
import logo from '../../../src/images/konzept-von-nicht-fungiblen-token-einzigartigen-digitalen-gegenstaenden-fuer-krypto-kunst-und-blockchain-technologie_278395-470.webp'


function ProjectDetailsContainer() {
  return (
    <div className='ProjectDetailsContainerWrapper'>


        <div className="details_image_name">
            <img className='detail_img' src={logo} alt="" />
            <p className='detail_name'>Name</p>
        </div>

        <div className="detail_status">
            <p className='detal_text_status'>Project status</p>
            <p className='detail_status_txt'>Ended</p>
        </div>

        <div className="detail_discription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolores similique culpa, rerum iure distinctio totam repudiandae minus at eligendi excepturi impedit soluta libero atque debitis laborum hic quas. Quaerat.
        </div>

        <div className="details_date">
            <p>Start date and end date: 25/10/2023 - 27/11/2023</p>
        </div>

        <div className='details_social_links'>
        <TwitterOutlined className='social_link'/>
        <FaTelegramPlane  className='social_link'/>
        <FaEnvelope  className='social_link'/>
        </div>

        <div className="detail_connectWallet_btn_div">
            <button className='detail_connect_wallet_btn'>Connect wallet</button>
        </div>


    </div>
  )
}

export default ProjectDetailsContainer