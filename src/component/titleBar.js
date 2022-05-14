import './titleBar.css';
import React from 'react';


const TitleBar=()=> {
    return (
        <div className='titleBarContainer'>
            <div className='logoContainer'>
                <h1>Code Bar</h1>
            </div>
            <div className='navigationContainer'>
            <a href='/'>Home</a>
            <a href='/blog'>Blogs</a>            
            <a href='/new'>Write Blog</a>
            </div>
            <div className='searchContainer'>
            <input></input>
            </div>
        </div>
    )
};
  
export default TitleBar;