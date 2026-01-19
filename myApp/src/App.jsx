import FunctionBasedComponent from "./Topics/01_TypesOfComponent/FunctionBasedComponent"
import StatesInFunctionBased from "./Topics/02_States/StatesInFunctionBased";
import StatesInClassBased from "./Topics/02_States/StatesInClassBased";
import PropsChild1 from "./Topics/03_props/PropsChild1";
import PropsParent from "./Topics/03_props/PropsParent";
import PropsChild2 from "./Topics/03_props/PropsChild2";    
import DrillingParent from "./Topics/01_TypesOfComponent/04_PropsDrilling/DrillingParent";
function App(){
    return (
        <div>
            {/* <FunctionBasedComponent />
             <ClassBasedComponent/> */}

             {/* <StatesInClassBased/>
             <StatesInFunctionBased/> */}
             {/* {<PropsParent/> }
             { <PropsChild1/>} */}
             {<DrillingParent/>}
            
        </div>
    );
}


export default App ;