import React from 'react'
import './Card.css'
import { Progress } from "@material-tailwind/react";
// import TwitterIcon from '@mui/icons-material/Twitter';
import projectImage from '../../images/NFT-Site_0.jpg'



function Card() {
    return (
        <div className='card'>

            <div className="card_container">
                <div className="img_discrption_container">
                    <img src={projectImage} className='pro_img' alt="projectImage" />

                    <div className="name_discription">
                        <p id='project_name'>Nft painting</p>
                        <div className='status'>Ended</div>
                        <div className='dicription'><p>NFT Paintings is the first company in the world which offers unique opportunities related to investing in valuable paintings.</p></div>
                    </div>
                </div>

                <div className="total_rice_container">
                    <dir className="total_raise_amount">Total raises $ 50000</dir>
                    <div className='public_or_private'>Public IDO</div>
                </div>

                <div className="progrss_bar">
                    <Progress value={70} label="Completed" color='purple' />
                </div>

                <div className="raised_wapper">
                    <p>13890000/25000000 NFTP</p>
                    <p>Raised</p>
                </div>

                <div className='socia_links_and_status'>
                    <div>ICO Ended</div>
                    {/* <FontAwesomeIcon icon="fa-light fa-coffee" /> */}
                    {/* <div>Know more</div> */}
                </div>

            </div>





        </div>
    )
}

export default Card