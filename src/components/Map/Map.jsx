import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import './styles.css';

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const isDesktop = useMediaQuery('(min-width:600px)');

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
        {places?.map((place, i) => (
          <div
            className="markerContainer"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            { !isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large"/>
            ): (
              <Paper elevation={3} className="paper">
                <Typography variant="subtitle2" className="typography">
                  {place.name}
                </Typography>
                <img
                  className="pointer"
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
};

export default Map;
