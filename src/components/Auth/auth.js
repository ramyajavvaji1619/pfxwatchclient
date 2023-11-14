import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './index.css';
import logo from '../Auth/PFX Watch Black.png'
const Auth = () => {
    let navigate = useNavigate();
    const goToSignup = () => {
        navigate("/signup"); 
    }
     
    useEffect(()=>{
        const token=Cookies.get("jwt-token")
        if(token){
            navigate("/home")
        }
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showSubmitError, setShowSubmitError] = useState(false);

    const renderEmail = () => {
        return (
            <>
                <label className="label" htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter your Email"
                    className="user-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </>
        )
    }

    const renderPassword = () => {
        return (
            <>
                <label className="label" htmlFor="password">Password</label>
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Enter Your Password"
                        className="user-input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="box">
                    <label>
                        <input className="pass"
                            type="checkbox" 
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password
                    </label>
                    
                </div>
            </>
        )
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const url = "http://localhost:4445/auth/login";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === true) {
            Cookies.set('jwt-token', data.token);
            navigate("/home");
        } else {
            setShowSubmitError(true);
            setErrorMsg(data.message);
        }
    }

    return (
        <div className="jobby-app-container">
            <div className="card-container">
            <img src={logo} className="w-25 image-logo1" />

                <div>
                    
                </div>
                <form className="form-container" onSubmit={onSubmitForm}>
                    <div className="input-container">{renderEmail()}</div>
                    <div className="input-container">{renderPassword()}</div>
                    <button className="login-button" type="submit">Login</button>
                    {showSubmitError && <p className="error-msg">{errorMsg}</p>}
                </form>
                <div>
                    <p className="signup-link" onClick={goToSignup}>Don't have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Auth;
