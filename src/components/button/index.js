import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import './button.css';


const Button = ({
    children, onClick, className, active, ...attrs
}) => {

    const classes = classNames (
        'btn',
        className,
        { active },
    );

    return (
        <button
        {...attrs}
        className={classes}
        onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    active: false,
};

export default Button;
    
