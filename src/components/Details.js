import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
// import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

const Details = () => {

    const {id} = useParams("");
    const [getuserdata, setUserdata] = useState([]);
    const getdata = async () => {

        const res = await fetch(`http://localhost:8005/getuser/${id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 404 || !data) {
          console.log("error")
        }
        else {
          setUserdata(data)
          console.log("get data")
        }
      }
    useEffect(() => {
        getdata();
      // eslint-disable-next-line
    },[]);

    return (
        <div className='container mt-3'>
            <h1 >Welcome Harinder Nirman</h1>
            <Card sx={{ maxWidth: 600 }} >
            <CardContent>
                   <div className='add_btn'>
                   <button className='btn btn-primary mx-3'><CreateIcon/></button>
                   <button className='btn btn-warning'><DeleteIcon/></button>
                    </div>
                <div className='row'>
                <div className='left_view col-lg-6 col-md-6 col-12'>
                <img src="/profile.png" style={{width:50}} alt="profile"/>
                <h3 className='mt-3'>Name: <span style={{fontWeight:400}}>{getuserdata.pname}</span></h3>
                <h3 className='mt-3'>Age: <span style={{fontWeight:400}}>{getuserdata.page}</span></h3>
                <p className='mt-3'><EmailIcon/>Email: <span>{getuserdata.pemail}</span></p> 
                {/* <p className='mt-3'><GroupWorkIcon/>Occupation: <span>{getuserdata}</span></p>  */}
                </div>
                <div className='right_view col-lg-6 col-md-6 col-12'>
                 
                    <p className='mt-5'><MobileFriendlyIcon/>Mobile: <span>{getuserdata.pmobile}</span></p>
                    {/* <p className='mt-3'><AddLocationIcon/>Location: <span>{getuserdata}</span></p> */}
                    {/* <p className='mt-3'>Description: <span>{getuserdata}</span></p> */}
               </div>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}

export default Details
