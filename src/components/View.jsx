import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Head from './Head';


const View = () => {
    //   const [isLoading, changeLoading] = useState(true);
  
    const [data, changeData] = useState([]);

  
       const fetchData =()=>{
        axios.post("http://127.0.0.1:8000/api/view/").then(
          (response)=>{
            changeData(response.data)
          }
        )
          
         }
         useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Head />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 card-group">
                                <div class="card" >
                                <img src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_640.jpg" class="card-img-top" alt="..."/>
                            
                                    <div class="card-body">
                                        
                                        <p class="card-text">Title: {value.title}</p>
                                        <p class="card-text">User_Id: {value.user_id}</p>
                                        <p class="card-text"> {value.post}</p>
                                        
                                        
                                       
                                    </div>
                                </div>
                            </div>

                            }
                           )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default View