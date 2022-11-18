import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData=[
        {
            id:0,name:'praveen',age:20
        },{
            id:1,name:'kumar',age:21
        },{
            id:3,name:'sujan',age:22
        },{
            id:3,name:'sujan',age:22
        }
    ]
    
     const[myArray,setMyArray] = useState(bioData);
    const clearArray =() =>{
        setMyArray([]);
    }
    const removeElem =(id)=>{
        const setNewArray=myArray.filter((CurElem)=>{
            return CurElem.id!==id;
        })
        setMyArray(setNewArray)
    }
  return (
    <>
       {
        myArray.map((element)=>{
            return(
                <>  
            <h1 className='text-3xl font-bold'>name:{element.name} age:{element.age}
            <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            onClick={()=>removeElem(element.id)}>remove</button>
            </h1>
            </>
            )
        })
       } 
       <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={clearArray}>clear</button>
    </>
  )
}

export default UseStateArray