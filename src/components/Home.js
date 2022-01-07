import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [getuserdata, setUserdata] = useState([]);
    const [myName, setMyName] = useState('Waiting');

    const getdata = async (e) => {
        setUserdata([]);
        const res = await fetch("http://localhost:8005/getdata", {
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
      }, [])

      // const changeName = ()=>{
      //   setMyName('Checkhed')
      // }

      
  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:8005/deleteuser/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const deletedata = await res2.json();
    console.log(deletedata);
    // getdata();


    if (res2.status === 422 || !deletedata) {
      console.log("error")

    }
    else {
      console.log("delete data")
      // setDLTdata(deletedata)
      setMyName('Checkhed')
      getdata();
    }
  }
       

    return (
        <>
            <div className='mt-5'>
                <div className='container'>
                    <div className='add_btn mt-2 mb-2'>
                      {/* <h1>{myName}</h1> */}
                     
                        <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
                        
                    </div>
                    <table class="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Token No.</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Patient Email</th>
                                <th scope="col">Patient Age</th>
                                <th scope="col">Problem</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.pname}</td>
                        <td>{element.pemail}</td>
                        <td>{element.page}</td>
                        <td>{element.pproblem}</td>
                        <td>{element.pmobile}</td>
                        <td><button className='btn btn-primary' onClick={() => deleteuser(element._id)}>{element.pstatus === true ? "waiting" : "checked"}</button></td>
                        
                        {/* <td>{element.pstatus === true ? "online" : "offline" }</td> */}
                        
                        {/* <td className='d-flex justify-content-between'>
                          <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                          <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><CreateIcon /></button></NavLink>
                          <button className='btn btn-warning' onClick={() => deleteuser(element._id)}><DeleteIcon /></button>
                        </td> */}
                      </tr>
                    </>
                  )
                })
              }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
