import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength]=useState(8);
  const [num, setNum]=useState(false);
  const [char, setChar]=useState(false);
  const [pass, setPass]=useState("");

  const PassGen=useCallback(()=>{
    let pss=""
    let str="ABCDEFGHIJKLMNOPabcdefghijklmnop"
    if (num) str +="0123456789"
    if (char) str +="!@#$%^&*"

    for (let  i = 0;  i <=length;  i++) {
      let chr=math.floor(Math.random()*str.length +1);
      pss += str.charAt(chr)
      
    }
    setPass(pss)

  } ,[length,num,char, setPass])

  useEffect(()=>{PassGen()

  }, [length,num,char,PassGen])

  return (
    <>
     <div className='width-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
     <h1 className='text-white text-center'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input type='text' value={pass}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       />
       <button className='bg-blue-700 text-white'>Copy</button>
     </div>
     <input type='range'
     min={8} max={100}
     value={length} 
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
     />
     <label>Length:{length}</label>
    
     <input type='checkbox' name='number'
     defaultChecked={num}
     onChange={()=>{setNum((prev)=!prev)}}
        className='gap-x-1'
     />
     <label>Number</label>
     <input type='checkbox' name='number'
        className='gap-x-1'
        defaultChecked={char}
        onChange={()=>{setChar((prev)=!prev)}}
     />
     <label>Character</label>
     </div>
    </>
  )
}

export default App
