import React, { useState } from 'react'

const Dashboard = () => {

const [currentTab,setCurrentTab]=useState("createEmp");

  return (
    <main className='h-screen w-full flex'>
    <aside className='h-full w-3/12 bg-violet-600 text-white'>
    <h3 className='font-extrabold text-center p-2'>Dashboard</h3>

    <div 
     onClick={() => setCurrentTab("createEmp")}
        className='text-[10px] px-3 py-1 m-1 hover:bg-violet-300 hover:text-black rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer'>Create Employee
        </div>

    <div 
    onClick={() => setCurrentTab("allEmp")}
    className='text-[10px] px-3 py-1 m-1 hover:bg-violet-300 hover:text-black rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer'>All Employee

    </div>


    </aside>

    <section className='h-full w-3/4 bg-white'>
    {currentTab==="allEmp" && <AllUsers/>}
    </section>
    </main>
  )
}

export default Dashboard
