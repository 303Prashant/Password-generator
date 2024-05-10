import { useState, useCallback, useEffect } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //useRef hook
  // const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pss = ""
    let str = "ABCDEFGHIJKLMNOPabcdefghijklmnop"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*-"

    for (let i = 1; i <= length; i++) {
      let chr = Math.floor(Math.random() * str.length + 1)
      pss += str.charAt(chr)
      
    }

    setPass(pss)


  }, [length, num, char, setPass])

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 999);
  //   window.navigator.clipboard.writeText(password)
  // }, [password])

  useEffect(() => {
    passGen()
  }, [length, num, char, passGen])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Text Captcha</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // ref={passwordRef}
        />
        <button
        // onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label>Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App