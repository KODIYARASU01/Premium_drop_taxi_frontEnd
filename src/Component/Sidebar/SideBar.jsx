import React, { useState } from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const SideBar = ({vehicle,booking,setVehicle,setBooking,sidebarClose,setSideBarClose}) => {


 

  return (
    <>
      <div className="slidebar_container" id={sidebarClose ? 'sideBarClose':'sideBarOpen'}>
      <div className="sidebar_close" onClick={()=>setSideBarClose(true)}>
      <i className="uil uil-times"></i>
      </div>
   
        <div className="sidebar_title">
          <h3>Admin Dashboard</h3>
        </div>

        <div className="sidebar_lists">
          <div className="list" id={vehicle ? 'show':''} onClick={()=>{
            setVehicle(true),setBooking(false),setSideBarClose(true)
          }}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/car--v1.png"
              alt="car--v1"
            />
            <h4>Vehicle Details</h4>
          </div>

          <div className="list" id={booking ? 'show':''} onClick={()=>{
            setVehicle(false),setBooking(true),setSideBarClose(true)
          }}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/event-accepted--v1.png"
              alt="event-accepted--v1"
            />
            <h4>Booking Details</h4>
          </div>
        </div>
        <div className="navigate_to_home">
          <Link to='/'>
          <i className="uil uil-left-arrow-from-left"></i>
               <p>Home</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
