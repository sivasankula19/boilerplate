const Constants = {
    registerUser:'registerUser',
    loginStatus: 'loginStatus',
    logOut:'logOut',
    loginUser:'loginUser',
    editUSer:'editUser'
  }

  const setLoginStatus = (data: any) => ({
    type: Constants.loginStatus,
    payload: data,
  })
  const setRegisterUser =(data:any) =>({
      type: Constants.registerUser,
      payload:data,
  })
  const setLoginUser=(data:any)=>({
    type: Constants.loginUser,
    payload:data,
  })
  const setLogOut = (data:null) => (console.log("LOGOUT"),{
    type:Constants.logOut,
    payload:data
  })
  const setEditUSer = (data:any) => ({
    type: Constants.editUSer,
    payload:data,
  })
  export default { 
    setLoginStatus,
    setRegisterUser,
    setLoginUser,
    setLogOut,
    setEditUSer,
    Constants
  }