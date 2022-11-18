import React,{useState} from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setallEntry] = useState([])

    const submitForm =(e)=>{
        e.preventDefault()

        {
            const newEntry = {id:new Date().getTime().toString(), email,password}
            setallEntry([...allEntry,newEntry])
    console.log(allEntry)
            setEmail()
            setPassword()
        }
    }
  return (
    <div className='bg-cyan-600'>
    <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto">
    <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
    </div>

        <form  action="" onSubmit={submitForm}>
            <div className='mb-6'>
                <label className='block mb-2 font-extrabold' htmlFor="email" >Email</label>
                <input className='inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded' type="text" name='email' id='email' autoComplete='off'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-6'>
                <label className='block mb-2 font-extrabold' htmlFor="password" >Password</label>
                <input className='inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded' type="password" name='password' id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                />
            </div>
            <button className='inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200'  type='submit'>Login</button>
        </form>
        </div>
        </div>
     
            {
                allEntry.map((curElem)=>{
                    const [id,email,password] = curElem
                    return(
                        <div className='footer' key={id}>
                            <h1>Email:- {email}</h1>
                            <h1>Password:- {password}</h1>
<hr />
                        </div>
                    )
                })
            }

        
    </div>
  )
}

export default BasicForm