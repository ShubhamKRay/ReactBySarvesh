import {useState } from "react";
const DropD0own = () => {
    return (
        <div>
        
        <h1>Drop-Down Task</h1>
        <button onClick={() => setToggle(!toggle)}>
            {toggle ? "Hide" : "Show"}
            </button>

            {toggle && <p>
        <mark>
            Lorem ipsum dolor, sit amet consectetur ady47trygrhewjfhjwe fewbjdhudhednmndjehduyedeqmqd
        </mark>
        </p> }
        </div>
    );
};
export default Dropdown;