import React from 'react';

const myButton = ({children, ...props}) => {
    return (
        <button{...props}>
            {children}
        </button>
    );
};

export default myButton;