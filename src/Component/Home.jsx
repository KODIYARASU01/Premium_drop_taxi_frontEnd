import React, { useState, useEffect } from "react";
import axios from "axios";
// import Spinner from "../Pages/Spinner";
import { Link } from "react-router-dom";

import sedan from "../assets/sedan/3.png";
import "../Styles/Home.scss";
const Home = () => {
  let [vehicles, setVehicles] = useState([]);
  // let [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    
    axios
      .get("https://premium-drop-taxi-server.onrender.com/vehicles")
      .then((responce) => {
        setVehicles(responce.data.data);
        console.log(responce.data.data)
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        // setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="home_container">
        <div className="home_title">
          <h4>Vehicle Details</h4>
        </div>
        <div className="container_box">
          <div className="add_new_vehicle">
            <Link to="/vehicle/create">
              <button>Add New Vehicles</button>
            </Link>
          </div>

          <div className="Vehicle_list_container">
            {vehicles.map((vehicle, index) => (
              <div className="list" key={vehicle._id}>
                <div className="vehicle_title">
                  <h3>{vehicle.title}</h3>
                </div>
                <div className="vehicle_image">
                  <img src={sedan} alt="image" />
                </div>

                <div className="vehicle_amount">
                  <div className="km">
                    <h3> 1 Km</h3>
                  </div>
                  <div className="icons">
                    <i className="uil uil-angle-double-right"></i>
                  </div>
                  <div className="rate">
                    <h3>{vehicle.amount} Rs</h3>
                  </div>
                </div>

                <div className="actions">
                  <div className="edit">
                    <Link to={`/vehicle/edit/${vehicle._id}`}>
                      <i className="uil uil-pen"></i>
                    </Link>
                  </div>
                  <div className="delete">
                    <Link to={`/vehicle/delete/${vehicle._id}`}>
                      <i class="uil uil-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
