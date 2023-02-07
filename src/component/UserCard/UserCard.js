import React from 'react'
import './UserCard.css'
const UserCard=({f_name , l_name , email , avatar})=> {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Name - {f_name} {l_name}</h5>
                <h6 className="card-title">Email - {email}</h6>
                <img src={avatar}/>
               
            </div>
        </div>
    </div>
  )
}
export default UserCard;