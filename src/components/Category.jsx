import React from "react";

export default function Category(props){

    const [cat,setCat] = React.useState(props.allCat)

    const catMapper = cat.map((item)=>{
        
        return (
            <button className=" w-32 capitalize py-2 bg-amber-700 font-medium text-gray-50" onClick={()=>props.filter(item)} >{item}</button>
        ) 
     
 })
    return(
        <>  
            {catMapper}
        </>
       
            
       
    )
}