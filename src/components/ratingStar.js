import React, { createContext } from 'react'

const ratingStar = ({rate,onChangeRating})=> {
     let stars=[]
     for(let i=0;i<5;i++){
         if(i<rate)
         stars.push(<i class="fas fa-star" onClick={()=>onChangeRating(i+1)}></i>)
         else
         stars.push(<i class="far fa-star" onClick={()=>onChangeRating(i+1)} ></i>)
     }

    return stars
    
}
export default ratingStar;