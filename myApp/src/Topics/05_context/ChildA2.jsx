import React, { use, useContext } from 'react'
import { myContextStore } from './Context';

const ChildA2 = () => {

    //! Step 3 : Consume Context, Return value of createContext() 
    let {setIsLoggedIn, isLoggedIn} = useContext(myContextStore);
    
  return (
    <div>
      <h1>Child A2 component</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  )
}

export default ChildA2
