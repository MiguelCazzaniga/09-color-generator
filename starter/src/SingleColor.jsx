import { toast } from "react-toastify"


const SingleColor = ({color,index}) => {
    const saveToClipBoard=async()=>{
       if (navigator.clipboard){
         try {
           await navigator.clipboard.writeText(`#${color.hex}`)
           toast.success("El color se copió al clipBoard")
         } catch (error) {
            console.log(error)
           toast.error("No se pudo copiar al ClipBoard")
         }
       }else{
        toast.error("No está disponible elClipboard")
       }
    }
    let letra="black"    
    if (index>10){letra = "white"}    
      
   
    return (
    <div  className="singleColor" 
    style={{background:`#${color.hex}`,color:letra}}
    onClick={saveToClipBoard}>
        <p>{color.weight}%</p>
        <p>#{color.hex}</p>
    </div>
  )
}
export default SingleColor