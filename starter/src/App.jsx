import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"



const App = () => {
  const [listaColor,setListaColor]=useState(new Values('#f0f0f0').all(10));
  
  const addColor=(color)=>{
    console.log("valor del color",color)
    try {
      const newColors=new Values(color).all(10);
      setListaColor(newColors);
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      
      <Form addColor={addColor}></Form>
      <ColorList listaColor={listaColor}></ColorList>
      <ToastContainer position='top-center' />
    </main>
  )
};
export default App;
