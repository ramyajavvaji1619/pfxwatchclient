import{Routes, Route} from 'react-router-dom';
import './App.css';
import LoginForm from '../src/components/Auth/auth';
import Signup from '../src/components/Signup/signup';
import Home from '../src/components/Home/home'
import Trending from './trending';
import Gaming from './gaming';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path ="/" element={<LoginForm/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/trending" element={<Trending/>}/>
      <Route exact path="/gaming" element={<Gaming/>}/>

    
      
     </Routes>
    </div>
  );
}

export default App;