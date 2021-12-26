import React from "react";
import Dish from './Dish' 
import data from '../data'

export default function Menu(){

    const [cat,setCat] = React.useState([... new Set(data.map(item=>item.category))])

    const catMapper = cat.map(item=>{
        
           return <button className="px-4 w-32 capitalize py-2 bg-amber-700 font-medium text-gray-50">{item}</button>
        
    })
    
    

    const mapper = data.map(item=>{
        return (
            
            <Dish key={item.id} title={item.title} img={item.img} desc={item.desc} price={item.price}/>

        )
    })

    return (
        <div className=" flex flex-wrap justify-start align-center flex-row">
            <div className="category container text-center mb-5">
                {catMapper}
            </div>
                {mapper}
        </div>
        
    )
}