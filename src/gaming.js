import { useState,useEffect } from "react";
import "./comb.css";

function Gaming(){

const [gaming,SetGaming]=useState();

useEffect(() => {
    
    fetchVideos();
  }, []);
    
const fetchVideos = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTMwNGU2MTY1MDhhYzRiYmU5ZDVlZCIsImlhdCI6MTY5OTkzOTYwNSwiZXhwIjoxNzAwMDI2MDA1fQ.56nkb_TO0oH5bY__dOu_ef9lTW8xfaLARTaMGCbHzfY';  // Replace with your actual token
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