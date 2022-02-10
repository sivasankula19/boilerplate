const Constants = {
    registerUser:'registerUser',
    loginStatus: 'loginStatus',
    logOut:'logOut'
  }

  const setLoginStatus = (data: any) => ({
    type: Constants.loginStatus,
    payload: data,
  })
  const setResgistUser =(data:any) =>({
      type: Constants.registerUser,
      payload:data,
  })
  const setLogOut = (data:null) => (console.log("LOGOUT"),{
    type:Constants.logOut,
    payload:data
  })
  export default {
    setLoginStatus,
    setResgistUser,
    setLogOut,
    Constants
  }
  