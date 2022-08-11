import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import './styles.css';

const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinate = { lat: 0, lng: 0};
  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBAka8CMZ3koNMWTWjJYZ0GmgrFWsD10PQ"}}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // onChange={''}
        // onChildClick={''}
        options={''}
      >

      </GoogleMapReact>
    </div>
  )
};

export default Map;
