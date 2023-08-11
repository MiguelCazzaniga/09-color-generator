
 import { useState } from "react"

const Form = ({addColor}) => {
    const [color,setColor]=useState("#f0f0f0")

    const handleSubmit=(e)=>{
        e.preventDefault()
       addColor(color)
    }
    
    return (
      
        <form onSubmit={handleSubmit} className="formSection">
          <div className="formSectionTitle">
          <h4>Color Generator</h4>
          </div>
          <input
           
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <input
            type='text'
            name='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button type='submit'className="btn" style={{background:color}}>Submit</button>
        </form>
      
    )
}     
      
   
  
export default Form