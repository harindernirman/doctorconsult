import React from 'react'
import { NavLink  } from 'react-router-dom'
import { useState  } from 'react'

const Register = () => {

    const [inpval, setINP] = useState({
        pname:"",
        pemail:"",
        page:"",
        pmobile:"",
        pproblem:""

    })
    const setdata =(e)=>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })
    }

    
 const addinpdata = async (e) => {
  e.preventDefault();
  const {pname,pemail,page,pmobile,pproblem} = inpval;
   const res = await fetch("http://localhost:8005/register",{  
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'multipart/form-data'
    },
      body:JSON.stringify({
        pname,pemail,page,pmobile,pproblem
      }) 
    })

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data){
      alert("error");
      console.log("error")
    }
    else {
      alert("data added");
      console.log("data added")
    //   setUdata(data);
    //   navigate("/");
    }
 }
    return (
        <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form onSubmit={addinpdata} className='mt-2'>
                <div className="row" >
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1">Patient Name</label>
                        <input type="text" onChange={setdata} value={inpval.pname} name="pname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1">Patient Email</label>
                        <input type="email" onChange={setdata} value={inpval.pemail} name="pemail" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1">Patient age</label>
                        <input type="text" onChange={setdata} value={inpval.page} name="page" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1"> Patient mobile</label>
                        <input type="number" onChange={setdata} value={inpval.pmobile} name="pmobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12>">
                        <label for="exampleInputPassword1" col-lg-6 col-md-6 col-12>Patient Problem</label>
                        <input type="text" onChange={setdata} value={inpval.pproblem} name="pproblem" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
