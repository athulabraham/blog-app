import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [inputField, changeInputField] = useState(
    { "name":"" ,
    "image":"",
    "email":"",
    "password":""
    
    }
)

const inputHandler = (newEvent) => {
    changeInputField({ ...inputField, [newEvent.target.name]: newEvent.target.value })
}

const readValue=()=>{
    console.log(inputField)
    axios.post("http://127.0.0.1:8000/api/user/",inputField).then(
        (response)=>(
            alert(response.data.status)
       )
    )
}


  return (
    <div><br/><br/><br/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="name" value={inputField.name} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Image
                </label>
                <input type="text" className="form-control" name="image" value={inputField.image} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" >
                  Email
                </label>
                <input type="text" className="form-control" name="email" value={inputField.email} onChange={inputHandler}/>
              </div>
              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input type="password"  id="" className="form-control" name="password" value={inputField.password} onChange={inputHandler} />
              </div>
              
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">register</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href="/" class="card-link">
                  back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
