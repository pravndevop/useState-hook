import React,{useState} from 'react'

const ShortCirEval = () => {
    const [demo, setdemo] = useState("sujan")
  return (
    <div>
        <h1 className='text-3xl font-bold'>{ "praven"&&demo}</h1>
        <h1 className='text-3xl font-bold'>{demo||"praveen"}</h1>

    </div>
  )
}

export default ShortCirEval