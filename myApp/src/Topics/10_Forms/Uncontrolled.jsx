import { useRef } from "react";


const Uncontrolled = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(user);
    };

  return (
    <div>
      <h1 className='text-center text-4xl'>Uncontrolled Components</h1>

      <form>
        <input type="text" className="border" placeholder="Enter Email" />
        <br />
        <input type="text" className="border" placeholder="Enter Password" />
        <br />
        <button className="px-5 bg-gray-300 mt-5">Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
