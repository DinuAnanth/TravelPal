
import axios from "axios";




export const getPlacesData = async (type,sw,ne) => {
  try{
    const {data :{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude:ne.lng ,
        },
        headers: {
          'X-RapidAPI-Key': '1caae1d8e5mshfc6e64ad450bc2dp1e61fdjsncbb838b5fdfc',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
    return data;
  }
  catch(error){
     console.log(error)
  }
}
