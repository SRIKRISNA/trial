import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import './style.css'

const Signup = () => {
    const navigate = useNavigate();
    const [reg, setRegister] = useState({
        userName:"",
        password:"",
        confirmpassword:""
    })
    // passwrod eye show / hide icon
    const [show, setShow]=useState(false)
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }
    const handleNavigate=()=>{
        navigate('/');
    }
    const handleReg = (e) => {
        e.preventDefault();
        if(reg.password === reg.confirmpassword){
            console.log(reg)
            axios({
                url:"http://localhost:5000/user/register",
                method:"POST",
                headers:{},
                data:reg
            }).then((res) => {
                console.log(res)
                navigate("/");
            }).catch((err) => {
                setShow(!show)
                setTimeout(() => {
                    setShow(!setShow)
                }, 2000)
                console.log(err);
            })
        }else{
            alert("passwrods are not matching!!")
        }
        setRegister({userName:"", password:"", confirmpassword:""});
    }

    return (
        <>
            <div className="loginMainContainer">
                <h2>Register Form</h2>
                <form className="loginForm" >
                    <input type="text field" placeholder="User Name" value={reg.userName} className="inputField" onChange={(e) => {setRegister({...reg, userName: e.target.value})}} /> <br/>
                    <div className='input-pwd'>
                        <input type="password"  placeholder="Password" value={reg.password} id='password' className="inputField" onChange={(e) => {setRegister({...reg, password: e.target.value})}} />
                        <span onClick={handleToggle} style={{ "display": "none" }}><Icon icon={icon} size={20} /></span><br />
                        {/* {show ? <span className='error'>Username And Password Does't Match</span> : ""} */}
                    </div> 
                    <div className='input-pwd'>
                        <input type="password"  placeholder="Confirm Password" value={reg.cpassword} id='cpassword' className="inputField" onChange={(e) => {setRegister({...reg, confirmpassword: e.target.value})}} />
                        <span onClick={handleToggle} style={{ "display": "none" }}><Icon icon={icon} size={20} /></span><br />
                        {show ? <span className='error'>Username Exists</span> : ""}
                    </div> 
                    <button type="submit" className="login-btn field" onClick={handleReg}>Register</button>
                    <button type="submit" className="login-btn field" onClick={handleNavigate}>Login</button><br/>

                </form>
            </div>
        </>
    )
}
export default Signup;