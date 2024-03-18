import React from "react";
import "/src/Styles/Time.scss";
const Time = ({ TimeShow, setTimeShow, time, setTime }) => {
  let list = document.querySelector("li");
  let handleTime = (e) => {
    setTimeShow(false);
    console.log(e.target.innerText);
    setTime(e.target.innerText);
  };

  return (
    <>
      <div className="timer_container">
        <ul className="list">
          <li
            data-value=""
            className="option selected focus"
          >
            --Select Pickup Time--
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:00 AM"
            className="option"
          >
            1:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:15 AM"
            className="option"
          >
            1:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:30 AM"
            className="option"
          >
            1:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:45 AM"
            className="option"
          >
            1:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:00 AM"
            className="option"
          >
            2:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:15 AM"
            className="option"
          >
            2:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:30 AM"
            className="option"
          >
            2:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:45 AM"
            className="option"
          >
            2:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:00 AM"
            className="option"
          >
            3:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:15 AM"
            className="option"
          >
            3:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:30 AM"
            className="option"
          >
            3:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:45 AM"
            className="option"
          >
            3:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:00 AM"
            className="option"
          >
            4:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:15 AM"
            className="option"
          >
            4:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:30 AM"
            className="option"
          >
            4:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:45 AM"
            className="option"
          >
            4:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:00 AM"
            className="option"
          >
            5:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:15 AM"
            className="option"
          >
            5:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:30 AM"
            className="option"
          >
            5:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:45 AM"
            className="option"
          >
            5:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:00 AM"
            className="option"
          >
            6:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:15 AM"
            className="option"
          >
            6:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:30 AM"
            className="option"
          >
            6:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:45 AM"
            className="option"
          >
            6:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:00 AM"
            className="option"
          >
            7:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:15 AM"
            className="option"
          >
            7:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:30 AM"
            className="option"
          >
            7:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:45 AM"
            className="option"
          >
            7:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:00 AM"
            className="option"
          >
            8:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:15 AM"
            className="option"
          >
            8:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:30 AM"
            className="option"
          >
            8:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:45 AM"
            className="option"
          >
            8:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:00 AM"
            className="option"
          >
            9:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:15 AM"
            className="option"
          >
            9:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:30 AM"
            className="option"
          >
            9:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:45 AM"
            className="option"
          >
            9:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:00 AM"
            className="option"
          >
            10:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:15 AM"
            className="option"
          >
            10:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:30 AM"
            className="option"
          >
            10:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:45 AM"
            className="option"
          >
            10:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:00 AM"
            className="option"
          >
            11:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:15 AM"
            className="option"
          >
            11:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:30 AM"
            className="option"
          >
            11:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:45 AM"
            className="option"
          >
            11:45 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:00 PM"
            className="option"
          >
            12:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:15 PM"
            className="option"
          >
            12:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:30 PM"
            className="option"
          >
            12:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:45 PM"
            className="option"
          >
            12:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:00 PM"
            className="option"
          >
            1:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:15 PM"
            className="option"
          >
            1:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:30 PM"
            className="option"
          >
            1:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="1:45 PM"
            className="option"
          >
            1:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:00 PM"
            className="option"
          >
            2:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:15 PM"
            className="option"
          >
            2:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:30 PM"
            className="option"
          >
            2:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="2:45 PM"
            className="option"
          >
            2:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:00 PM"
            className="option"
          >
            3:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:15 PM"
            className="option"
          >
            3:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:30 PM"
            className="option"
          >
            3:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="3:45 PM"
            className="option"
          >
            3:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:00 PM"
            className="option"
          >
            4:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:15 PM"
            className="option"
          >
            4:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:30 PM"
            className="option"
          >
            4:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="4:45 PM"
            className="option"
          >
            4:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:00 PM"
            className="option"
          >
            5:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:15 PM"
            className="option"
          >
            5:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:30 PM"
            className="option"
          >
            5:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="5:45 PM"
            className="option"
          >
            5:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:00 PM"
            className="option"
          >
            6:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:15 PM"
            className="option"
          >
            6:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:30 PM"
            className="option"
          >
            6:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="6:45 PM"
            className="option"
          >
            6:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:00 PM"
            className="option"
          >
            7:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:15 PM"
            className="option"
          >
            7:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:30 PM"
            className="option"
          >
            7:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="7:45 PM"
            className="option"
          >
            7:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:00 PM"
            className="option"
          >
            8:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:15 PM"
            className="option"
          >
            8:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:30 PM"
            className="option"
          >
            8:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="8:45 PM"
            className="option"
          >
            8:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:00 PM"
            className="option"
          >
            9:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:15 PM"
            className="option"
          >
            9:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:30 PM"
            className="option"
          >
            9:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="9:45 PM"
            className="option"
          >
            9:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:00 PM"
            className="option"
          >
            10:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:15 PM"
            className="option"
          >
            10:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:30 PM"
            className="option"
          >
            10:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="10:45 PM"
            className="option"
          >
            10:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:00 PM"
            className="option"
          >
            11:00 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:15 PM"
            className="option"
          >
            11:15 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:30 PM"
            className="option"
          >
            11:30 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="11:45 PM"
            className="option"
          >
            11:45 PM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:00 AM"
            className="option"
          >
            12:00 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:15 AM"
            className="option"
          >
            12:15 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:30 AM"
            className="option"
          >
            12:30 AM
          </li>
          <li
            onClick={(e) => handleTime(e)}
            data-value="12:45 AM"
            className="option"
          >
            12:45 AM
          </li>
        </ul>
      </div>
    </>
  );
};

export default Time;
