import React, { Component } from 'react';
import { decorationProperties } from '../../constants';
import { flutterClass } from '../../constants';

// Given a property and its details, this component will render the property details
// e.g backgroundColor → Color?
// Sets the color of the Container that holds all of the NavigationRail's contents.
export default function Properties(props) {
    const properties = props.properties;
    return (
        <div className="properties">
            {Object.keys(properties).map((property) => {
                console.log(property);
                return (
                    <TypeComponent
                        key={property}
                        name={property}
                        type={properties[property].type}
                        typeKey={properties[property].typeKey}
                        description={properties[property].description}
                    />
                );
            })}
        </div>
    );
}


export function TypeComponent(props) {
    return (
        <div className="flex flex-col">
            <div className='flex space-x-2 items-baseline'>
                <h4 className='text-lg font-sans m-0'>{props.name}</h4>
                <a href={`${flutterClass[props.typeKey]}`} className='text-blue-600 text-lg' target='_blank'>{props.type}</a>
            </div>
            <p>{props.description}</p>
        </div>
    );
}