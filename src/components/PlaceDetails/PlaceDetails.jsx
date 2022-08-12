import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './styles.css';

const PlaceDetails = ({place}) => {
  console.log(place);
  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{height: 300}}
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">out of{place.num_reviews}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Distance</Typography>
            <Typography gutterBottom variant="subtitle1">{place.distance_string}</Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box my={1} display="flex" justifyContent="space-between" alignItem="center">
              <img src={award.images.small} alt={award.display_name}/>
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({name}) => (
            <Chip key={name} size="small" label={name} className="chip" />
          ))}
          <Box>
            <LocationOnOutlinedIcon />
            {place?.address && (
              <Typography gutterBottom varient="subtitle2" color="textSecondary">
                {place.address}
              </Typography>
            )}
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <PhoneIphoneIcon /> 
            {place?.phone && (
              <Typography gutterBottom varient="subtitle2" color="textSecondary">
                {place.phone}
              </Typography>
            )}
          </Box>
          
          <CardActions>
              <Button size="small" color="primary" onClick={() => window.open(place?.web_url, "_blank")}>
                City Advisor
              </Button>
              <Button size="small" color="primary" onClick={() => window.open(place?.website, "_blank")}>
                Website
              </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
};

export default PlaceDetails;
