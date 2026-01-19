import DrillingChild from "./DrillingChild";

const DrillingParent = () => {
    let data1 = "Hello World"; // data
    return (
        <div>
            <h1>Drilling Parent</h1>
            <DrillingChild/>
        </div>
    );
};
export default DrillingParent;