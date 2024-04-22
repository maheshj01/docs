// create a custom link componnet
import React from 'react';

export default function NavLink(props) {
    return (
        <a href={props.to} className={props.className}
            target={props.isNewTab ? '_blank' : '_self'}
        // rel={props.isNewTab ? 'noopener noreferrer' : ''}
        >{props.text}</a>
    );
}
