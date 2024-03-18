export let handlePickUp = (e,setIsFocused) => {
    console.log(e)
    if (e.target.value === undefined ) {
      setIsFocused(false);
    } else {
        
      setIsFocused(true);
    }
  };

 export let handleMobile = (e,setIsFocused) => {
 
    if (e.target.value.length === 0 ) {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };