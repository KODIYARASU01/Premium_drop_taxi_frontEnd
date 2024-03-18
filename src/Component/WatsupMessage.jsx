
  const phoneNumber = "8825457794"; // Replace with the recipient's phone number
  const message = encodeURIComponent(
    `Thanks for reaching Us! \n PickUp Address : {pickUp}  , \n Dropping Address :{dropUp},\n Date : {date} , \n Time : {time}, \n Mobile Number : {mobile} `
  );

  const handleClick = (pickUp,dropUp,mobile,date,time) => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };


export default handleClick;
