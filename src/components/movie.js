import React from 'react'
import Rating from'./ratingStar'


 function movie(props) {
    return (
        
        <div className="movie">
   {props.movie.filter(el=>el.name. toUpperCase().includes(props.searchmovie. toUpperCase())
   &&(el.rate>=props.rate)).map(el=>
    <div className="card">
        <h4> {el.name}</h4>
        <img src={el.src} alt="img" width="150px"/>
        <div>
        <h4>{el.year}</h4>
        <Rating rate={el.rate}/>
        </div>
    </div>)}
       </div>
         );
}
export default movie

