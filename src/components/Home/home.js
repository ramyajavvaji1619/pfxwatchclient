import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/header";
import Cookies from "js-cookie";
import logo from '../Home/PFX Watch Black.png'
import './home.css';

const Home = ()=>{
    let navigate=useNavigate();

    const token=Cookies.get('jwt-token');
    
    useEffect(()=>{
        if(token === undefined){
            navigate("/");
        }
    })

    const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchVideo();
    fetchVideos();
  }, []);

  const fetchVideo = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTMwNGU2MTY1MDhhYzRiYmU5ZDVlZCIsImlhdCI6MTY5OTkzOTYwNSwiZXhwIjoxNzAwMDI2MDA1fQ.56nkb_TO0oH5bY__dOu_ef9lTW8xfaLARTaMGCbHzfY';  // Replace with your actual token
      const url = "http://localhost:4445/api/videos/654f90f209ebd86318d0ea96";
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
        setVideo(data);
        console.log('Video data:', data);
      } else {
        // Handle non-OK responses
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        setVideo("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      setVideo("Error");
    }
  };
  

  const fetchVideos = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTMwNGU2MTY1MDhhYzRiYmU5ZDVlZCIsImlhdCI6MTY5OTkzOTYwNSwiZXhwIjoxNzAwMDI2MDA1fQ.56nkb_TO0oH5bY__dOu_ef9lTW8xfaLARTaMGCbHzfY';  // Replace with your actual token
      const url = "http://localhost:4445/api/videos";
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
        setVideo(data);
        console.log('Video data:', data);
      } else {
        // Handle non-OK responses
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        setVideo("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      setVideo("Error");
    }
  };

    const goToVideos = ()=>{
        navigate('/videos')
     }

     
    return(
        <>
        <Header/>
        <div className="home-container">
            <div className="responsive-container">
            <img src={logo} className=" image-logo " />
                <h1 className="main-heading">Find the videos you want</h1>
                <p className="video-desc">Buy PFX WATCH Premium.</p>
                <button className="find-videos" onClick={goToVideos}>Get It Now</button>
            
            </div>
            <div className="sidebar">
            <a href="#home">Home</a>
            <Link to ="/trending"><a href="#">Trending</a></Link>
            <Link to ="/gaming"><a href="#">Gaming</a></Link>
            <Link to ="/saved videos"> <a href="#">Saved Videos</a></Link>

        </div>
        </div>
        
        </>
    )
}
export default Home;
