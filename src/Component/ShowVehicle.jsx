import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../Pages/BackButton";
import Spinner from "../Pages/Spinner";
const ShowVehicle = () => {
  const [vehicle, setVehicle] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://premium-drop-taxi-server.onrender.com/vehicles/${id}`).then((response) => {
      setVehicle(response.data);
      setLoading(false)
    }).catch((error)=>{
      console.log(error.message)
      setLoading(false)
    })
  });
  return (
    <>
      <div className="show_container">Show</div>
    </>
  );
};

export default ShowVehicle;
