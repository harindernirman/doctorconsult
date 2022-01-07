const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
 
// router.get("/", (req,res)=>{
//     console.log("connect");
// });

router.post("/register", async (req, res) => {
    try {
        const {  pname, pemail, page, pmobile, pproblem } = req.body;
    if (!pname || !pemail || !page || !pmobile || !pproblem) {
        res.status(404).json("plz fill the data");
    }
        const preuser = await users.findOne({ pemail: pemail });
        console.log(preuser);
        if (preuser) {
            res.json("this user is already present");
        } else {
            const adduser = new users({
                pname, pemail, page, pmobile, pproblem
            })
             const save = await adduser.save();
            res.json({adduser});
            // console.log({adduser});
            // console.log("user id  " +save.id);
            
            // const newNote = {};
            // newNote.pstatus = false;
            // setTimeout( async function() {
            //     const note = await  users.findByIdAndUpdate(save.id,{$set : newNote},{new:true}
            // )} , 10000);
            }
    } catch (error) {
        res.status(404).json(error)
    }
});


router.get("/getdata", async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
        
    } catch (error) {

        res.status(404).json(error)
    }
});





// router.get("/getuser/:id", async(req,res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;
//         const userindividual = await users.findById({_id:id});
//         console.log(userindividual);
//         res.status(201).json(userindividual)
//     } catch (error) {
//         res.status(422).json(error)
//     }
// })

// update user data
// router.patch("/updateuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const updateduser = await users.findByIdAndUpdate(id,req.body,{
//             new:true
//         });

//         console.log(updateduser);
//         res.status(201).json(updateduser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

// delete user data 

router.patch("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const newNote = {};
        newNote.pstatus = false;
        const note = await  users.findByIdAndUpdate(id,{$set : newNote},{new:true})
        console.log("deleteuser");
        res.status(201).json("deleteuser");
    } catch (error) {
        res.status(404).json(error);
    }
})


// delete user data 

// router.delete("/deleteuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;
//       

//        const deleteuser = await users.findByIdAndDelete({_id:id});
//         console.log(deleteuser);
//         res.status(201).json(deleteuser);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })
module.exports = router;