import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const logOutHandler=()=>{
        localStorage.removeItem("authorization", "");
        localStorage.removeItem("userName", "");
        navigate("/")
    }
        return (
            <div className='sidebar'>
                <h3>TO DO LIST</h3><br/>
                <h5>History</h5>
                <div id='logout'><button onClick={()=>{
                    logOutHandler()
                }}>Log Out </button> </div>
                {/* <div className='logout'><button id='b-logout' onClick={() => { logoutHandler() }}>LOGOUT</button></div> */}
            </div>
        );
}
export default Sidebar;

