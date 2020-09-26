import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
        <input className='tc pa3 ba b--dark-blue br3 bg-lightest-blue' 
        typeof='search' placeholder='search Decepticons'
        onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;