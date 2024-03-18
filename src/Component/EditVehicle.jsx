import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/createVehicle.scss";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../Pages/BackButton";
import { useSnackbar } from "notistack";

const EditVehicle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://premium-drop-taxi-server.onrender.com/vehicles/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setAmount(response.data.amount);
      })
      .catch((error) => {
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleUpdateVehicle = () => {
    const data = {
      title,
      author,
      amount,
    };
    axios
      .put(`https://premium-drop-taxi-server.onrender.com/vehicles/${id}`, data)
      .then(() => {
        enqueueSnackbar("Vehicle Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
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
          <h2>Edit Vehicle</h2>
        </div>

        <div className="form">
          <div className="form_group">
            <label htmlFor="sitename">Site Name</label>
            <input
              type="text"
              placeholder="Enter Your site name"
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
            <button onClick={handleUpdateVehicle}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVehicle;
