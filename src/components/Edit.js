import React from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { updatedata } from './Context/ContextProvider'


const Edit = () => {

    // const {updata, setUPdata} = useContext(updatedata)
    const navigate = useNavigate();
    const [inpval, setINP] = useState({
        pname:"",
        pemail:"",
        page:"",
        pmobile:"",
        pproblem:""


    })
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const { id } = useParams("");

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
            setINP(data)
            console.log("get data")
        }
    }
    useEffect(() => {

        getdata();

           // eslint-disable-next-line 
    }, []);

    const updateuser = async(e) => {
        e.preventDefault();
        const { pname,pemail,page,pmobile,pproblem } = inpval;

        const res2 = await fetch(`http://localhost:8005/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pname,pemail,page,pmobile,pproblem

            })

        })
        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 404 || !data2) {
            alert("fill the data");
            console.log("error")
        }
        else {
            alert("data update");
            console.log("added");
            // setUPdata(data2);
            navigate("/");
        }
    }
    return (
        <div className='container'>
            <NavLink to="/">Home 2</NavLink>

            <form className='mt-2'>
                <div className="row" >

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" onChange={setdata} value={inpval.pname} name="pname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email" onChange={setdata} value={inpval.pemail} name="pemail" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1">age</label>
                        <input type="text" onChange={setdata} value={inpval.page} name="page" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1">mobile</label>
                        <input type="number" onChange={setdata} value={inpval.pmobile} name="pmobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12>">
                        <label htmlFor="exampleInputPassword1" col-lg-6 col-md-6 col-12>problem</label>
                        <input type="text" onChange={setdata} value={inpval.pproblem} name="pproblem" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 col-lg-6 col-md-6 col-12>">
                        <label for="exampleInputPassword1" col-lg-6 col-md-6 col-12>Address</label>
                        <input type="text" onChange={setdata} value={inpval.address} name="address" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1">Description</label>
                        <textarea type="text" onChange={setdata} value={inpval.description} name="description" className="form-control" id="" col="30" rows="5" />
                    </div> */}
                    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
