import React from 'react';
import Greeting from "../Greeting";

const Welcome = () => {
  return (
    <div>
      <Greeting name ="Roma" img ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shazad_Latif_by_Gage_Skidmore.jpg/440px-Shazad_Latif_by_Gage_Skidmore.jpg"/>
      <Greeting  name = "Flor" img ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shazad_Latif_by_Gage_Skidmore.jpg/440px-Shazad_Latif_by_Gage_Skidmore.jpg"/>
      <Greeting  name = "Aidai" img ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shazad_Latif_by_Gage_Skidmore.jpg/440px-Shazad_Latif_by_Gage_Skidmore.jpg"/>
      <Greeting name = "someone" img = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shazad_Latif_by_Gage_Skidmore.jpg/440px-Shazad_Latif_by_Gage_Skidmore.jpg"/>

    </div>
  );
};

export default Welcome;