import React from 'react'

export const MonthTemplate = ({array}) => (
    <div className="MonthTamplate">
        <div className="days">
            <div>Lunes</div>
            <div>Martes</div>
            <div>Miercoles</div>
            <div>Jueves</div>
            <div>Viernes</div>
            <div>Sabado</div>
            <div>Domingo</div>
        </div>
        <div className="dates">
            {array.map(el => {
            let dateClass = el.h ? 'bg-secondary' : 'bg-light'
            return (
                <div key={el.id} className={dateClass}>
                    {el.day}
                </div>
            )
            })}
        </div>
        
    </div> 
)
