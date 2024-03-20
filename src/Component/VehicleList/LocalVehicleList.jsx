import React, { useState,useRef } from "react";
import "./VehicleList.scss";
import Dzire from "../../assets/Vehicle_list/swiftdzire.png";
import Ertiga from "../../assets/Vehicle_list/ertiganew.png";
import Eitios from "/src/assets/Vehicle_list/ETIOS.png";
import Xylo from "/src/assets/Vehicle_list/XYLO.jpg";
import Innova from "/src/assets/Vehicle_list/INNOVA.png";
import Innova_crysta from "/src/assets/Vehicle_list/INNOVA SRYSTA.png";
import { Link, useNavigate } from "react-router-dom";
import illustration from "/src/assets/booking/8.svg";
import { motion as m } from "framer-motion";
let vehicle_list = [
  {
    id: 1,
    brandName: "Dzire",
    image: Dzire,
    driver_allowance: 400,
    per_km: 14,
    illustration_Image: illustration,
    details:
      "Dzire Sedan : Offer superior comfort and good fuel economy. Also,they are affordable compared to Sports Utility Vehicles(SUVs). If you are looking to buy a new sedan, you have reached the right web page.",
    price: 1690,
  },
  {
    id: 2,
    brandName: "EITIOS",
    image: Eitios,
    per_km: 14,
    illustration_Image: illustration,
    details:
      "Eitios: Many of us often wonder about why EITIOS better than a sedan, especially when it comes to road trips. Well, in most cases the SUVs offer more space that can accommodate more people. Many SUVs have three rows of seats and therefore more passengers can fit in compared to a Sedan. The EITIOS also provide higher driving positions and therefore better visibility on the roads.",
    driver_allowance: 450,
    perKm: 18,
    price: "",
  },
  {
    id: 3,
    brandName: "ERTIGA",
    image: Ertiga,
    per_km: 19,
    illustration_Image: illustration,
    details:
      "Ertiga: The Ultimate Family-Friendly Road Tripper For those planning a road trip with the whole family, the Ertiga is an ideal choice. As a spacious and comfortable minivan, the Sienna offers ample room for passengers and cargo while also providing a smooth driving experience.",
    driver_allowance: 500,
    price: 1690,
  },
  {
    id: 4,
    brandName: "XYLO",
    image: Xylo,
    per_km: 19,
    illustration_Image: illustration,
    details:
      "Xylo : Yes, Xylo taxis are very comfortable for outstation travel. They are spacious, have ample legroom, and offer a smooth ride. The Innova is also a very reliable car, which is important for long-distance travel.",
    driver_allowance: 600,
    price: 2470,
  },
  {
    id: 5,
    brandName: " INNOVA",
    image: Innova,
    per_km: 23,
    illustration_Image: illustration,
    details:
      "Innova : Yes, Innova taxis are very comfortable for outstation travel. They are spacious, have ample legroom, and offer a smooth ride. The Innova is also a very reliable car, which is important for long-distance travel.",
    driver_allowance: 600,
    price: 2470,
  },
  {
    id: 6,
    brandName: "INNOVA CRYSTA",
    image: Innova_crysta,
    per_km: 23,
    illustration_Image: illustration,
    details:
      "Innova Crysta : Yes, Innova crysta taxis are very comfortable for outstation travel. They are spacious, have ample legroom, and offer a smooth ride. The Innova is also a very reliable car, which is important for long-distance travel.",
    driver_allowance: 600,
    price: 2470,
  },
];
let alert_anime = {
  hide: { y: -600, opacity: 0, transition: { type: "spring" } },
  show: { y: 0, opacity: 1, transition: { type: "spring" } },
};
const LocalVehicleList = ({
  vehicle_list_animation,
  localForm,
  hide,
  show,
  distance,
  duration,
  LocalPickUp,
  LocalDate,
  LocalTime,
  LocalName,
  LocalMobile
}) => {
  let navigate = useNavigate();

  const [filteredVehicle, setFilteredVehicle] = useState();
  const [charges, setCharges] = useState("");
  const [DriverAllowance, setDriverllowance] = useState("");
  let [selected, setSelected] = useState({
    id: "",
    brandName: "",
    image: "",
    driver_allowance: "",
    price: "",
  });
  const [nextBtnAlert, setNextBtnAlert] = useState(false);

      //Scroll to bottom behaviour :

      let scrollAction = useRef(null);
      const scrollToBottom = () => {
        scrollAction.current.scrollIntoView({ behavior: "smooth" });
      };

  //Filter vehicle_list:
  function handleFilter(name) {
    const value = name;
    const filtered = vehicle_list.filter((user) =>
      user.brandName.includes(value)
    );

    let price = filtered.map(
      (item) => (
        setCharges(item.price),
        setDriverllowance(item.driver_allowance),
        setSelected(item)
      )
    );

    setFilteredVehicle(filtered);
  }

  let handleLocalNext = () => {
    if (selected.brandName.length > 0) {
      setNextBtnAlert(false);
      const phoneNumber = "+91 7094588389"; // Replace with the recipient's phone number
      const message = encodeURIComponent(
        `Thanks for reaching Us! 
        \n PickUp Address : ${LocalPickUp}  , 
        \n Date of Booking : ${LocalDate} ,
        \n Booked Vehicle Name: ${selected.brandName}, 
        \n Time to Pickup : ${LocalTime},
            \n Booked Vehicle Name: ${selected.brandName},
        \n Per KM Cost : Rs : ${selected.per_km},
        \n Base Price : Rs : ${
          parseInt(selected.per_km) * parseInt(distance)
        },
        \n Driver Allowance : Rs : ${selected.driver_allowance},
        \n Toll + Permit Extra charges Applicable ,
        \n Total Estimated Amount : Rs : ${charges + DriverAllowance},
        \n Client Name  : ${LocalName} ,
        \n Client Mobile Number : ${LocalMobile}
         `
      );
      const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
      };
      handleClick();
    } else {
      setNextBtnAlert(true);
    }
  };
  return (
    <>
      <m.div className="vehicleList_container">
        <div className="trip_distance">
          <h3>This Trip Covers - KM</h3>
          <div className="distance">
            <p>
              Total Distance - <span>{distance}</span>
            </p>
            <p>
              Total Durations - <span>{duration}</span>
            </p>
          </div>
        </div>
        <div
          className="vehicle_list"
          onClick={() => {
            // scrollToBottom(),
            window.scrollBy({
              top: 4000,
              left: 0,
              behavior: "smooth",
            });
            setNextBtnAlert(false);
          }}
        >
          {vehicle_list.map((vehicle, index) => (
            <div
              className="list"
              key={index}
              id={
                selected.brandName === vehicle.brandName
                  ? "selected"
                  : "unselected"
              }
              onClick={() => {
                handleFilter(vehicle.brandName);
              }}
            >
              <div className="charges">
                <p>
                  Per Km Cost -&nbsp; <span> Rs{vehicle.per_km}</span>
                </p>
              </div>

              <div className="bottom">
                <div className="vehicle">
                  <img src={vehicle.image} alt="sedan" />
                  <button onClick={() => handleFilter(vehicle.brandName)}>
                    Select
                  </button>
                </div>
                <div className="price_details">
                  <h3>{vehicle.brandName}</h3>
                  <p>
                    Base Price - ₹{" "}
                    {parseInt(vehicle.per_km) * parseInt(distance)}
                  </p>
                  <div className="route">
                    <p>{LocalPickUp}</p>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/advance.png"
                      alt="advance"
                    />
                    <p>{}</p>
                  </div>
                </div>
                <div className="details">
                  <img src={vehicle.illustration_Image} alt="illustration" />
                  <p>
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/assignment-late.png"
                      alt="assignment-late"
                    />{" "}
                    {vehicle.details.slice(0, 120)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected.brandName.length > 0 ? (
          <m.div className="Estimate_container" ref={scrollAction}>
            <div className="estimate_title">
              <h4>Estimate :</h4>
              <p>₹ {charges + DriverAllowance}</p>
            </div>
            <div className="allowance">
              <p>
                Base charges + Driver Allowance
                <span> Rs.{DriverAllowance}</span>
              </p>
            </div>
            <div className="description">
              <p>
                <span>*</span>Inclusive of GST. The actual bill might differ
                based on actual distance travelled. Hill-station charges,
                inter-state permits, Toll, State permit and Parking charges are
                extra.
              </p>
            </div>
          </m.div>
        ) : (
          ""
        )}
        <m.div className="Alert_box">
          <m.div
            className="alert_box"
            variants={alert_anime}
            animate={nextBtnAlert ? "show" : "hide"}
          >
            <div className="remove" onClick={() => setNextBtnAlert(false)}>
              <i className="uil uil-times"></i>
            </div>
            <p>Alert! Select your trip vehicle...</p>
          </m.div>
        </m.div>
        <div className="actions">
          <div className="previous" onClick={() => handleLocalNext()}>
            <button>Book Now</button>
          </div>
          {/* <div className="next" onClick={() => handleNext()}>
            <button>Next</button>
          </div> */}
        </div>
      </m.div>
    </>
  );
};

export default LocalVehicleList;
