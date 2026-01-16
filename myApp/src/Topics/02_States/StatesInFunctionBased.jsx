import { useState } from "react";
function StatesInFunctionBased() {
    let [count, setCount] = useState(0);// returns , [undefined, f]

    function incre(){
        setCount((prev)=> prev+1);
        setCount((prev)=> prev+1);
        setCount((prev)=> prev+1);
    }

    function decre(){
        setCount((prev) => (prev > 0 ? prev -1 : 0));
    }
     function reset(){
        setCount(0);
    }

return (
    <div>
        <h1>Learn States in Function Based Component</h1>
        <h2>Counter : {count}</h2>
        <button onClick={incre}>increment</button>
        <button onClick={decre}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
);
}

export default StatesInFunctionBased;