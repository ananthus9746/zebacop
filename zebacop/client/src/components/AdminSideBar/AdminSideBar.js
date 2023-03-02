import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AdminSideBar.css'
import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaTh
} from 'react-icons/fa'


function AdminSideBar() {

    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>setIsOpen(!isOpen)

    const [isMobile, setIsMobile] = useState(0)

    const [width, setWidth] = useState(window.innerWidth);
  
  
    const updateDimensions = () => {
      setWidth(window.innerWidth);
  
    }
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
  
    console.log("width..", width)
  
    useEffect(() => {
        
      if (width < 700) {
        console.log("mobile")

        toggle(true)
        setIsOpen(isOpen)
      }
      else{
        console.log("desktop")
        toggle()

      

      }
     
    }, [width])



  

    const menuItems=[
        {
            path:"/admin",
            name:"Applications",
            icon:<FaTh/>
        },
        {
            path:"/admin/approved",
            name:"Approved",
            icon:<FaCommentAlt/>
        }, 
        {
            path:"/admin/pending",
            name:"Cued",
            icon:<FaTh/>
        },
         {
            path:"/admin/progrssing",
            name:"progrssing",
            icon:<FaTh/>
        },
       
        {
            path:"/admin/ended",
            name:"ended",
            icon:<FaTh/>
        },

        {
            path:"/admin/rejected",
            name:"rejected",
            icon:<FaTh/>
        },
        {
            path:"/admin/editProject",
            name:"Edit/Update project",
            icon:<FaTh/>
        },
        {
            path:"/admin/addPartner",
            name:"Add-partners",
            icon:<FaTh/>
        },
        
    ]


    return (

                <div style={{width:isOpen?`300px`:`50px`}} className="sidebar">
                    <div className="top_section">
                        <h1 style={{display:isOpen?"block":"none"}}  className='logo'>logo</h1>
                        <div style={{marginLeft:isOpen?"140px":"0px"}}  className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                   {
                    menuItems.map((item,index)=>
                        <NavLink to={item.path} key={index} className='link' >
                            <div className="icon">{item.icon}</div>
                            <div  style={{display:isOpen?"block":"none"}}  className="link_text">{item.name}</div>
                        </NavLink>
                    )
                   }
                </div>

    )
}

export default AdminSideBar

