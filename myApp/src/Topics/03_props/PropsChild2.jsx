const PropsChild2 = (props) => {
    console.log(props);//{data : {data1: , data2: , data3: , data4: }}
   let {data1, data2, data3, data4} = props.data;
    return (
        <div>
            <h1>Props Child 2</h1>
        </div>
    );
};
export default PropsChild2;