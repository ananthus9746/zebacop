import React from 'react'
import './Home.css'
import SwipperSlide from '../../../components/swipper/SwipperSlide'
import ProjectSlider from '../../../components/projectSlider/ProjectSlider'
import { Link } from 'react-router-dom';
import MainBanner from '../../../components/Banner/MainBanner'
import SubBanner from '../../../components/SubBanner/SubBanner';
import Portfolio from '../../../components/portfolio/Portfolio';
import TotalProjectAndCapital from '../../../components/TotalProjectAndCapital/TotalProjectAndCapital';
function Home() {
  return (
    <div className='home'>

      <div className="text_heading_wapper">
        <div class="tex_container">
          <div class="txt_heading_container">
            <p className='txt_main'>Innovative Web 3.0 <br/> IDO Launchpad</p>
            <p className='txt_sub'>by zebaco.finance</p>
          </div>
          <div className="apply_btn_container">
            <button className='btn_explore'>Explore</button>
           <Link to={'/apply'}> <button className='btn_apply'>Apply Now</button></Link>
          </div>
        </div>
      </div>


      <div className="project_wrapper">
        <ProjectSlider />
      </div>



      <MainBanner/>


      <SubBanner/>

      
      <Portfolio name={"Portfolio"}/>

      <Portfolio name={"Partners & Backers"}/>


      <TotalProjectAndCapital/>

      

    </div>


  )
}

export default Home






