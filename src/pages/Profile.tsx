import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import app_Actions from "../Actions";
import { loaderService } from "../Services/LoaderService";
import "../styles/Profile.css";

function Profile() {
  const loginUser: any = useSelector((state: any) => state.User.loginUser);
  const registeredUsers: any = useSelector((state: any) => state.User.registerUser)
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(loginUser.UserName);
  const [userEmail, setUserEmail] = useState(loginUser.UserEmail);
  const [userMobile, setUserMobile] = useState(loginUser.userMobile);
  const updateUserData = () => {
    let updatedLoginUserInfo:any = {
      UserEmail: userEmail,
      UserName: userName,
      UserPassword: loginUser.UserPassword,
      userMobile: userMobile,
    }

    for(let i=0;i< registeredUsers.length;i++){
      if(registeredUsers[i].UserEmail === loginUser.UserEmail){
        registeredUsers[i] = updatedLoginUserInfo
        break
        }
    }

    dispatch(app_Actions.user_Actions.setEditUSer(updatedLoginUserInfo))
    dispatch(app_Actions.user_Actions.setLoginUser(updatedLoginUserInfo))
    loaderService.show()
    setTimeout(() => {
      loaderService.hide()
      
    }, 300);
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
              name="emailId"
              onChange={(e) =>{ setUserMobile(e.target.value)}}
            ></input>
          </div>
          <div></div>
          <button className="update-button" onClick={updateUserData}>Update</button>

          
        </div>
        <p>Change Password</p>
      </div>
    </>
  );
}

export default Profile;
