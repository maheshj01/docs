import React, { Component } from 'react';
import Link from 'react-router-dom';
import { flutterClass } from '../../constants';

export default function PropertyComponent(props) {
    return (
        <div className="flex flex-col">
            <div className='flex space-x-2 items-baseline'>
                <h4 className='text-lg font-sans m-0'>{props.name}</h4>
                <a href={`${flutterClass[props.typeKey]}`} className='text-blue-600 text-lg' target='_blank'>{props.type}</a>
            </div>
            <p className='text-gray-700'>{props.description}</p>
        </div>
    );
}