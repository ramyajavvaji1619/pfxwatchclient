import { useState,useEffect } from "react";
import "./comb.css";

function Gaming(){

const [gaming,SetGaming]=useState();

useEffect(() => {
    
    fetchVideos();
  }, []);
    
const fetchVideos = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY1NzA3NDE3MzI2NmY2ZWVlOTU4NCIsImlhdCI6MTcwMDQ2MzI4MiwiZXhwIjoxNzAwNTQ5NjgyfQ.D2bCy_w4JSPT65624wUxzNTBnRUFfroIviML8JzEfUo';  // Replace with your actual token
      const url = "http://localhost:4445/api/videos?title=title&search=gaming";
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      };

      const response = await fetch(url, options);

      if (response.ok) { 
        const data = await response.json();
        // Set video data using setVideo
        SetGaming(data);
        console.log('Video data:', data);
      } else {
        
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        SetGaming("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      SetGaming("Error");
    }
  };


return(
    <div className="back">
        <h1 className="header">Gaming videos here</h1>
    </div>
)
}
  export default Gaming;