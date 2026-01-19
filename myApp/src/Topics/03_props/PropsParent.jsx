// import PropsChild1 from "./PropsChild1";
// const PropsParent = () => {
//     return (
//         <div>
//             <h1>Learn Props</h1>
//             <PropsChild1 abc = {10}/>

//         </div>
//     );
// };
// export default PropsParent;







import PropsChild1 from "./PropsChild1";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";
import {usestate} from "react";


const PropsParent = () => {
    let [state,setState] = usestate("");//[ud,f]

    let data1 = 10;
    let data2 = "Hello World";
    let data3 = [10,20,30,40];
    let data4 = {id:1, fname:"Thomas selby"};

    function demo(value){
        console.log("Child sent me "+ value);
        setState
    }

    return (
        <div>
            <h1>Learn Props {state}</h1>

            <PropsChild1 data1 = {data1} data2 = {data2} data3 = {data3} data4 = {data4}/>
            <PropsChild2 data = {{ data1, data2, data3, data4}}/>
            <PropsChild3  demo={demo}/>


        </div>
    );
};
export default PropsParent;
