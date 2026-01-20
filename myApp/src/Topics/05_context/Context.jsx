import { createContext, useState } from 'react';


//! Step 1 : Create a Context and export it
export const myContextStore = createContext();// Returns, Context Object
const Context = (props) => {
    console.log(props);//{children: {}}

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let data1 = 10;
    let data2 = "Hello World";

    //! Step 2 : Provide a Context 
  return (
    
      <myContextStore.Provider value={{data1, data2, isLoggedIn, setIsLoggedIn}}>   
        {props.children}
      </myContextStore.Provider>
    
  );
};

export default Context
