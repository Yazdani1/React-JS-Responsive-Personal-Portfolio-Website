import React,{useState} from 'react'
import "./sidebar.css"
import { FcNext,FcPrevious } from "react-icons/fc";

const Navbar = () => {

  const [expandSidebar,setExpandSidebar] = useState(false)

  const handleClick = ()=>{
    setExpandSidebar(!expandSidebar);
  }

  return (
    <div className='container-fluid sidebar-home-section'>
        <div className={expandSidebar? "sidebar-expand sidebar":"sidebar"}>
          <p onClick={handleClick} style={{backgroundColor:"red",display:"flex", justifyContent:"right", padding:"10px",cursor:"pointer", width:"fit-content"}}><FcNext size={50}/></p>
        </div>
        <div className='container home-content'>
gfdgdghjghjghjghjghjghjgh gh ghjg hjg jghj ghjghjghjghjghjgghjghjghjghjgh jgh
        </div>
    </div>
  )
}

export default Navbar