import React from 'react';
import './style.css';

function Header(){
    const Authtoken = localStorage.getItem("authorization");
    const userName = localStorage.getItem("userName");
    console.log(userName);
    return(
        <>
            <p className='puser'>{userName}</p>
            {/* <h2>Hello</h2> */}
        </>
    )
}
export default Header;
