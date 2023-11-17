import React, { useState } from 'react'
import axios from 'axios'
import Head from './Head'

const Search = () => {

    const [inputField, changeInputField] = useState(
        {
            "title": "",
        }
    )

    const inputHandler = (newEvent) => {
        changeInputField({ ...inputField, [newEvent.target.name]: newEvent.target.value })
    }

    const [result,changeResult]=useState(
        []
    )

    const readValue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/search/",inputField).then(
            (response)=>{
                changeResult(response.data)
            }
        )
    }

    return (
        <div>

            <Head />
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title:</label>
                                <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-info">search</button>
                            </div>
                        </div>
                    </div>

                    {result.map(
                    (value,index)=>{
                        return <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           
                        <div class="card" >
                        <img src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_640.jpg" class="card-img-top" alt="..."/>
                    
                            <div class="card-body">
                                
                                <p class="card-text">Name: {value.title}</p>
                                <p class="card-text">User_Id: {value.user_id}</p>
                                <p class="card-text"> {value.post}</p>
                                
                                
                               
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    }
                )}



                </div>
            </div>

        </div>
    )
}

export default Search