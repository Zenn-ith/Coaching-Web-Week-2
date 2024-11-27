import { useState } from "react"

function Counter(){
    
    const [count , setCount] = useState(0)
    document.title = `Count : ${count}`

return(
    
   <div className="counter">
      <h1>{count}</h1>
     <button onClick={() => {
        setCount(count + 1)
     }}> Click here (+) </button>
   </div>
)
}

export default Counter