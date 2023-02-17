import React from 'react'
import './Home.css'
import SwipperSlide from '../../../components/swipper/SwipperSlide'
import ProjectSlider from '../../../components/projectSlider/ProjectSlider'
function Home() {
  return (
    <div className='home'>

    <div className="text_heading_wapper">
      <div class="tex_container">
          <div class="txt_heading_container">
            <p className='txt_main'>Innovative Web 3.0 IDO Launchpad</p>
            <p className='txt_sub'>by zebaco.finance</p>
        </div>
        <div className="apply_btn_container">
          <button className='btn_explore'>Explore</button>
          <button className='btn_apply'>Apply Now</button>
        </div>
      </div>
      </div>


    <div className="project_wrapper">
        <ProjectSlider/>
    </div>

    <SwipperSlide/>

    {/* <div className="applyIDO_wrapper">
        Apply for IDO
    </div>


    <div className="applyKOL_wrapper">
        Apply for KOL Ambassoder programmw
    </div>


    <div className="portfolio_wrapper">
        portfolio
    </div>

    <div className="partners">
        partners
    </div>


    <div className="total_project_wrapper">
        total project
    </div>

    <div className="footer_wrapper">
        footer
    </div> */}

    </div>

    
  )
}

export default Home






