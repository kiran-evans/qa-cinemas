import React from 'react';
//import directions from './components/Images/directions.png';

const Travelpage = () => {
    return(
<div className="Travelpage">

    <h1> Welcome To QA Cinema</h1>

    <p><b>QA cinema</b></p>
    <img src= "/travel/qabuilding.png" className="qabuilding" alt="QA Building" />
        <h5>Address: 3rd Floor, International House, 1 St Katharine's Way, London E1W 1UN</h5>
        <h5>Tel: 0345 074 7829</h5>

    <p> Location</p>
    <iframe title="Map" style = {{width: "100%" , height: "300px"}}id="gmap_canvas" src="https://maps.google.com/maps?q=E1W%201UN&t=&z=17&ie=UTF8&iwloc=&output=embed" ></iframe>
    
   
    <p> Directions from Tower Hill underground station</p>                 
    <img src= "/travel/directions.png" className="directions" alt="Directions to QA Cinemas" />
    
    <p><b>Travel Information</b></p>
    <img src= "/travel/travelinfo.png" className="travelinfo" alt="Travel information" />
    


</div>
  );
};
export default Travelpage;