import React, { useState } from "react";
import HtmlInput from "../components/CommonInput";

function Home() {
  const [temp, setTemp] = useState("");
  const gettingData = (data: any) => {
    setTemp(data);
    console.log("save data", data);
  };
  console.log("========", temp);
  return (
    <div className="home">
      Home Page
      <HtmlInput
        inputPlaceHolder="enter name"
        inputOnChange={(data: any) => {
          gettingData(data);
        }}
        disabled={false}
      />
       <HtmlInput
        inputPlaceHolder="enter password"
        inputOnChange={(data: any) => {
          gettingData(data);
        }}
        disabled={false}
        inputType='password'
      />
      {/* <button onClick={()=>{gettingData()}}>get value</button> */}
    </div>
  );
}

export default Home;
