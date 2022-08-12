import React, {useState} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import './styles.css';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("0");

  return (
    <div className="container">
      <Typography variant="h4" className="headline">
        Restaurants, Hotels, & Attraction around you
      </Typography>
      <FormControl className="formControl">
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="formControl">
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={2}>Above 2.0</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className="list">
        {places?.map((place, i) => (
          <Grid item xs={12} key={i}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default List;
