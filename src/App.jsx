import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ShowVehicle from "./Component/ShowVehicle";
import CreateVehicle from "./Component/CreateVehicle";
import EditVehicle from "./Component/EditVehicle";
import DeleteVehicle from "./Component/DeleteVehicle";

// import Booking from "./Component/Booking_Cab/Booking";

import Admin from "./Component/AdminPannel/Admin";

import BookingForm from "./Component/BookingForm";

import DeleteBooking from "./Component/DeleteBooking";
import BookNowForm from "./Component/Book_Now_Form/BookNowForm";
import { motion as m } from "framer-motion";
import dayjs from "dayjs";
import Calendar from "./Component/Calendar/Calendar";
import VehicleList from "./Component/VehicleList/VehicleList";
import WatsAppMessage from "./Component/WatsupMessage";
import Time from "./Component/Time/Time";
import AnimatedForm from "./Component/Input";

const App = () => {
  //Date formate all forms:
  let currentDate = dayjs();
  let [date, setDate] = useState(currentDate);
  console.log(date)
  let [fromDate, setFromDate] = useState(currentDate);
  let [toDate, setToDate] = useState(currentDate);
  let [LocalDate, setLocalDate] = useState(currentDate);
  let [AirportDate, setAirportDate] = useState(currentDate);

  //Calendar open close states :

  let [closeCalendar, setCloseCalendar] = useState(false);
  let [fromCalendar, setFromCalendar] = useState(false);
  let [toCalendar, setToCalendar] = useState(false);
  let [localCalendar, setLocalCalendar] = useState(false);
  let [airportCalendar, setAirportCalendar] = useState(false);
  let [TimeShow, setTimeShow] = useState(false);

  let calendar_animation = {
    hide: {
      opacity: 0,
      scale: 0.5,
      y: -500,
      transition: { duration: 1, type: "spring" },
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <>
      <div className="app_container">
        <Routes>
          <Route
            path="/"
            element={
              <BookingForm
                date={date}
                setDate={setDate}
                fromDate={fromDate}
                toDate={toDate}
                LocalDate={LocalDate}
                AirportDate={AirportDate}
                setAirportDate={setAirportDate}
                setFromDate={setFromDate}
                setToDate={setToDate}
                setLocalDate={setLocalDate}
                closeCalendar={closeCalendar}
                setCloseCalendar={setCloseCalendar}
                calendar_animation={calendar_animation}
                fromCalendar={fromCalendar}
                setFromCalendar={setFromCalendar}
                toCalendar={toCalendar}
                setToCalendar={setToCalendar}
                localCalendar={localCalendar}
                setLocalCalendar={setLocalCalendar}
                airportCalendar={airportCalendar}
                setAirportCalendar={setAirportCalendar}
                TimeShow={TimeShow}
                setTimeShow={setTimeShow}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar
                closeCalendar={closeCalendar}
                setCloseCalendar={setCloseCalendar}
                fromCalendar={fromCalendar}
                setFromCalendar={setFromCalendar}
                toCalendar={toCalendar}
                setToCalendar={setToCalendar}
                localCalendar={localCalendar}
                setLocalCalendar={setLocalCalendar}
                calendar_animation={calendar_animation}
                date={date}
                setDate={setDate}
                fromDate={fromDate}
                LocalDate={LocalDate}
                setLocalDate={setLocalDate}
                setFromDate={setFromDate}
                toDate={toDate}
                setToDate={setToDate}
                AirportDate={AirportDate}
                setAirportDate={setAirportDate}
                airportCalendar={airportCalendar}
                setAirportCalendar={setAirportCalendar}
              />
            }
          />
          <Route path="/vehicle" element={<VehicleList />} />
          <Route
            path="/time"
            element={<Time TimeShow={TimeShow} setTimeShow={setTimeShow} />}
          />
          <Route path="/input" element={<AnimatedForm />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/bookNow" element={<BookNowForm />} />
          <Route path="/vehicle/create" element={<CreateVehicle />} />
          <Route path="/vehicle/detail/:id" element={<ShowVehicle />} />
          <Route path="/vehicle/edit/:id" element={<EditVehicle />} />
          <Route path="/vehicle/delete/:id" element={<DeleteVehicle />} />
          <Route path="/booking/delete/:id" element={<DeleteBooking />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
