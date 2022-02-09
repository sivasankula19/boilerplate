import React, { useEffect } from 'react'
import { loaderService } from '../Services/LoaderService'
import './Loader.css'


export default function Loader() {
  useEffect(() => {
    loaderService.createLoaderElement(document.getElementById('loader'))
  }, [])
  return (
    <div className="loader-overlay" id="loader">
      <div className="loader"></div>
    </div>
  )
}

/**
 * import the loader in the index.tsx file
*/

// to use the loader
 

// import { loaderService } from '../service/LoaderService';

// call below function where we want loader
// loaderService.show();

// to hide loader
// loaderService.hide();

// to hide the loader (ex:while calling an API call loaderService.show() before calling API methods(get,put,post,delete) and call loaderService.hide() after successful call of API )

// EX:

// const callAPI = () => {
//     loaderService.show();
//    axios.get("https://jsonplaceholder.typicode.com/users")
//        .then(res => {
//            if (res.status === 200) {
//              loaderService.hide();
//              console.log(res.status,res.data)
//            }
//        }).catch(error => console.log(error));
// }
