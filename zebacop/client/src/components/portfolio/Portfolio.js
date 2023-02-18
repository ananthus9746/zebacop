import React, { useState } from 'react'
import SwipperSlide from '../swipper/SwipperSlide'
import "./portfolio.css"
function Portfolio(props) {
  console.log("props...prtdolio",props.name)
  const [partners,setPartner]=useState()
  if(props.partners){

  }
  return (
    <div className='portfolio_silder'>
        <div className="portfolio_head">
            <p>{props.name}</p>
        </div>

              <SwipperSlide />
    </div>
  )
}

export default Portfolio