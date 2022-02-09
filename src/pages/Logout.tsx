import React, { useEffect } from 'react';
import { loaderService } from '../Services/LoaderService';

function Logout() {

  const loaderPage = () => {
    setTimeout(() => {
      loaderService.hide()
    }, 3000);
    console.log('show')
    loaderService.show()
  }
  return (
    <div className="register">
        Logout Page
        <button onClick={loaderPage}>loader</button>
    </div>
  );
}

export default Logout;
