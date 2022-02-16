import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import app_Actions from "../Actions";
import "../styles/Profile.css";

function Profile() {
  const loginUser: any = useSelector((state: any) => state.User.loginUser);
  const registeredUsers: any = useSelector((state: any) => state.User.registerUser)
  const userData: any = useSelector((state:any) => state.User)
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(loginUser.UserName);
  const userNameRef = useRef<HTMLInputElement>(null);
  const [userEmail, setUserEmail] = useState(loginUser.UserEmail);
  const EmailRef = useRef<HTMLInputElement>(null);
  const [userMobile, setUserMobile] = useState(loginUser.userMobile);
  const mobileRef = useRef<HTMLInputElement>(null);
  console.log(loginUser);
  

  //registerUser
  const updateUserData = () => {
    let updatedLoginUserInfo:any = {
      UserEmail: userEmail,
      UserName: userName,
      UserPassword: loginUser.UserPassword,
      userMobile: userMobile,
    }
    updatedLoginUserInfo['indexId'] = loginUser.indexId

    dispatch(app_Actions.user_Actions.setLoginUser(updatedLoginUserInfo))
    for(let i=0;i<registeredUsers.length;i++){
      
      console.log(registeredUsers[i])
    }
    // dispatch(app_Actions.user_Actions.setLoginUser(null))
    // dispatch(app_Actions.user_Actions.setRegisterUser(null))
    
    //ToDo: redux update the existing user should be added...

    console.log(registeredUsers)
    console.log(loginUser)
    console.log(userData)
  }


  return (
    <>
      <div className="card">
        <div className="container">
          <div className="img-div"></div>
          <label>User Name:</label>
          <div>
            <input
             className="inputClass"
              type="text"
              value={userName}
              ref={userNameRef}
              name="userId"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <label>Email Id:</label>
          <div>
            <input
            readOnly={true}
             className="inputClass"
              type="text"
              value={userEmail}
              ref={EmailRef}
              name="emailId"
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
          </div>
          <label>Mobile No:</label>
          <div>
            <input
              className="inputClass"
              type="text"
              value={userMobile}
              ref={mobileRef}
              name="emailId"
              onChange={(e) =>{ 
                userEmail.current.
                setUserMobile(e.target.value)
              }}
            ></input>
          </div>
          <div></div>
          <button className="update-button" onClick={updateUserData}>Update</button>

          
        </div>
        <a>Change Password</a>
      </div>
    </>
  );
}

export default Profile;
