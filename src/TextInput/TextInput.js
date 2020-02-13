import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

function TextInput (props){

    const intermediate = (event) => {
        console.log('intermidiate', event.keyCode);
        if(event.keyCode === 13){
            props.onEnter(event.target.value);
            event.target.value = '';
        }
    }

    return (<div className="TextInput">
        {props.showButton && <button onClick={props.onToggleAll}></button>}
        <input onKeyDown={intermediate} />
    </div>);
}

TextInput.propTypes = {
    onEnter: PropTypes.func,
    onToggleAll: PropTypes.func,
    showButton: PropTypes.bool,
}

export default TextInput;