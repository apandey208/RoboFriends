import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY: 'auto', overflowX:"hidden", border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;