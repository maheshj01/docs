import React, { Component } from 'react';
import PropertyComponent from './propertyComponent';
import { decorationProperties } from '../../constants';
// Given a property and its details, this component will render the property details
// e.g backgroundColor → Color?
// Sets the color of the Container that holds all of the NavigationRail's contents.
export default function Properties() {
    return (
        <div className="properties">
            {Object.keys(decorationProperties).map((property) => {
                console.log(property);
                return (
                    <PropertyComponent
                        key={property}
                        name={property}
                        type={decorationProperties[property].type}
                        typeKey={decorationProperties[property].typeKey}
                        description={decorationProperties[property].description}
                    />
                );
            })}
        </div>
    );
}