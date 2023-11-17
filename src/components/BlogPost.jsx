import axios from 'axios'
import React, { useState } from 'react'
import Head from './Head'

const Add = () => {

    const [inputField, changeInputField] = useState(
        { "title":"" ,
        "user_id":"",
        "post":""
        
        }
    )

    const inputHandler = (newEvent) => {
        changeInputField({ ...inputField, [newEvent.target.name]: newEvent.target.value })
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/add/",inputField).then(
            (response)=>(
                alert(response.data.status)
           )
        )
    }


  return (
    <div>

       <Head/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title:</label>
                            <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User_Id:</label>
                            <input type="text" className="form-control" name='user_id' value={inputField.user_id} onChange={inputHandler}/>
                        </div>

                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post:</label>
                            <input type="text" className="form-control" name='post' value={inputField.post} onChange={inputHandler}/>
                        </div>

                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add