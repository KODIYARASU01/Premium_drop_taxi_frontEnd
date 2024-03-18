// import React, { useState } from "react";
// import "./Booking.scss";
// import userSvg from "/src/assets/booking/7.svg";
// import illustration from "/src/assets/booking/2.svg";
// import DatePicker from "react-datepicker";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Navbar from "../Navbar/Navbar";
// const Booking = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   let [OneWay, setOneWay] = useState(true);
//   let [TwoWay, setTwoWay] = useState(false);

//   //Form Logic :
//   let oneWay = useFormik({
//     initialValues: {
//       pickup: "",
//       dropup: "",
//       date: "",
//       time: "",
//       mobile: "",
//     },

//     //Validation :
//     validationSchema: Yup.object({
//       pickup: Yup.string()
//         .min(10, "Minimum 8 character required")
//         .required("PickUp is required"),
//       dropup: Yup.string()
//         .min(10, "Minimum 8 character required")
//         .required("DropUp is required"),
//       mobile: Yup.string()
//         .min(10, "Minimum 10 sigit required")
//         .max(10, "Incorrect mobile number")
//         .required("Mobile number is required"),
//       time: Yup.string().required("Time is Required"),
//     }),
//     //Form Submit :
//     onSubmit: (values) => {
//       function sendWhatsApp(values) {
//         var mobileNumber = "+91 8825457794";

//         let url =
//           "https://api.whatsapp.com/send?phone=" +
//           "Thanks for visiting our website!" +
//           "%0a%0a" +
//           mobileNumber +
//           "&text=" +
//           "*PickUp :* " +
//           oneWay.values.pickup +
//           "%0a" +
//           "*DropUp :* " +
//           oneWay.values.dropup +
//           "%0a" +
//           "*Mobile:* " +
//           oneWay.values.mobile +
//           "%0a" +
//           "*Date:* " +
//           startDate.getDate() +
//           "." +
//           startDate.getMonth() +
//           "." +
//           startDate.getFullYear() +
//           "%0a" +
//           "*Time:* " +
//           oneWay.values.time +
//           "%0a%0a" +
//           "Thanks for reaching us ,We will contact us soon!";
//         // let url = ` https://api.whatsapp.com/send?phone=+91 8825457794&text=Hello!"
//         //   target="_blank"`;
//         window.open(url, "_blank").focus();
//       }
//       sendWhatsApp(values);
//     },
//   });
//   let twoWay = useFormik({
//     initialValues: {
//       pickup: "",
//       dropup: "",
//       date: "",
//       time: "",
//       mobile: "",
//     },

//     //Validation :
//     validationSchema: Yup.object({
//       pickup: Yup.string()
//         .min(10, "Minimum 8 character required")
//         .required("PickUp is required"),
//       dropup: Yup.string()
//         .min(10, "Minimum 8 character required")
//         .required("DropUp is required"),
//       mobile: Yup.string()
//         .min(10, "Minimum 10 sigit required")
//         .max(10, "Incorrect mobile number")
//         .required("Mobile number is required"),

//       time: Yup.string().required("Time is Required"),
//     }),
//     //Form Submit :
//     onSubmit: (values) => {
//       function sendWhatsApp(values) {
//         var mobileNumber = "+91 8825457794";

//         let url =
//           "https://api.whatsapp.com/send?phone=" +
//           mobileNumber +
//           "&text=" +
//           "*PickUp :* " +
//           twoWay.values.pickup +
//           "%0a" +
//           "*DropUp :* " +
//           twoWay.values.dropup +
//           "%0a" +
//           "*Mobile:* " +
//           twoWay.values.mobile +
//           "%0a" +
//           "*Date:* " +
//           startDate.getDate() +
//           "." +
//           startDate.getMonth() +
//           "." +
//           startDate.getFullYear() +
//           "%0a" +
//           "*Time:* " +
//           twoWay.values.time +
//           "%0a%0a" +
//           "Thanks for reaching us ,We will contact us soon!";
//         // let url = ` https://api.whatsapp.com/send?phone=+91 8825457794&text=Hello!"
//         //   target="_blank"`;
//         window.open(url, "_blank").focus();
//       }
//       sendWhatsApp(values);
//     },
//   });
//   return (
//     <div className="booking_container">
//       <Navbar />
//       <div className="booking_title">
//         <h3>Book Your Slot</h3>
//       </div>

//       <div className="container">
//         <div className="left">
//           <img src={userSvg} alt="useSvg" />
//         </div>
//         <div className="right">
//           <div className="Form_Action_Container">
//             <div className="OneWay_Btn">
//               <button
//                 className={OneWay ? "active_oneWay" : ""}
//                 onClick={() => {
//                   setOneWay(true), setTwoWay(false);
//                 }}
//               >
//                 OneWay
//               </button>
//             </div>
//             <div className="TwoWay_Btn">
//               <button
//                 className={TwoWay ? "active_toWay" : ""}
//                 onClick={() => {
//                   setOneWay(false), setTwoWay(true);
//                 }}
//               >
//                 TwoWay
//               </button>
//             </div>
//           </div>

//           <div className="Form_Container">
//             {OneWay ? (
//               <div className="oneWay_form">
//                 <h2>OneWay Trip</h2>
//                 <div className="illustration">
//                   <img src={illustration} alt="illustration" />
//                 </div>
//                 <form
//                   action=""
//                   className="oneWay"
//                   onSubmit={oneWay.handleSubmit}
//                 >
//                   <div className="form_group">
//                     <label
//                       className={
//                         oneWay.touched.pickup && oneWay.errors.pickup
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="pickup"
//                     >
//                       {oneWay.touched.pickup && oneWay.errors.pickup
//                         ? oneWay.errors.pickup
//                         : "PickUp Address"}
//                     </label>
//                     <input
//                       className="input"
//                       type="text"
//                       placeholder="Enter Your Location"
//                       id="pickup"
//                       name="pickup"
//                       value={oneWay.values.pickup}
//                       onChange={oneWay.handleChange}
//                       onBlur={oneWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         oneWay.touched.dropup && oneWay.errors.dropup
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="dropup"
//                     >
//                       {oneWay.touched.dropup && oneWay.errors.dropup
//                         ? oneWay.errors.dropup
//                         : "Drop Location"}
//                     </label>
//                     <input
//                       className="input"
//                       type="text"
//                       placeholder="Enter Your Destination"
//                       name="dropup"
//                       id="dropup"
//                       value={oneWay.values.dropup}
//                       onChange={oneWay.handleChange}
//                       onBlur={oneWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label htmlFor="date">Date</label>
//                     <DatePicker
//                       className="input"
//                       selected={startDate}
//                       name="date"
//                       onChange={(date) => setStartDate(date)}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         oneWay.touched.time && oneWay.errors.time ? "error" : ""
//                       }
//                       htmlFor="time"
//                     >
//                       {oneWay.touched.time && oneWay.errors.time
//                         ? oneWay.errors.time
//                         : "Time"}
//                     </label>
//                     {/* <TimePicker
//                     className="time"
//                     onChange={setTime}
//                     value={time}
//                     name="time"
//                   /> */}
//                     <input
//                       className="input"
//                       type="time"
//                       placeholder="Time"
//                       name="time"
//                       id="time"
//                       value={oneWay.values.time}
//                       onChange={oneWay.handleChange}
//                       onBlur={oneWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         oneWay.touched.mobile && oneWay.errors.mobile
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="mobile"
//                     >
//                       {oneWay.touched.mobile && oneWay.errors.mobile
//                         ? oneWay.errors.mobile
//                         : "Mobile Number"}
//                     </label>
//                     <input
//                       className="input"
//                       type="tel"
//                       placeholder="Enter Your Destination"
//                       name="mobile"
//                       id="mobile"
//                       value={oneWay.values.mobile}
//                       onChange={oneWay.handleChange}
//                       onBlur={oneWay.handleBlur}
//                     />
//                   </div>
//                   <div className="submit_action">
//                     <button type="Submit">Book OneWay</button>
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               ""
//             )}
//             {TwoWay ? (
//               <div className="oneWay_form">
//                 <h2>TwoWay Trip</h2>
//                 <form
//                   action=""
//                   className="oneWay"
//                   onSubmit={twoWay.handleSubmit}
//                 >
//                   <div className="form_group">
//                     <label
//                       className={
//                         twoWay.touched.pickup && twoWay.errors.pickup
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="pickup"
//                     >
//                       {twoWay.touched.pickup && twoWay.errors.pickup
//                         ? twoWay.errors.pickup
//                         : "PickUp Address"}
//                     </label>
//                     <input
//                       className="input"
//                       type="text"
//                       placeholder="Enter Your Location"
//                       id="pickup"
//                       name="pickup"
//                       value={twoWay.values.pickup}
//                       onChange={twoWay.handleChange}
//                       onBlur={twoWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         twoWay.touched.dropup && twoWay.errors.dropup
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="dropup"
//                     >
//                       {twoWay.touched.dropup && twoWay.errors.dropup
//                         ? twoWay.errors.dropup
//                         : "Drop Location"}
//                     </label>
//                     <input
//                       className="input"
//                       type="text"
//                       placeholder="Enter Your Destination"
//                       name="dropup"
//                       id="dropup"
//                       value={twoWay.values.dropup}
//                       onChange={twoWay.handleChange}
//                       onBlur={twoWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label htmlFor="date">Date</label>
//                     <DatePicker
//                       className="input"
//                       selected={startDate}
//                       name="date"
//                       onChange={(date) => setStartDate(date)}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         twoWay.touched.time && twoWay.errors.time ? "error" : ""
//                       }
//                       htmlFor="time"
//                     >
//                       {twoWay.touched.time && twoWay.errors.time
//                         ? twoWay.errors.time
//                         : "Time"}
//                     </label>
//                     {/* <TimePicker
//                     className="time"
//                     onChange={setTime}
//                     value={time}
//                     name="time"
//                   /> */}
//                     <input
//                       className="input"
//                       type="time"
//                       placeholder="Time"
//                       name="time"
//                       id="time"
//                       value={twoWay.values.time}
//                       onChange={twoWay.handleChange}
//                       onBlur={twoWay.handleBlur}
//                     />
//                   </div>
//                   <div className="form_group">
//                     <label
//                       className={
//                         twoWay.touched.mobile && twoWay.errors.mobile
//                           ? "error"
//                           : ""
//                       }
//                       htmlFor="mobile"
//                     >
//                       {oneWay.touched.mobile && twoWay.errors.mobile
//                         ? twoWay.errors.mobile
//                         : "Mobile Number"}
//                     </label>
//                     <input
//                       className="input"
//                       type="tel"
//                       placeholder="Enter Your Destination"
//                       name="mobile"
//                       id="mobile"
//                       value={twoWay.values.mobile}
//                       onChange={twoWay.handleChange}
//                       onBlur={twoWay.handleBlur}
//                     />
//                   </div>
//                   <div className="submit_action">
//                     <button type="Submit">Book TwoWay</button>
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
