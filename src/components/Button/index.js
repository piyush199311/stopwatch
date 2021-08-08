import React from 'react'
const Button=({className,onClick,title})=>{
    return (
        <button className={className} onClick={()=>{
            if(onClick instanceof Function){
                onClick();
            }
        }}>{title}</button>
    )
}
export default Button;