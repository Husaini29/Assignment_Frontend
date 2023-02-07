import React, { useState } from 'react'
import './NavBar.css'
import UserCard from '../UserCard/UserCard'
import ScaleLoader from "react-spinners/ScaleLoader";

const url = "https://reqres.in/api/users?page=1";

const NavBar=()=> {

  const [output,setOutput] = useState('');
  const [loading,setLoading] = useState(false);

  function clickHandler(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>setOutput(data))

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <div className='nav-container'>     
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">XYZ Company</span>
            <button 
              onClick={clickHandler}
              type="button" className="btn btn-primary">Get Users</button>
        </div>
        </nav>
        
            <div>
                {
                  output.data?.map(item=>(
                    <>
                      {
                        loading ? <ScaleLoader className='loader' color="#36d7b7" /> :
                        <UserCard f_name={item.first_name} l_name={item.last_name} email={item.email} 
                        avatar={item.avatar}/>
                      }
                    </>
                  ))
                }
            </div>
        </div>
  )
}
export default NavBar;