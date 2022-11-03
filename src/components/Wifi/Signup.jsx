import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import  {useNavigate} from "react-router-dom"
import "./form.css"


function Signup() {
    let navigate = useNavigate()
    const [name, setName] = useState("")
    const [pnumber, setPnumber] = useState("")
    const [age, setAge] = useState(0)
    const [country, setCountry] = useState("")

    let handleSubmit =  async (e) => {
        console.log("clicked")
        e.preventDefault();
        try{
      
            const {data} =  await axios.post("http://18.118.170.80/users/new",  {
                name: name,
                        phoneNumber: pnumber,
                        Age: age,
                        country: country
            });
            if(data.status === "success"){
                setName("")
                setAge("")
                setPnumber("")
                setCountry("")
                window.location.href = 'https://dianiapp.me' 
            } else {
                let path = '/error'
                navigate(path)
            }
        } catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <form style={{maxWidth:"700px", margin:"auto"}}>
        <label>Name</label><br/>
        <input required type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}   /><br/>

        <label>Phone Number</label><br/>
        <input required type="text" placeholder="Enter your Phone Number" onChange={(e) => setPnumber(e.target.value)}  /><br/>

        <label>Your Age</label><br/>
        <input required type="number" placeholder="Enter your Age" onChange={(e) => setAge(e.target.value)}  /><br/>


        <label>Your Country</label><br/>
        <input required type="text" placeholder="Enter your Country" onChange={(e) => setCountry(e.target.value)}  /><br/>


      <button onClick={handleSubmit} type="submit">
        Sign Up
      </button>
      <p>already have an account ? <Link to="/signin"> sign in</Link></p>
    </form>
    </>
  )
}

export default Signup