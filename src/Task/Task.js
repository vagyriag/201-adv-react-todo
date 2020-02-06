import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task (props) {

    let className = 'Task';
    if(props.completed){
        className += ' Task--completed';
    }

    const handleToggle = (event) => {
        props.onToggle(props.index, !props.completed);
    }

    return (<div className={className}>
        <input type="checkbox" checked={props.completed}
            onClick={handleToggle} />
        <p className="Task__text">
            {props.text}
        </p>
    </div>);
}

Task.propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onToggle: PropTypes.func,
    index: PropTypes.number,
};

export default Task;