import React from 'react';
import PropTypes from 'prop-types';

const CardNumber = (props) => {
    const inter = (event) => {
        var value = event.target.value;
        
        value = value.replace(/\D/g, '');

        /*var value = event.target.value
        .replace(/\D/, '')
        .slice(0, 16);*/
        
        //props.onTextChange(value);
    }
    return (<input onInput={inter} 
        onChange={inter} 
        value={props.value} />);
}

CardNumber.propTypes = {
    onTextChange: PropTypes.func,
    value: PropTypes.string,
}

export default CardNumber;