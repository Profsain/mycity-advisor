import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import './styles.css';

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBAka8CMZ3koNMWTWjJYZ0GmgrFWsD10PQ"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        // // onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
};

export default Map;
