import React from "react";
import Dish from './Dish' 
import data from '../data'
import Category from './Category'

export default function Menu(){
    const allCategory = ['all', ...new Set(data.map((item) => item.category))];
    const [menu, setMenu] = React.useState(data)

    
    function menuFilter(category){
        

        if (category === 'all') {
            setMenu(data);
            return;
          }
          const newItems = data.filter(item => item.category === category);
          setMenu(newItems);
    }
    

    const mapper = menu.map(item=>{
        return (
            
            <Dish allCat={allCategory} key={item.id} title={item.title} img={item.img} desc={item.desc} price={item.price} />

        )
    })

    return (
        <div className="flex flex-col items-center">
                <div className="category container text-center mb-5">
                    <Category  allCat={allCategory} filter={menuFilter}/>
                </div>
            
            <div className=" flex flex-wrap ml-7 ">
                    {mapper}
                </div>
            
                
        </div>
       
        
    )
}