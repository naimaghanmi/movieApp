import React from 'react'
import movie from './movie';

class Search  extends React.Component {

    search=(e)=>{
        this.props.filter(e.target.value)

    }  
    render(){
    return (
        <div className="menu">
     <input className="Data"type="search" onChange={this.search}></input>
     <button>Search</button>
        </div>
    );
    }
}
export default Search;
