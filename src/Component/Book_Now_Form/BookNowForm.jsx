import React, { useState } from "react";
import "./BookNowForm.scss";
import Navbar from "../Navbar/Navbar";
import { Link ,useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import illustration from "/src/assets/booking/8.svg";
import { motion as m } from "framer-motion";

let sucessAnime = {
  hide: { y: -500, opacity: 0, transition: { type: "spring" } },
  show: { y: 0, opacity: 1, transition: { type: "spring" } },
};

const BookNowForm = () => {
  let [alert, setAlert] = useState();
  let navigate=useNavigate();
  //Form Logic :
  let form = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    //Validation :
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 character required")
        .required("Name is required"),
      email: Yup.string().email().required("Email is required"),
    }),
    //Form Submit :
    onSubmit: (values) => {
      

      setTimeout(()=>{
          form.values.name='';
          form.values.email='';
          setAlert(true);
      },1000)
    },
  });
  return (
    <>
      <m.div className="booknow_form_container">
        <Navbar />

        <m.div className="bookNow_form" onClick={() => setAlert(false)}>
          <form action="" className="form" onSubmit={form.handleSubmit}>
            <div className="form_group">
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="error">
                {" "}
                {form.touched.name && form.errors.name ? form.errors.name : ""}
              </div>
            </div>
            <div className="form_group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="error">
                {" "}
                {form.touched.email && form.errors.email
                  ? form.errors.email
                  : ""}
              </div>
            </div>
            <div className="submit_action">
              <div className="previous">
                <button onClick={()=>navigate('/')}>Previous</button>
              </div>
              <div className="submit">
                <button type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </m.div>

        <m.div className="success_container">
          <m.div
            className="success_alert_box"
            variants={sucessAnime}
            animate={alert ? "show" : "hide"}
          >
            <div className="close" onClick={() => setAlert(false)}>
              <i className="uil uil-times"></i>
            </div>
            <div className="illustration">
              <img src={illustration} alt="illustration" />
            </div>
            <div className="message">
              <h3>Your Booking Sucessfully Completed! </h3>
              <h4>Thanks for Reaching Us...</h4>
              <p>We,Hope Our travels make u Good Vibes & happiness..</p>
            </div>
          </m.div>
        </m.div>
      </m.div>
    </>
  );
};

export default BookNowForm;
