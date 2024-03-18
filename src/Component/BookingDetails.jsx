import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/BookingDetails.scss";
// import Spinner from "../Pages/Spinner";
import { Link } from "react-router-dom";

const BookingDetails = () => {
  let [bookings, setBookings] = useState([]);
  let [roundTripBookings, setRoundTripBookings] = useState([]);
  let [localTripBookings, setLocalTripBookings] = useState([]);
  let [airportTripBookings, setAirportTripBookings] = useState([]);
  database();

  //OneWay Booking API :
  useEffect(() => {
    axios
      .get("https://premium-drop-taxi-server.onrender.com/bookings")
      .then((responce) => {
        setBookings(responce.data.data);
        console.log(responce.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //RoundTrip Booking API:
  useEffect(() => {
    axios
      .get("https://premium-drop-taxi-server.onrender.com/roundTripBookings")
      .then((responce) => {
        setRoundTripBookings(responce.data.data);
        console.log(responce.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  //Local Booking API
  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://premium-drop-taxi-server.onrender.com/localTripBookings")
      .then((responce) => {
        setLocalTripBookings(responce.data.data);
        console.log(responce.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //Airport Booking API :
  useEffect(() => {
    axios
      .get("https://premium-drop-taxi-server.onrender.com/airportTripBookings")
      .then((responce) => {
        setAirportTripBookings(responce.data.data);
        console.log(responce.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <div className="booking_container">
        <div className="container_box">
          <div className="Booking_list_container">
            {bookings.map((booking, index) => (
              <div className="list" key={booking._id}>
                {/* <div className="count">
                <h3>{index+1}</h3>
              </div> */}
                <div className="pickup">
                  <h3>PickUp Address </h3>
                  <h4>{booking.pickUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Drop Address </h3>
                  <h4>{booking.dropUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Date of Picking </h3>
                  <h4>{booking.date}</h4>
                </div>
                <div className="pickup">
                  <h3>PickUp Time </h3>
                  <h4>{booking.time}</h4>
                </div>
                <div className="pickup">
                  <h3>Mobile Number </h3>
                  <h4>{booking.mobile}</h4>
                </div>

                <div className="actions">
                  <div className="delete">
                    <Link to={`/booking/delete/${booking._id}`}>
                      <i class="uil uil-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            ;
            {roundTripBookings.map((booking, index) => (
              <div className="list" key={booking._id}>
                {/* <div className="count">
                <h3>{index+1}</h3>
              </div> */}
                <div className="pickup">
                  <h3>PickUp Address </h3>
                  <h4>{booking.pickUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Drop Address </h3>
                  <h4>{booking.dropUp}</h4>
                </div>
                <div className="pickup">
                  <h3>FromDate of Picking </h3>
                  <h4>{booking.fromDate}</h4>
                </div>
                <div className="pickup">
                  <h3>ToDate of Droping </h3>
                  <h4>{booking.toDate}</h4>
                </div>
                <div className="pickup">
                  <h3>PickUp Time </h3>
                  <h4>{booking.RoundTime}</h4>
                </div>
                <div className="actions">
                  <div className="delete">
                    <Link to={`/booking/delete/${booking._id}`}>
                      <i class="uil uil-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            ;
            {localTripBookings.map((booking, index) => (
              <div className="list" key={booking._id}>
                {/* <div className="count">
                <h3>{index+1}</h3>
              </div> */}
                <div className="pickup">
                  <h3>PickUp Address </h3>
                  <h4>{booking.LocalPickUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Date of Picking </h3>
                  <h4>{booking.LocalDate}</h4>
                </div>
                <div className="pickup">
                  <h3>PickUp Time </h3>
                  <h4>{booking.LocalTime}</h4>
                </div>
                <div className="actions">
                  <div className="delete">
                    <Link to={`/booking/delete/${booking._id}`}>
                      <i class="uil uil-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            ;
            {airportTripBookings.map((booking, index) => (
              <div className="list" key={booking._id}>
                {/* <div className="count">
                <h3>{index+1}</h3>
              </div> */}
                <div className="pickup">
                  <h3>Trip Selected </h3>
                  <h4>{booking.TripType}</h4>
                </div>
                <div className="pickup">
                  <h3>PickUp Address </h3>
                  <h4>{booking.AirportPickUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Drop Address </h3>
                  <h4>{booking.AirportDropUp}</h4>
                </div>
                <div className="pickup">
                  <h3>Date of Picking </h3>
                  <h4>{booking.AirportDate}</h4>
                </div>
                <div className="pickup">
                  <h3>PickUp Time </h3>
                  <h4>{booking.AirPortTime}</h4>
                </div>

                <div className="actions">
                  <div className="delete">
                    <Link to={`/booking/delete/${booking._id}`}>
                      <i class="uil uil-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
