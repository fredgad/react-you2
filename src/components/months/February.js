import React from 'react'
import { MonthTemplate } from './MonthTemplate'

export const February = ({array}) => {
    return (
        <div>
            <p>February</p>
            <MonthTemplate array={array} />
        </div> 
    )
}