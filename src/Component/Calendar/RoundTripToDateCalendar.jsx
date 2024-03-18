import React, { useState } from "react";
import "./Calendar.scss";
import { generateDate } from "../utils/calendar";
import cn from "../utils/cn.js";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion as m } from "framer-motion";

import { months } from "../utils/calendar";
const RoundTripToDateCalendar = ({
  date,
  setDate,
  setFromDate,
  setToDate,
  setLocalDate,
  setAirportDate,
  closeCalendar,
  setOneWay,
  setRoundTrip,
  setCloseCalendar,
  fromCalendar,
  setFromCalendar,
  toCalendar,
  setToCalendar,
  setLocalCalendar,
  setAirportCalendar,
  calendar_animation,
}) => {
  let days = ["S", "M", "T", "W", "T", "F", "S"];
  let currentDate = dayjs();

  let [today, setToday] = useState(currentDate);

  return (
    <>
      <m.div
        className="calendar_container"
        variants={calendar_animation}
        animate={closeCalendar === true ? "show" : "hide"}
      >
        <m.div className="container">
          <m.div className="top_detail">
            <div className="current_details">
              <p>
                {months[today.month()]},{today.year()}{" "}
              </p>
            </div>

            <div className="actions">
              <GrFormPrevious
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
                className="icon"
              />
              <p
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </p>
              <GrFormNext
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
                className="icon"
              />
            </div>
          </m.div>
          <div className="days">
            {days.map((day, index) => {
              return <p key={index}>{day}</p>;
            })}
          </div>
          <div className="dates">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div key={index}>
                  <p
                    className={cn(
                      currentMonth ? "" : "prev-month",
                      today ? "current_date" : "",
                      date.toDate().toString() === date.toDate().toString()
                        ? "current_day"
                        : ""
                    )}
                    id="date"
                    onClick={() => {
                      let currentDate=date.$d;
                      setToDate(currentDate.toString().slice(0, 16));
                      setCloseCalendar(false);
                      setFromCalendar(false);
                      setToCalendar(false);
                      setLocalCalendar(false);
                      setAirportCalendar(false);
                    }}
                  >
                    {date.date()}
                  </p>
                </div>
              )
            )}
          </div>
        </m.div>
      </m.div>
    </>
  );
};

export default RoundTripToDateCalendar;
