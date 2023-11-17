//import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate()
   
    const [data,changeData]=useState(
        {
        "email":"",
        "password":""
        }
    )

    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)

        if (data.email == "admin@gmail.com"&& data.password == "1234") {
            navigate("/add")
            
        } else {
            alert("invalid credentials")
            
        }



        // axios.post("http://172.22.2.251:4001/api/v1/packages",data).then(
        //     (response)=>(
        //         alert(response.data.message)
        //     )
        // )
    }
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  emailId
                </label>
                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input type="password" name="password" id="" className="form-control"  value={data.password} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {/* <button className="btn btn-success" >login</button> */}
                <Link type="button" onClick={readValue} className="btn btn-success" to="/blog">Login</Link>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href="/register" class="card-link">
                  new user
                </a>
                
              </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Login