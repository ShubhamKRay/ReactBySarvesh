import FunctionBasedComponent from "./Topics/01_TypesOfComponent/FunctionBasedComponent"
import StatesInFunctionBased from "./Topics/02_States/StatesInFunctionBased";
import StatesInClassBased from "./Topics/02_States/StatesInClassBased";

function App(){
    return (
        <div>
            {/* <FunctionBasedComponent />
             <ClassBasedComponent/> */}

             <StatesInClassBased/>
             <StatesInFunctionBased/>
        </div>
    );
}


export default App ;