import axios from "axios";
import { getEnvironmentData } from "worker_threads";
import { api_service } from "../api/api_service";
function Home() {
  const getData = () => {
    api_service
      .get({
        endPoint: "https://jsonplaceholder.typicode.com/posts/100",
        // endPoint: "https://randomuser.me/api/?results=50",
        domain: "",
      })
      ?.then((res: any) => {
        console.log("data", res);
      });
  };
  const postData = () => {
    api_service
      .post({
        endPoint: "https://jsonplaceholder.typicode.com/posts",
        domain: "",
        payLoad: {
          userId: 1,
          id: 1,
          title: "testing",
          body: "test api",
        },
      })
      ?.then((res: any) => {
        console.log("data", res);
      });
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <button
        onClick={() => {
          postData();
        }}
      >
        post Data
      </button>
      <button
        onClick={() => {
          getData();
        }}
      >
        get Data
      </button>
    </div>
  );
}

export default Home;
