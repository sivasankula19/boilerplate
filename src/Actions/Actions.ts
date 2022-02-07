const Constants = {
    registerUser:'registerUser',
    loginStatus: 'loginStatus'
  }

  const setLoginStatus = (data: any) => ({
    type: Constants.loginStatus,
    payload: data,
  })
  const setResgistUser =(data:any) => (console.log("hello actions",data),{
      type: Constants.registerUser,
      payload:data,
  })
  export default {
    setLoginStatus,
    setResgistUser
  }
  