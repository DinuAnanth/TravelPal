import React from 'react'
import axios from "axios";
const d=localStorage.getItem('des')
const homeapi = async () => {
    const options = {
        method: 'GET',
        url: 'https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding',
        params: {city: `${d}`},
        headers: {
          'X-RapidAPI-Key': 'e081e2cae8msh464bab9c0e86fc7p133eccjsn96278e86b919',
          'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

export default homeapi