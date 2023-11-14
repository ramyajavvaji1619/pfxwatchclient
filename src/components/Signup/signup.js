import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './signup.css';
import logo from '../Signup/PFX Watch Black.png'

function Signup() {

 
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setgender] = useState("");
  const [confirmPasword, setconfirmPasword] = useState("");
  let navigate = useNavigate();
  const [data, Setdata] = useState([]);


  const PerfexUsersData = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    gender: gender,
    password: password,
    confirmPasword: confirmPasword
  }
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (name && email && phoneNumber && gender && password && confirmPasword !== "") {
      axios
        .post("http://localhost:4445/auth/signup", PerfexUsersData)
        .then((response) => {
          Setdata(response.data);

          console.log(PerfexUsersData);

          if (response.status === 200) {
            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/");
            }, 3000);

          }
        })
        .catch((error) => {
          toast.error("enter new email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error.response.PerfexUsersData)

        });
    }
    else {
      toast.warning("Enter the Required Details");
    }
  };
 

  return (
    <div>
      <div className="container">
        <div className="row">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          
          <ToastContainer />
          <form className="card text-start" style={{ marginTop: "100px" }} onClick={onSubmitForm}>
            <img src={logo} className="image-logo1" />
            <div className="row">

              <div className="col-md-6">
                <label className="label1">Name</label>
                <input type="text" placeholder="Enter name" onChange={(e) => setname(e.target.value)}
                  value={name} className="form-control" />
              </div>
              <div className="col-md-6">
                <label  className="label1">Email</label>
                <input type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}
                  value={email} className="form-control" />
              </div>
              <div className="col-md-6">
                <label  className="label1">PhoneNumber</label>
                <input type="text" placeholder="Enter phonenumber" onChange={(e) => setphoneNumber(e.target.value)}
                  value={phoneNumber} className="form-control" />
              </div>
              <div className="col-md-6">
                <label  className="label1">Gender</label>
                <input type="text" placeholder="Enter gender" onChange={(e) => setgender(e.target.value)}
                  value={gender} className="form-control" />
              </div>
              <div className="col-md-6">
                <label  className="label1">Password</label>
                <input type="password" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)}
                  value={password} className="form-control" />
              </div>
              <div className="col-md-6">
                <label  className="label1">ConfirmPassword</label>
                <input type="password" placeholder="Enter confirmpassword" onChange={(e) => setconfirmPasword(e.target.value)}
                  value={confirmPasword} className="form-control" />
              </div>
              <button className="signup w-25" onClick={onSubmitForm}>Signup</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;