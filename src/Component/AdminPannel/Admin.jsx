import React, { useState, useEffect } from "react";
import "./Admin.scss";
import SideBar from "../Sidebar/SideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import sedan from "/src/assets/sedan/6.png";
import BookingDetails from "../BookingDetails";
const Admin = () => {
  let [sidebarClose, setSideBarClose] = useState(true);
  let [vehicles, setVehicles] = useState([]);
  let [bookings, setBookings] = useState([]);
  let [vehicle, setVehicle] = useState(true);
  let [booking, setBooking] = useState(false);
  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://premium-drop-taxi-server.onrender.com/vehicles")
      .then((responce) => {
        setVehicles(responce.data.data);
  
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    // setLoading(true);

    axios
      .get("https://premium-drop-taxi-server.onrender.com/bookings")
      .then((responce) => {
        setBookings(responce.data.data);
     
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        // setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="adminpannel_container">
        <div
          className="sidebar_open"
          id={!sidebarClose ? 'menubarHide':'menubarShow'}
          onClick={() => {
            setSideBarClose(false);
          }}
        >
          <i className="uil uil-bars"></i>
        </div>
        <div className="left">
          <SideBar
            vehicle={vehicle}
            booking={booking}
            setVehicle={setVehicle}
            setBooking={setBooking}
            sidebarClose={sidebarClose}
            setSideBarClose={setSideBarClose}
          />
        </div>

        <div className="right">
          {vehicle ? (
            <div className="vehicle_details">
              <div className="title">
                <h4>Vehicle Details</h4>
              </div>

              <div className="vehicle_container">
                <div className="add_vehicle_action">
                  <Link to="/vehicle/create">
                    <button>Add New Vehicles</button>
                  </Link>
                </div>

                <div className="vehicle_list_container">
                  {vehicles.map((vehicle, index) => (
                    <div className="list" key={vehicle._id}>
                      <div className="vehicle_title">
                        <h3>{vehicle.title}</h3>
                      </div>
                      <div className="vehicle_image">
                        <img src={sedan} alt="image" />
                      </div>

                      <div className="vehicle_amount">
                        <div className="km">
                          <h3> 1 Km</h3>
                        </div>
                        <div className="icons">
                          <i className="uil uil-angle-double-right"></i>
                        </div>
                        <div className="rate">
                          <h3>{vehicle.amount} Rs</h3>
                        </div>
                      </div>

                      <div className="actions">
                        <div className="edit">
                          <Link to={`/vehicle/edit/${vehicle._id}`}>
                            <i className="uil uil-pen"></i>
                          </Link>
                        </div>
                        <div className="delete">
                          <Link to={`/vehicle/delete/${vehicle._id}`}>
                            <i class="uil uil-trash-alt"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {booking ? (
            <div className="booking_details">
              <div className="title">
                <h4>Booking Details</h4>
              </div>
              <div className="booking_container">
                {bookings.map((booking) => (
                  <div className="list" key={booking._id}>
                    <div className="pickup">
                      <h2>PickUp Address</h2>
                      <p>{booking.pickUp}</p>
                    </div>
                    <div className="dropup">
                      <h2>Dropping Destination</h2>
                      <p>{booking.dropUp}</p>
                    </div>
                    <div className="date">
                      <h2>Booking Date</h2>
                      <p>{booking.date}</p>
                    </div>
                    <div className="time">
                      <h2>Booking Time</h2>
                      <p>{booking.time}</p>
                    </div>
                    <div className="mobile">
                      <h2>Mobile Number</h2>
                      <p>{booking.mobile}</p>
                    </div>

                    <div className="actions">
                      <div className="delete">
                        <Link to={`/booking/delete/${booking._id}`}>
                          <i className="uil uil-trash-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
