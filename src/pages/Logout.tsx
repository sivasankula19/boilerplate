import React, { useEffect } from 'react';
import { loaderService } from '../Services/LoaderService';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import app_Actions from '../Actions/Actions';
function Logout() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredUsers: any = useSelector((state: any) => state);

  const loaderPage = () => {
    setTimeout(() => {
      loaderService.hide()
    }, 3000);
    loaderService.show()
    dispatch(app_Actions.setLogOut(null));
    let path = `/`;
    navigate(path);
  }
  return (
    <div className="home">
        Logout Page
        <button onClick={()=>loaderPage()}>loader</button>
    </div>
  );
}

export default Logout;
