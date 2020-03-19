import React from 'react'
import { MonthTemplate } from './MonthTemplate' 

export const MonthLink = ({array, month}) => {

    return (
        <div>
            <p>{month}</p>
            <MonthTemplate array={array} />
        </div>  
    )
} 