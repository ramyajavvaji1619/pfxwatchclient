import { useState,useEffect } from "react";
import './trend.css';

function Trending(){

const [trending,SetTrending]=useState();

useEffect(() => {
    
    fetchVideos();
  }, []);
    
const fetchVideos = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY1NzA3NDE3MzI2NmY2ZWVlOTU4NCIsImlhdCI6MTcwMDQ2MzI4MiwiZXhwIjoxNzAwNTQ5NjgyfQ.D2bCy_w4JSPT65624wUxzNTBnRUFfroIviML8JzEfUo';  // Replace with your actual token
      const url = "http://localhost:4445/api/videos?title=title&search=trending";
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      };

      const response = await fetch(url, options);

      if (response.ok) { 
        const data = await response.json();
        
        SetTrending(data);
        console.log('Video data:', data);
      } else {
        
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        SetTrending("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      SetTrending("Error");
    }
  };


return(
    <div className="trend">
         <h1 className="header1">Trending videos here</h1>
    </div>
)
}
  export default Trending;