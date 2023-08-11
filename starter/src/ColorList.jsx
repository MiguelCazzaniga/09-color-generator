import SingleColor from "./SingleColor"
import { nanoid } from "nanoid"



const ColorList = ({listaColor}) => {
   


    return (
      <section className="colorSection">
        {listaColor.map((color,index)=>{
            
            return(
                <SingleColor
                 key={nanoid()}
                color={color}
                index={index}
                >

                </SingleColor>
            )
        })}
     
      </section>
    )
}
export default ColorList
