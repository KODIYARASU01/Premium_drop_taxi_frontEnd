import React,{useState} from 'react'
import axios from 'axios';
import BackButton from '../Pages/BackButton';
import { useNavigate,useParams } from 'react-router-dom';
import '../Styles/DeleteVehicle.scss'
const DeleteVehicle = () => {

  const navigate=useNavigate();
  const {id}=useParams();

  const handleDeleteVehicle=()=>{
    axios.delete(`https://premium-drop-taxi-server.onrender.com/vehicles/${id}`).then(()=>{
      navigate('/admin')
    }).catch((error)=>{
      console.log(error.message);
      alert('An error occur,Pls check it')
    })
  }
  return (
    <div className="deleteContainer">
<div className="back_button">
  <BackButton/>
</div>
<div className="delete_box_container">
<div className="delete_box">
<div className="heading">
  <h3>Are U Sure You Want to Delete this Vehicle ? </h3>
</div>
<div className="delete_btn">
  <button onClick={handleDeleteVehicle}>Yes, Delete it</button>
</div>
</div>
</div>
    </div>
  )
}

export default DeleteVehicle;