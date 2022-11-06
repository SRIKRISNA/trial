import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import './style.css'

const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        userName: "",
        password: ""
    })

    const handleNavigate=()=>{
        navigate('/register');
    }

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

    const handleLogin = (e) => {
        e.preventDefault();
        if(login.userName === "" || login.password === ""){
            alert("Username or password is missing!");
        }else{
            axios({
                url:"http://localhost:5000/user/login",
                method:"POST",
                headers:{},
                data:{userName: login.userName, password: login.password}
            }).then((loginData) => {
                localStorage.setItem("authorization", loginData.data.authToken);
                navigate("/todo");
            }).catch((err) => {
                setShow(!show)
                setTimeout(() => {
                    setShow(!setShow)
                }, 2000)
                console.log(err);
            })
        }
        setLogin({userName:"", password:""});
    }

    return (
        <>
            <div className="loginMainContainer">
                <h2>Login Form</h2>
                <form className="loginForm" >
                    <input type="text field" placeholder="User Name" value={login.userName} className="inputField" onChange={(e) => {setLogin({...login, userName: e.target.value})}} /> <br/>
                    <div className='input-pwd wrapper'>
                        <input type="password"  placeholder="Password" value={login.password} id='password' className="inputField" onChange={(e) => {setLogin({...login, password: e.target.value})}} />
                        <span onClick={handleToggle} style={{ "display": "none" }}><Icon icon={icon} size={20} /></span><br />
                        {show ? <span className='error'>Username And Password Does't Match</span> : ""}
                    </div> <br />
                    <button type="submit" className="login-btn field" onClick={handleLogin}>Log In</button>
                    <button type="submit" className="login-btn field" onClick={handleNavigate}>Signup</button><br/>
                </form>
                <p style={{color:"red"}}>Forgot Password..?</p>
            </div>
        </>
    )
}
export default Login;