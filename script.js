const getlocation = () => {
    //alert("getting user location");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log((position));
        });
    }
  
};