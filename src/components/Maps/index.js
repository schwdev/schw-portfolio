import React from 'react'
import {  GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDtoAfgSER7cblK0_oYJZ1iV9WxXTi8aAc",
  });

  const position = { 
    lat: -3.0167167243471007,
    lng: -59.9827073559925

  }

  const myOptions = {
    mapTypeId: "hybrid",
  }
  
   return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={20}
       options={myOptions}
       
      >
        <Marker position={position} options={{
          label: {
            text: "CASA 45",
            className: "map-marker"
          },
        }} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)