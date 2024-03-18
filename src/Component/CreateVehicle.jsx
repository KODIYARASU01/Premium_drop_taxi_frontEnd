import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/createVehicle.scss";
import { useNavigate } from "react-router-dom";
import BackButton from "../Pages/BackButton";
import Spinner from "../Pages/Spinner";
import { useSnackbar } from "notistack";
const CreateVehicle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [amount, setAmount] = useState("");
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveVehicle = () => {
    const data = {
      title,
      author,
      amount,
    };
    // setLoading(true);
    axios
      .post("https://premium-drop-taxi-server.onrender.com/vehicles", data)
      .then(() => {
        // setLoading(false);
        enqueueSnackbar("Vehicle Created successfully", { variant: "success" });
        navigate("/admin");
      })
      .catch((error) => {
        // setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="create_container">
      <div className="back_button">
        <BackButton />
      </div>

      <div className="vehicle_form">
        <div className="form_title">
          <h2>Create New Vehicle List</h2>
        </div>

        <div  className="form" >
          <div className="form_group">
            <label htmlFor="sitename">Car Color</label>
            <input
              type="text"
              placeholder="Enter cab color"
              name="sitename"

              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="carname">Car Brand Name</label>
            <input
              type="text"
              placeholder="Eg : Toyato,Sedan"
              name="carname"
              id="carname"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="image">Upload Car Image</label>
            <input
              className="file"
              type="file"
              placeholder="Eg : Toyato,Sedan"
              name="image"
              id="image"
            />
          </div>
          <div className="form_group">
            <label htmlFor="amount">Amount charging for per Km</label>
            <input
              type="number"
              placeholder="Charging for per Km"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="form_submit">
            <button onClick={handleSaveVehicle}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVehicle;
