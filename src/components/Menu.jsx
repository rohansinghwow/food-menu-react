import React from "react";
import Dish from './Dish' 
import data from '../data'

export default function Menu(){

    const mapper = data.map(item=>{
        return (
            <Dish key={item.id} title={item.title} img={item.img} desc={item.desc} price={item.price} cat={item.category}/>
        )
    })

    return (
        <div className=" flex flex-wrap justify-start align-center flex-row">
                {mapper}
        </div>
        
    )
}