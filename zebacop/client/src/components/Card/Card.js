import React from 'react'
import './Card.css'
import { Progress } from "@material-tailwind/react";
// import TwitterIcon from '@mui/icons-material/Twitter';
import projectImage from '../../images/NFT-Site_0.jpg'

import { NavLink, Link } from "react-router-dom";

import ReadMoreReact from 'read-more-react';





function Card(props) {


    // {props.obj&&console.log("obj in card from allproject tab..",props.obj.projectName)}

    console.log("t tab..", process.env.REACT_APP_API_URL)

    const MAX_LENGTH = 20;


    return (
        <div className='card'>

            <div className="card_container">
                <div className="img_discrption_container">

                    <img src={process.env.REACT_APP_API_URL + "/images/" + props.obj?.projectImage} className='pro_img' alt="projectImage" />


                    <div className="name_discription">
                        <p id='project_name'>{props.obj?.projectName}</p>

                        {
                            props.obj?.status === "ended" ? <div className='status'  >Ended</div> : <div className='status_started'  >Started</div>
                        }


                        <div className='dicription'>
                            {/* <p>NFT Paintings is the first company in the world which offers unique opportunities related to investing in valuable paintings.</p> */}

                            {props.obj?.discription && <ReadMoreReact text={props.obj?.discription}
                                min={30}
                                ideal={140}
                                max={150}

                                readMoreText={<Link to='/viewProject' state={{ projectDetails: props.obj }}  >
                                   Read more..
                                </Link>}
                            />}



                        </div>

                        <div>

                        </div>


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
                    <Link to='/viewProject' state={{ projectDetails: props.obj }}  >

                        <div className='knomore_btn'>Know more</div>
                    </Link>
                    {/* <FontAwesomeIcon icon="fa-light fa-coffee" /> */}
                    {/* <div>Know more</div> */}
                </div>

            </div>





        </div>
    )
}

export default Card