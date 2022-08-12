import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get (url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'd3d34dd43bmshf12eb58e1051496p17b2f3jsn728c67911849',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    
    return data;
  } catch (error) {
    throw error;
  }
}