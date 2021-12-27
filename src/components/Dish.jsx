import React from "react";

export default function Dish(props){


    return (
        <div className="dish hover:bg-sky-200 hover:cursor-pointer mb-5 py-1 mx-5 w-72 shadow-md rounded-md">
            
                <img src={props.img} className="w-full  h-40 object-cover pt-0 rounded-md"/>
            
        <div className="dish-body p-4 flex justify-between flex-col">
        <div className="dish-title">
            <p className="text-2xl dish-name mt-2">
                {props.title}
            </p>
            <p className="text-teal-500 text-lg dish-price font-medium text-lg">
               $ {props.price}
            </p>
            </div>

            <div className="dish-description ">
                <p className="pt-2">{props.desc}</p>
            </div>
        </div>
            
            
        </div>
    )

}