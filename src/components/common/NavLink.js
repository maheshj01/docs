// create a custom link componnet
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function NavLink(props) {
    const { siteConfig } = useDocusaurusContext();
    const isDarkTheme = siteConfig.isDarkTheme;
    return (
        <a href={props.to}
            className={`${props.className} ${isDarkTheme ? 'text-primary' : 'text-blue-600'}`}
            target={props.isNewTab ? '_blank' : '_self'}
        // rel={props.isNewTab ? 'noopener noreferrer' : ''}
        > {props.text}</a >
    );
}
