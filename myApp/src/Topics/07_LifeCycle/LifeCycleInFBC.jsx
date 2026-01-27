import React, { useState, useEffect, use } from 'react';
import { useRef } from 'react';

 const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);// {current: true}

    useEffect(() => {
      console.log("Render");
    });

    useEffect(() => {
      console.log("component Mounted");

      let intervalID = setInterval(() => {
        console.log("API Called");
      }, 2000);

      // clean-up function
      return () => {
        console.log("component Unmounted");
        clearInterval(intervalID);
      };
    }, []);

    useEffect(() => {
      if (initialRender.current) {
        initialRender.current = false;
        return;
      }

        console.log("component Updated");
    }, [count]);
    return (
      <div>
        <h2>LifeCycleInFBC {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>

      </div>
    )
  }

export default LifeCycleInFBC;