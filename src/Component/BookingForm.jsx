import React, { useEffect, useState, useRef } from "react";
import "../Styles/BookingForm.scss";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { motion as m } from "framer-motion";
import userSvg from "../assets/booking/7.svg";
import axios from "axios";

//Vehicle list Component Imported :
import VehicleList from "./VehicleList/VehicleList";
import anime1 from "../assets/booking/2.svg";
import anime2 from "../assets/booking/8.svg";

//Calendar component imported :
import Calendar from "../Component/Calendar/Calendar";
import RoundTripCalendar from "./Calendar/RoundTripCalendar";
import RoundTripToDateCalendar from "./Calendar/RoundTripToDateCalendar";
import LocalTripCalendar from "./Calendar/LocalTripCalendar";
import AirportTripCalendar from "./Calendar/AirportTripCalendar";
//Google map api :
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };
//Loader Component imported :
import Loader from "./Loader/Loader";
import RoundVehicleList from "./VehicleList/RoundVehicleList";
import LocalVehicleList from "./VehicleList/LocalVehicleList";
import AirportVehicleList from "./VehicleList/AirportVehicleList";
import Time from "./Time/Time";
import RoundTripTime from "./Time/RoundTripTime";
import LocalTripTime from "./Time/LocalTripTime";
import AirportTripTime from "./Time/AirportTripTime";

let motionForm1 = {
  hide: { y: 400, opacity: 0, transition: { duration: 0.5 } },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

let vehicle_list_animation = {
  hide: { opacity: 1, y: 0, transition: { duration: 1 } },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};
let motionForm2 = {
  hide: { y: 400, opacity: 0, transition: { duration: 0.5 } },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
let form_submit_animation = {
  hide: { opacity: 0, y: 1200, transition: { duration: 1 } },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

//Booking Component Start :

const BookingForm = ({
  setDate,
  date,
  fromDate,
  AirportDate,
  setAirportDate,
  LocalDate,
  setLocalDate,
  setFromDate,
  toDate,
  setToDate,
  closeCalendar,
  setCloseCalendar,
  fromCalendar,
  setFromCalendar,
  setAirportCalendar,
  toCalendar,
  setToCalendar,
  localCalendar,
  setLocalCalendar,
  TimeShow,
  setTimeShow,
}) => {
  const OneWayOriginRef = useRef();
  const OneWayDestinationRef = useRef();
  const RoundTripOriginRef = useRef("");
  const RoundTripDestinationRef = useRef("");
  const LocalTripOriginRef = useState("");
  const AirportTripOriginRef = useState("");
  const AirportTripDestinationRef = useState("");

  //Form SHow Hide INitialization :
  let [OneWay, setOneWay] = useState(true);
  let [RoundTrip, setRoundTrip] = useState(false);
  let [Local, setLocal] = useState(false);
  let [AirPort, setAirPort] = useState(false);

  //OneWay States :
  const [name, setName] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropUp, setDropUp] = useState("");
  const [mobile, setMobile] = useState("");
  const [time, setTime] = useState("");
  console.log(time);

  //RoundTrip States:
  let [RoundTripName, setRoundTripName] = useState("");
  let [RoundPickUp, setRoundPickUp] = useState("");
  let [RoundDropUp, setRoundDropUp] = useState("");
  let [RoundTime, setRoundTime] = useState("");
  let[RoundTripMobile,setRoundTripMobile]=useState('')
  //LocalTrip States :
  let [LocalName, setLocalName] = useState("");
  let [LocalPickUp, setLocalPickUp] = useState("");
  const [LocalTime, setLocalTime] = useState("");
  let[LocalMobile,setLocalMobile]=useState('')
  //AirportTrip States :
  let [TripType, setTripType] = useState("");
  let [AirportPickUp, setAirportPickUp] = useState("");
  let [AirportDropUp, setAirportDropUp] = useState("");
  let [AirportTime, setAirportTime] = useState("");
  let [AirportName, setAirportName] = useState("");
  let[AirportMobile,setAirportMobile]=useState('')
  //After form submition animation states:
  let [bookForm, setBookForm] = useState(false);
  let [roundForm, setRoundForm] = useState(false);
  let [localForm, setLocalForm] = useState(false);
  let [airportForm, setAirportForm] = useState(false);

  //Form submition loader :

  let [loader, setLoader] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  // let [directionResponce, setDirectionResponce] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  //Form onfocus input transition  label:
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  //OneWay input focus animation:
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(inputValue === ""); // Keep label at the top if there is text in the input
  };
  //RoundTrip input focus animation:
  const handleFocus1 = () => {
    setIsFocused1(true);
  };
  const handleBlur1 = () => {
    setIsFocused1(inputValue === ""); // Keep label at the top if there is text in the input
  };
  //LocalTrip input focus animation:
  const handleFocus2 = () => {
    setIsFocused2(true);
  };
  const handleBlur2 = () => {
    setIsFocused2(inputValue === ""); // Keep label at the top if there is text in the input
  };
  //AitportTrip input focus animation:
  const handleFocus3 = () => {
    setIsFocused3(true);
  };
  const handleBlur3 = () => {
    setIsFocused3(inputValue === ""); // Keep label at the top if there is text in the input
  };
  //Handle Oneway Trip form Error :
  let nameError = () => {
    let nameError = document.querySelector(".nameError");
    if (name.length === 0) {
      nameError.innerHTML = "Name can't be empty";
    } else if (name.length > 0 && name.length <= 2) {
      nameError.innerHTML = "Minimum 3 char Required";
    } else {
      nameError.innerHTML = "";
    }
  };
  let pickUpError = () => {
    let pickUpError = document.querySelector(".pickUpError");
    if (OneWayOriginRef.current.value === "") {
      pickUpError.innerHTML = "PickUp Address can't be empty";
    } else {
      pickUpError.innerHTML = "";
    }
  };

  let dropUpError = () => {
    let dropUpError = document.querySelector(".dropUpError");
    if (OneWayDestinationRef.current.value === "") {
      dropUpError.innerHTML = "Drop Address can't be empty";
    } else {
      dropUpError.innerHTML = "";
    }
  };

  let mobileError = () => {
    let mobileError = document.querySelector(".mobileError");
    if (mobile.length === 0) {
      mobileError.innerHTML = "Mobile Number can't be empty";
    } else if (mobile.length < 10) {
      mobileError.innerHTML = "Must 10 digit Required";
    } else if (mobile.length > 10) {
      mobileError.innerHTML =
        "Mobile Number Not Acceptable only 10 digit required";
    } else {
      mobileError.innerHTML = "";
    }
  };
  let dateError = () => {
    let dateError = document.querySelector(".dateError");
    if (date.length === 0) {
      dateError.innerHTML = "Date can't be empty";
    } else {
      dateError.innerHTML = "";
    }
  };
  let timeError = () => {
    let timeError = document.querySelector(".timeError");
    if (time.length === 0) {
      timeError.innerHTML = "Time can't be empty";
    } else {
      timeError.innerHTML = "";
    }
  };
  //RoundTrip Error Handling :
  let handleRoundTripPickUpError = () => {
    let roundTripPickUpError = document.querySelector(".roundTripPickUpError");
    if (RoundTripOriginRef.current.value === "") {
      roundTripPickUpError.innerHTML = "PickUp Address can't be empty";
    }
    if (
      RoundTripOriginRef.current.value.length > 0 &&
      RoundTripOriginRef.current.value.length <= 2
    ) {
      roundTripPickUpError.innerHTML = "Minimium 3 letter required";
    }
    if (RoundTripOriginRef.current.value.length >= 3) {
      roundTripPickUpError.innerHTML = "";
    }
  };

  let handleRoundTripDropUpError = () => {
    let roundTripDropUpError = document.querySelector(".roundTripDropUpError");
    if (RoundTripDestinationRef.current.value === "") {
      roundTripDropUpError.innerHTML = "Drop Address can't be empty";
    }
    if (
      RoundTripDestinationRef.current.value.length > 0 &&
      RoundTripDestinationRef.current.value.length <= 2
    ) {
      roundTripDropUpError.innerHTML = "Minimium 3 letter required";
    }
    if (RoundTripDestinationRef.current.value.length >= 3) {
      roundTripDropUpError.innerHTML = "";
    }
  };
  console.log(RoundTime.length)
  let handleRoundTripTimeError = () => {
    let roundTripTimeError = document.querySelector(".roundTripTimeError");
    if (RoundTime.length === 0) {
      roundTripTimeError.innerHTML = "Time can't be empty";
    }
    if (RoundTime.length > 0) {
      roundTripTimeError.innerHTML = "";
    }
  };
  let handleRoundTripNameError = () => {
    let roundTripNameError = document.querySelector(".roundTripNameError");
    if (RoundTripName.length === 0) {
      roundTripNameError.innerHTML = "Name can't be empty";
    } else if (RoundTripName.length > 0 && RoundTripName.length <= 2) {
      roundTripNameError.innerHTML = "Minimum 3 char Required";
    } else {
      roundTripNameError.innerHTML = "";
    }
  };

  // let handleRoundTripPickupDateError = () => {
  //   let roundTripPickupDateError = document.querySelector(
  //     ".roundTripPickupDateError"
  //   );
  //   if (RoundPickUp.length === 0) {
  //     roundTripPickupDateError.innerHTML = "From Date can't be empty";
  //   } else {
  //     roundTripPickupDateError.innerHTML = "";
  //   }
  // };
  // let handleRoundTripDropUpDateError = () => {
  //   let roundTripDropDateError = document.querySelector(
  //     ".roundTripDropDateError"
  //   );
  //   if (RoundDropUp.length === 0) {
  //     roundTripDropDateError.innerHTML = "To Date can't be empty";
  //   } else {
  //     roundTripDropDateError.innerHTML = "";
  //   }
  // };
  let handleRoundTripMobileError = () => {
    let roundTripmobileError = document.querySelector(".roundTripmobileError");
    if (RoundTripMobile.length === 0) {
      roundTripmobileError.innerHTML = "Mobile Number can't be empty";
    } else if (RoundTripMobile.length < 10) {
      roundTripmobileError.innerHTML = "Must 10 digit Required";
    } else if (RoundTripMobile.length > 10) {
      roundTripmobileError.innerHTML =
        "Mobile Number Not Acceptable only 10 digit required";
    } else {
      roundTripmobileError.innerHTML = "";
    }
  };
  //LocalTrip Error Handling :
  let handleLocalTripPickUpError = () => {
    let localTripPickUpError = document.querySelector(".localTripPickUpError");
    if (LocalPickUp.length === 0) {
      localTripPickUpError.innerHTML = "PickUp Address can't be empty";
    }
    if (LocalPickUp.length > 0 && RoundPickUp.length <= 2) {
      localTripPickUpError.innerHTML = "Minimium 3 letter required";
    }
    if (LocalPickUp.length >= 3) {
      localTripPickUpError.innerHTML = "";
    }
  };
  let handleLocalTripTimeError = () => {
    let localTripTimeError = document.querySelector(".localTripTimeError");
    if (LocalTime.length === 0) {
      localTripTimeError.innerHTML = "Time can't be empty";
    }
    if (LocalTime.length > 0) {
      localTripTimeError.innerHTML = "";
    }
  };
  let handleLocalTripNameError = () => {
    let localTripNameError = document.querySelector(".localTripNameError");
    if (LocalName.length === 0) {
      localTripNameError.innerHTML = "Name can't be empty";
    } else if (LocalName.length > 0 && LocalName.length <= 2) {
      localTripNameError.innerHTML = "Minimum 3 char Required";
    } else {
      localTripNameError.innerHTML = "";
    }
  };
  // let handleLocalTripDateError = () => {
  //   let localTripDateError = document.querySelector(".localTripDateError");
  //   if (LocalDate.length === 0) {
  //     localTripDateError.innerHTML = "Date can't be empty";
  //   } else {
  //     localTripDateError.innerHTML = "";
  //   }
  // };
  let handleLocalTripMobileError = () => {
    let localTripmobileError = document.querySelector(".localTripmobileError");
    if (LocalMobile.length === 0) {
      localTripmobileError.innerHTML = "Mobile Number can't be empty";
    } else if (LocalMobile.length < 10) {
      localTripmobileError.innerHTML = "Must 10 digit Required";
    } else if (LocalMobile.length > 10) {
      localTripmobileError.innerHTML =
        "Mobile Number Not Acceptable only 10 digit required";
    } else {
      localTripmobileError.innerHTML = "";
    }
  };
  //AirportTrip Form Error Handling :
  let handleAirportTripPickUpError = () => {
    let airportTripPickUpError = document.querySelector(
      ".airportTripPickUpError"
    );
    if (AirportTripOriginRef.current.value === "") {
      airportTripPickUpError.innerHTML = "PickUp Address can't be empty";
    }
    if (
      AirportTripOriginRef.current.value.length > 0 &&
      AirportTripOriginRef.current.value.length <= 2
    ) {
      airportTripPickUpError.innerHTML = "Minimium 3 letter required";
    }
    if (AirportTripOriginRef.current.value.length >= 3) {
      airportTripPickUpError.innerHTML = "";
    }
  };

  let handleAirportTripDropUpError = () => {
    let airportTripDropUpError = document.querySelector(
      ".airportTripDropUpError"
    );
    if (AirportTripDestinationRef.current.value.length === 0) {
      airportTripDropUpError.innerHTML = "Drop Address can't be empty";
    }
    if (
      AirportTripDestinationRef.current.value.length > 0 &&
      AirportTripDestinationRef.current.value.length <= 2
    ) {
      airportTripDropUpError.innerHTML = "Minimium 3 letter required";
    }
    if (AirportTripDestinationRef.current.value.length >= 3) {
      airportTripDropUpError.innerHTML = "";
    }
  };
  let handleAirportTripTimeError = () => {
    let airportTripTimeError = document.querySelector(".airportTripTimeError");
    if (AirportTime.length === 0) {
      airportTripTimeError.innerHTML = "Time can't be empty";
    }
    if (AirportTime.length > 0) {
      airportTripTimeError.innerHTML = "";
    }
  };
  let handleAirportTripNameError = () => {
    let airportTripNameError = document.querySelector(".airportTripNameError");
    if (AirportName.length === 0) {
      airportTripNameError.innerHTML = "Name can't be empty";
    } else if (AirportName.length > 0 && AirportName.length <= 2) {
      airportTripNameError.innerHTML = "Minimum 3 char Required";
    } else {
      airportTripNameError.innerHTML = "";
    }
  };
  let handleAirportTripDateError = () => {
    let airportTripDateError = document.querySelector(".airportTripDateError");
    if (AirportDate.length === 0) {
      airportTripDateError.innerHTML = "Date can't be empty";
    } else {
      airportTripDateError.innerHTML = "";
    }
  };
  let handleAirportTripMobileError = () => {
    let ariportTripmobileError = document.querySelector(".ariportTripmobileError");
    if (AirportMobile.length === 0) {
      ariportTripmobileError.innerHTML = "Mobile Number can't be empty";
    } else if (AirportMobile.length < 10) {
      ariportTripmobileError.innerHTML = "Must 10 digit Required";
    } else if (AirportMobile.length > 10) {
      ariportTripmobileError.innerHTML =
        "Mobile Number Not Acceptable only 10 digit required";
    } else {
      ariportTripmobileError.innerHTML = "";
    }
  };
  //Google map API Key
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <Loader />;
  }

  //Handle Route

  async function calculateOneWayRoute() {
    //Auto input complete  :
    if (
      OneWayOriginRef.current.value === "" &&
      OneWayDestinationRef.current.value === ""
    ) {
      return;
    }

    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: OneWayOriginRef.current.value,
      destination: OneWayDestinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // setDirectionResponce(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }

  async function calculateRoundTripRoute() {
    //Auto input complete  :
    if (
      RoundTripOriginRef.current.value === "" &&
      RoundTripDestinationRef.current.value === ""
    ) {
      return;
    }

    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: RoundTripOriginRef.current.value,
      destination: RoundTripDestinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // setDirectionResponce(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }
  async function calculateLocalTripRoute() {
    //Auto input complete  :
    if (LocalTripOriginRef.current.value === "") {
      return;
    }

    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: LocalTripOriginRef.current.value,
      // destination: RoundTripDestinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // setDirectionResponce(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }
  async function calculateAirportTripRoute() {
    //Auto input complete  :
    if (
      AirportTripOriginRef.current.value === "" &&
      AirportTripDestinationRef.current.value === ""
    ) {
      return;
    }

    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: AirportTripOriginRef.current.value,
      destination: AirportTripDestinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // setDirectionResponce(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }
  //Handle oneWay form
  const handleOneWaySaveBooking = async () => {
    nameError();
    pickUpError();
    dropUpError();
    mobileError();
    dateError();
    timeError();
    setPickUp(OneWayOriginRef.current.value);
    setDropUp(OneWayDestinationRef.current.value);

    const data = {
      name,
      pickUp,
      dropUp,
      date,
      time,
      mobile,
    };
    axios
      .post("https://premium-drop-taxi-server.onrender.com/bookings", data)
      .then(() => {
        enqueueSnackbar("Booking Created successfully", { variant: "success" });
        calculateOneWayRoute();
        setLoader(true);
        setTimeout(() => {
          setBookForm(true);
          setLoader(false);
        },2000);
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.message);
      });
  };
  //Handle RoundTrip form
  const handleRoundTripBooking = () => {
    handleRoundTripNameError();
    handleRoundTripDropUpError();
    handleRoundTripPickUpError();
    // handleRoundTripDropUpDateError();
    handleRoundTripTimeError();
    // handleRoundTripPickupDateError();
    handleRoundTripMobileError();

    //Auto input complete  :
    if (
      RoundTripOriginRef.current.value === "" &&
      RoundTripDestinationRef.current.value === ""
    ) {
      return;
    }
    setRoundPickUp(RoundTripOriginRef.current.value);
    setRoundDropUp(RoundTripDestinationRef.current.value);

    const data = {
      RoundTripName,
      RoundPickUp,
      RoundDropUp,
      fromDate,
      toDate,
      RoundTime,
    };
    axios
      .post(
        "https://premium-drop-taxi-server.onrender.com/roundTripBookings",
        data
      )
      .then(() => {
        enqueueSnackbar("Booking Created successfully", { variant: "success" });
        calculateRoundTripRoute();
        setLoader(true);
        setTimeout(() => {
          setRoundForm(true);
          setLoader(false);
        },2000);
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.message);
      });
  };
  //Handle LocalTrip form
  const handleLocalTripBooking = () => {
    handleLocalTripNameError();
    handleLocalTripPickUpError();
    handleLocalTripTimeError();
    // handleLocalTripDateError();
    handleLocalTripMobileError();

    //Auto input complete  :
    if (LocalTripOriginRef.current.value === "") {
      return;
    }
    setLocalPickUp(LocalTripOriginRef.current.value);
    const data = {
      LocalName,
      LocalPickUp,
      LocalDate,
      LocalTime,
    };
    axios
      .post(
        "https://premium-drop-taxi-server.onrender.com/localTripBookings",
        data
      )
      .then(() => {
        enqueueSnackbar("LocalTrip Booking Created successfully", {
          variant: "success",
        });
        calculateLocalTripRoute();
        setLoader(true);
        setTimeout(() => {
          setLocalForm(true);
          setLoader(false);
        });
      },2000)
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.message);
      });
  };
  //Handle AirportTrip form
  const handleAirportTripBooking = () => {
    handleAirportTripNameError();
    handleAirportTripPickUpError();
    handleAirportTripDropUpError();
    handleAirportTripTimeError();
    // handleAirportTripDateError();
    handleAirportTripMobileError();

    //Auto input complete  :
    if (
      AirportTripOriginRef.current.value === "" &&
      AirportTripDestinationRef.current.value === ""
    ) {
      return;
    }
    setAirportPickUp(AirportTripOriginRef.current.value);
    setAirportDropUp(AirportTripDestinationRef.current.value);

    const data = {
      TripType,
      AirportPickUp,
      AirportDropUp,
      AirportDate,
      AirportTime,
      AirportName,
    };
    axios
      .post(
        "https://premium-drop-taxi-server.onrender.com/airportTripBookings",
        data
      )
      .then(() => {
        enqueueSnackbar("AirportTrip Booking Created successfully", {
          variant: "success",
        });
        calculateAirportTripRoute();
        setLoader(true);
        setTimeout(() => {
          setAirportForm(true);
          setLoader(false);
        },2000);
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.message);
      });
  };
  return (
    <m.div className="bookingForm_container">
      <div className="booking_title">
        <h3>Book Your Slot</h3>
      </div>
      {bookForm && roundForm && localForm && airportForm === false ? (
        <div className="illustration">
          <img src={anime1} alt="user" />
        </div>
      ) : (
        ""
      )}

      {bookForm && roundForm && localForm && airportForm === false ? (
        <div className="illustration2">
          <img src={anime2} alt="user" />
        </div>
      ) : (
        ""
      )}

      <m.div className="container">
        <m.div className="right">
          <m.div className="Form_Action_Container">
            <m.div className="OneWay_Btn">
              <m.button
                className={OneWay ? "active_oneWay" : ""}
                onClick={() => {
                  setOneWay(true),
                    setRoundTrip(false),
                    setLocal(false),
                    setBookForm(false);
                  setAirPort(false);
                }}
              >
                OneWay
              </m.button>
            </m.div>
            <div className="TwoWay_Btn">
              <button
                className={RoundTrip ? "active_toWay" : ""}
                onClick={() => {
                  setOneWay(false),
                    setRoundTrip(true),
                    setLocal(false),
                    setBookForm(false);
                  setAirPort(false);
                }}
              >
                Round Trip
              </button>
            </div>
            <div className="Local_Btn">
              <button
                className={Local ? "active_local" : ""}
                onClick={() => {
                  setOneWay(false),
                    setRoundTrip(false),
                    setLocal(true),
                    setBookForm(false);
                  setAirPort(false);
                }}
              >
                Local Trip
              </button>
            </div>
            <div className="Airport_Btn">
              <button
                className={AirPort ? "active_airport" : ""}
                onClick={() => {
                  setOneWay(false),
                    setRoundTrip(false),
                    setLocal(false),
                    setBookForm(false);
                  setAirPort(true);
                }}
              >
                Airport Trip
              </button>
            </div>
          </m.div>
          <m.div
            className="Form_Container"
            variants={form_submit_animation}
            animate={
              bookForm || localForm || airportForm || roundForm === false
                ? "show"
                : "hide"
            }
          >
            {OneWay && !bookForm ? (
              <m.div
                className="oneWay_form"
                variants={motionForm1}
                initial="hide"
                animate={OneWay ? "show" : "hide"}
              >
                <div className="illustration3">
                  <img src={anime2} alt="user" />
                </div>
                <h2>OneWay Trip</h2>
                <div className="oneWay">
                  <div className="form_group">
                    <label
                      htmlFor="pickup"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      PickUp Address
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-location-point"></i>
                    ) : (
                      ""
                    )}

                    <Autocomplete className="origin">
                      <input
                        className="input1"
                        type="text"
                        id="pickup"
                        name="pickup"
                        ref={OneWayOriginRef}
                        onKeyUp={pickUpError}
                        placeholder=""
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </Autocomplete>
                    <div className="pickUpError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="dropup"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Drop Location
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-location-pin-alt"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="destination">
                      <input
                        className="input1"
                        type="text"
                        name="dropup"
                        id="dropup"
                        placeholder=""
                        ref={OneWayDestinationRef}
                        onKeyUp={dropUpError}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </Autocomplete>

                    <div className="dropUpError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="date"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Date
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-calendar-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      value={date.toString().slice(0,16)}
                      readOnly
                      onChange={() => setDate(date.toString().slice(0,16))}
                      onClick={() => {
                        setCloseCalendar(true);
                      }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {closeCalendar ? (
                      <Calendar
                        className="calendar"
                        date={date.toString().slice(0, 16)}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                        setLocalDate={setLocalDate}
                        setAirportDate={setAirportDate}
                        setFromCalendar={setFromCalendar}
                        setToCalendar={setToCalendar}
                        setLocalCalendar={setLocalCalendar}
                        setAirportCalendar={setAirportCalendar}
                        setDate={setDate}
                        setOneWay={setOneWay}
                        setRoundTrip={setRoundTrip}
                        setCloseCalendar={setCloseCalendar}
                      />
                    ) : (
                      ""
                    )}

                    <div className="dateError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="time"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Time
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-clock"></i>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      readOnly
                      className="time"
                      value={time}
                      onKeyDown={dateError}
                      onClick={() => {
                        setTimeShow(true), setTime("");
                      }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      // id="time"
                    />
                    {TimeShow === true ? (
                      <Time
                        TimeShow={TimeShow}
                        setTimeShow={setTimeShow}
                        time={time}
                        setTime={setTime}
                      />
                    ) : (
                      ""
                    )}
                    <div className="timeError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="name"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      FullName
                    </label>
                    {isFocused === true ? <i className="uil uil-user"></i> : ""}
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyUp={nameError}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <div className="nameError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="mobile"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Mobile Number
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-mobile-android-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      onKeyUp={mobileError}
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <div className="mobileError"></div>
                  </div>
                </div>
                <div className="submit_action oneway_submit">
                  <button onClick={handleOneWaySaveBooking}>
                    EXPLORE CABS{" "}
                    {loader === true ? <span class="loader"></span> : ""}
                    {loader === false ? (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/color/48/launched-rocket--v1.png"
                        alt="launched-rocket--v1"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </m.div>
            ) : (
              ""
            )}
            {RoundTrip && !roundForm ? (
              <m.div
                className="oneWay_form"
                variants={motionForm2}
                initial="hide"
                animate={RoundTrip ? "show" : "hide"}
              >
                <div className="illustration3">
                  <img src={anime2} alt="user" />
                </div>
                <h2>Round Trip</h2>

                <div className="oneWay">
                  <div className="form_group">
                    <label
                      htmlFor="pickup"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      PickUp Address
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-location-point"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="origin">
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        id="roundTripPickup"
                        name="RoundPickUp"
                        ref={RoundTripOriginRef}
                        onKeyUp={handleRoundTripPickUpError}
                        onFocus={handleFocus1}
                        onBlur={handleBlur1}
                      />
                    </Autocomplete>
                    <div className="roundTripPickUpError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="dropup"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      Drop Location
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-location-pin-alt"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="destination">
                      <input
                        className="input"
                        type="text"
                        name="RoundDropUp"
                        id="dropup"
                        placeholder=""
                        ref={RoundTripDestinationRef}
                        onKeyUp={handleRoundTripDropUpError}
                        onFocus={handleFocus1}
                        onBlur={handleBlur1}
                      />
                    </Autocomplete>
                    <div className="roundTripDropUpError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="fromdate"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      From Date
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-calender"></i>
                    ) : (
                      ""
                    )}
                    <input
                      value={fromDate.toString().slice(0,16)}
                      readOnly
                      name="fromDate"
                      id="fromDate"
                      className="date"
                      onChange={() => setFromDate(fromDate.toString().slice(0,16))}
                      onClick={() => {
                        setFromCalendar(true);
                        setToCalendar(false);
                      }}
                      onFocus={handleFocus1}
                      onBlur={handleBlur1}
                    />
                    {fromCalendar ? (
                      <RoundTripCalendar
                        className="calendar"
                        fromDate={fromDate.toString().slice(0, 16)}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                        setLocalDate={setLocalDate}
                        setAirportDate={setAirportDate}
                        setFromCalendar={setFromCalendar}
                        setToCalendar={setToCalendar}
                        setLocalCalendar={setLocalCalendar}
                        setAirportCalendar={setAirportCalendar}
                        setDate={setDate}
                        setCloseCalendar={setCloseCalendar}
                      />
                    ) : (
                      ""
                    )}
                    <div className="roundTripPickupDateError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="todate"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      To Date
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-calendar-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      value={toDate.toString().slice(0,16)}
                      readOnly
                      name="toDate"
                      id="toDate"
                      className="date"
                      onChange={() => setToDate(toDate.toString().slice(0,16))}
                      onClick={() => {
                        setToCalendar(true);
                        setFromCalendar(false);
                      }}
                      onFocus={handleFocus1}
                      onBlur={handleBlur1}
                    />
                    {toCalendar ? (
                      <RoundTripToDateCalendar
                        className="calendar"
                        toDate={toDate.toString().slice(0, 16)}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                        setLocalDate={setLocalDate}
                        setAirportDate={setAirportDate}
                        setFromCalendar={setFromCalendar}
                        setToCalendar={setToCalendar}
                        setLocalCalendar={setLocalCalendar}
                        setAirportCalendar={setAirportCalendar}
                        setDate={setDate}
                        setCloseCalendar={setCloseCalendar}
                      />
                    ) : (
                      ""
                    )}

                    <div className="roundTripDropDateError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="time"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      Time
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-clock"></i>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      readOnly
                      className="time"
                      value={RoundTime}
                      onChange={(e) => setRoundTime(e.target.value)}
                      onKeyUp={handleRoundTripTimeError}
                      onClick={() => {
                        setTimeShow(true), setRoundTime("");
                      }}
                     
                      id="time"
                    />
                    {TimeShow === true ? (
                      <RoundTripTime
                        TimeShow={TimeShow}
                        setTimeShow={setTimeShow}
                        RoundTime={RoundTime}
                        setRoundTime={setRoundTime}
                        onFocus={handleFocus1}
                        onBlur={handleBlur1}
                      />
                    ) : (
                      ""
                    )}
                    <div className="roundTripTimeError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="RoundTripName"
                      className={isFocused1 === true ? "focused" : "unFocused"}
                    >
                      FullName
                    </label>
                    {isFocused1 === true ? (
                      <i className="uil uil-user"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="text"
                      id="RoundTripName"
                      name="RoundTripName"
                      value={RoundTripName}
                      onChange={(e) => setRoundTripName(e.target.value)}
                      onKeyUp={handleRoundTripNameError}
                      onFocus={handleFocus1}
                      onBlur={handleBlur1}
                    />
                    <div className="roundTripNameError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="mobile"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Mobile Number
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-mobile-android-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      onKeyUp={handleRoundTripMobileError}
                      value={RoundTripMobile}
                      onChange={(e) => {
                        setRoundTripMobile(e.target.value);
                      }}
                    
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <div className="roundTripmobileError"></div>
                  </div>
                  <div className="submit_action">
                  <button onClick={handleRoundTripBooking}>
                    EXPLORE CABS{" "}
                    {loader === true ? <span class="loader"></span> : ""}
                    {loader === false ? (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/color/48/launched-rocket--v1.png"
                        alt="launched-rocket--v1"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
                </div>
              
              </m.div>
            ) : (
              ""
            )}
            {Local && !localForm ? (
              <m.div
                className="local_form"
                variants={motionForm2}
                initial="hide"
                animate={Local ? "show" : "hide"}
              >
                <div className="illustration3">
                  <img src={anime2} alt="user" />
                </div>
                <h2>Local Trip</h2>

                <div className="local">
                  <div className="form_group">
                    <label
                      htmlFor="pickup"
                      className={isFocused2 === true ? "focused" : "unFocused"}
                    >
                      PickUp Address
                    </label>
                    {isFocused2 === true ? (
                      <i className="uil uil-location-point"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="origin">
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        id="pickup"
                        name="pickup"
                        ref={LocalTripOriginRef}
                        onKeyUp={handleLocalTripPickUpError}
                        onFocus={handleFocus2}
                        onBlur={handleBlur2}
                      />
                    </Autocomplete>
                    <div className="localTripPickUpError"></div>
                  </div>

                  <div className="form_group">
                    <label
                      htmlFor="date"
                      className={isFocused2 === true ? "focused" : "unFocused"}
                    >
                      Date
                    </label>
                    {isFocused2 === true ? (
                      <i className="uil uil-calendar-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      value={LocalDate.toString().slice(0,16)}
                      readOnly
                      name="date"
                      id="date"
                      className="date"
                      onChange={() => setLocalDate(LocalDate.toString().slice(0,16))}
                      onClick={() => {
                        setFromCalendar(false);
                        setToCalendar(false);
                        setLocalCalendar(true);
                      }}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                    />
                    {localCalendar ? (
                      <LocalTripCalendar
                        className="calendar"
                        LocalDate={LocalDate.toString().slice(0, 16)}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                        setLocalDate={setLocalDate}
                        setAirportDate={setAirportDate}
                        setFromCalendar={setFromCalendar}
                        setToCalendar={setToCalendar}
                        setLocalCalendar={setLocalCalendar}
                        setAirportCalendar={setAirportCalendar}
                        setDate={setDate}
                        setCloseCalendar={setCloseCalendar}
                      />
                    ) : (
                      ""
                    )}
                    <div className="localTripDateError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="time"
                      className={isFocused2 === true ? "focused" : "unFocused"}
                    >
                      Time
                    </label>
                    {isFocused2 === true ? (
                      <i className="uil uil-clock"></i>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      readOnly
                      className="time"
                      value={LocalTime}
                      onClick={() => {
                        setTimeShow(true), setLocalTime("");
                      }}
                      id="time"
                      onMouseDown={handleLocalTripTimeError}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                    />
                    {TimeShow === true ? (
                      <LocalTripTime
                        TimeShow={TimeShow}
                        setTimeShow={setTimeShow}
                        LocalTime={LocalTime}
                        setLocalTime={setLocalTime}
                      />
                    ) : (
                      ""
                    )}
                    <div className="localTripTimeError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="LocalTripName"
                      className={isFocused2 === true ? "focused" : "unFocused"}
                    >
                      FullName
                    </label>
                    {isFocused2 === true ? (
                      <i className="uil uil-user"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="text"
                      id="LocalTripName"
                      name="LocalTripName"
                      value={LocalName}
                      onChange={(e) => setLocalName(e.target.value)}
                      onKeyUp={handleLocalTripNameError}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                    />
                    <div className="localTripNameError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="mobile"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Mobile Number
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-mobile-android-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      onKeyUp={handleLocalTripMobileError}
                      value={LocalMobile}
                      onChange={(e) => {
                        setLocalMobile(e.target.value);
                      }}
                    
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <div className="localTripmobileError"></div>
                  </div>
                  <div className="submit_action  local_submit">
                  <button onClick={handleLocalTripBooking}>
                    EXPLORE CABS{" "}
                    {loader === true ? <span class="loader"></span> : ""}
                    {loader === false ? (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/color/48/launched-rocket--v1.png"
                        alt="launched-rocket--v1"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
                </div>
               
              </m.div>
            ) : (
              ""
            )}
            {AirPort && !airportForm ? (
              <m.div
                className="airport_form"
                variants={motionForm1}
                initial="hide"
                animate={AirPort ? "show" : "hide"}
              >
                <div className="illustration3">
                  <img src={anime2} alt="user" />
                </div>
                <h2>Airport Trip</h2>
                <div className="airport">
                  <div className="form_group">
                    {/* <label htmlFor="trip">Trip</label> */}
                    {isFocused3 === false ? (
                      <i className="uil uil-car-sideview"></i>
                    ) : (
                      ""
                    )}
                    <select
                      name="trip"
                      id="trip"
                      value={TripType}
                      onChange={(e) => {
                        setTripType(e.target.value);
                      }}
                    >
                      {/* <option value="<---Select your trip --->">
                        Select Your Trip
                      </option> */}
                      <option value="Drop_To_Airport">Drop-To-Airport</option>
                      <option value="Pickup_To_Airport">
                        Pickup-To-Airport
                      </option>
                    </select>
                    <div className="tripError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="pickup"
                      className={isFocused3 === true ? "focused" : "unFocused"}
                    >
                      PickUp Address
                    </label>
                    {isFocused3 === true ? (
                      <i className="uil uil-location-point"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="origin">
                      <input
                        className="input1"
                        type="text"
                        id="AirportPickUp"
                        placeholder=""
                        onKeyUp={handleAirportTripPickUpError}
                        name="AirportPickUp"
                        ref={AirportTripOriginRef}
                        onFocus={handleFocus3}
                        onBlur={handleBlur3}
                      />
                    </Autocomplete>
                    <div className="airportTripPickUpError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="dropup"
                      className={isFocused3 === true ? "focused" : "unFocused"}
                    >
                      Drop Location
                    </label>
                    {isFocused3 === true ? (
                      <i className="uil uil-location-pin-alt"></i>
                    ) : (
                      ""
                    )}
                    <Autocomplete className="destination">
                      <input
                        className="input1"
                        type="text"
                        name="AirportDropUp"
                        id="AirportDropUp"
                        placeholder=""
                        onKeyUp={handleAirportTripDropUpError}
                        ref={AirportTripDestinationRef}
                        onFocus={handleFocus3}
                        onBlur={handleBlur3}
                      />
                    </Autocomplete>
                    <div className="airportTripDropUpError"></div>
                  </div>
                  <div className="form_group date">
                    <label
                      htmlFor="date"
                      className={isFocused3 === true ? "focused" : "unFocused"}
                    >
                      Date
                    </label>
                    {isFocused3 === true ? (
                      <i className="uil uil-calendar-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      value={AirportDate.toString().slice(0,16)}
                      readOnly
                      onChange={() => setAirportDate(AirportDate.toString().slice(0,16))}
                      onClick={() => {
                        setCloseCalendar(true);
                      }}
                      onFocus={handleFocus3}
                      onBlur={handleBlur3}
                    />
                    {closeCalendar ? (
                      <AirportTripCalendar
                        className="calendar"
                        AirportDate={AirportDate.toString().slice(0, 16)}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                        setLocalDate={setLocalDate}
                        setAirportDate={setAirportDate}
                        setFromCalendar={setFromCalendar}
                        setToCalendar={setToCalendar}
                        setLocalCalendar={setLocalCalendar}
                        setAirportCalendar={setAirportCalendar}
                        setDate={setDate}
                        setCloseCalendar={setCloseCalendar}
                      />
                    ) : (
                      ""
                    )}

                    <div className="airportTripDateError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="time"
                      className={isFocused3 === true ? "focused" : "unFocused"}
                    >
                      Time
                    </label>
                    {isFocused3 === true ? (
                      <i className="uil uil-clock"></i>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      readOnly
                      className="time"
                      value={AirportTime}
                      onChange={(e) => setAirportTime(e.target.value)}
                      onClick={() => {
                        setTimeShow(true), setAirportTime("");
                      }}
                      onKeyUp={handleAirportTripTimeError}
                      id="time"
                      onFocus={handleFocus3}
                      onBlur={handleBlur3}
                    />
                    {TimeShow === true ? (
                      <AirportTripTime
                        TimeShow={TimeShow}
                        setTimeShow={setTimeShow}
                        AirportTime={AirportTime}
                        setAirportTime={setAirportTime}
                      />
                    ) : (
                      ""
                    )}
                    <div className="airportTripTimeError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="AirportName"
                      className={isFocused3 === true ? "focused" : "unFocused"}
                    >
                      FullName
                    </label>
                    {isFocused3 === true ? (
                      <i className="uil uil-user"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="text"
                      id="AirportName"
                      name="AirportName"
                      value={AirportName}
                      onChange={(e) => setAirportName(e.target.value)}
                      onKeyUp={handleAirportTripNameError}
                      onFocus={handleFocus3}
                      onBlur={handleBlur3}
                    />
                    <div className="airportTripNameError"></div>
                  </div>
                  <div className="form_group">
                    <label
                      htmlFor="mobile"
                      className={isFocused === true ? "focused" : "unFocused"}
                    >
                      Mobile Number
                    </label>
                    {isFocused === true ? (
                      <i className="uil uil-mobile-android-alt"></i>
                    ) : (
                      ""
                    )}
                    <input
                      className="input"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      onKeyUp={handleAirportTripMobileError}
                      value={AirportMobile}
                      onChange={(e) => {
                        setAirportMobile(e.target.value);
                      }}
                    
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <div className="ariportTripmobileError"></div>
                  </div>
                  <div className="submit_action">
                  <button onClick={handleAirportTripBooking}>
                    EXPLORE CABS{" "}
                    {loader === true ? <span class="loader"></span> : ""}
                    {loader === false ? (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/color/48/launched-rocket--v1.png"
                        alt="launched-rocket--v1"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
                </div>
            
              </m.div>
            ) : (
              ""
            )}
          </m.div>
        </m.div>
      </m.div>
      {bookForm === true ? (
        <VehicleList
          vehicle_list_animation={vehicle_list_animation}
          bookForm={bookForm}
          show={vehicle_list_animation.show}
          hide={vehicle_list_animation.hide}
          duration={duration}
          distance={distance}
          pickUp={pickUp}
          dropUp={dropUp}
          mobile={mobile}
          time={time}
          date={date}
          name={name}
        />
      ) : (
        " "
      )}

      {roundForm === true ? (
        <RoundVehicleList
          vehicle_list_animation={vehicle_list_animation}
          roundForm={roundForm}
          show={vehicle_list_animation.show}
          hide={vehicle_list_animation.hide}
          duration={duration}
          distance={distance}
          RoundPickUp={RoundPickUp}
          RoundDropUp={RoundDropUp}
          RoundTime={RoundTime}
          fromDate={fromDate}
          toDate={toDate}
          RoundTripName={RoundTripName}
          RoundTripMobile={RoundTripMobile}
        />
      ) : (
        ""
      )}

      {localForm === true ? (
        <LocalVehicleList
          vehicle_list_animation={vehicle_list_animation}
          localForm={localForm}
          show={vehicle_list_animation.show}
          hide={vehicle_list_animation.hide}
          duration={duration}
          distance={distance}
          LocalPickUp={LocalPickUp}
          LocalDate={LocalDate}
          LocalTime={LocalTime}
          LocalName={LocalName}
          LocalMobile={LocalMobile}
        />
      ) : (
        ""
      )}

      {airportForm === true ? (
        <AirportVehicleList
          vehicle_list_animation={vehicle_list_animation}
          airportForm={airportForm}
          show={vehicle_list_animation.show}
          hide={vehicle_list_animation.hide}
          duration={duration}
          distance={distance}
          TripType={TripType}
          AirportPickUp={AirportPickUp}
          AirportDropUp={AirportDropUp}
          AirportTime={AirportTime}
          AirportDate={AirportDate}
          AirportName={AirportName}
          AirportMobile={AirportMobile}
        />
      ) : (
        ""
      )}
    </m.div>
  );
};

export default BookingForm;
