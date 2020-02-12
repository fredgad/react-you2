import React from 'react'

export const MonthTemplate = ({array}) => {
    let month = (new Date().getMonth() == array[41].day)

    return (<div className="MonthTamplate">
        <div className="days">
            <div>Lun</div>
            <div>Mar</div>
            <div>Mie</div>
            <div>Jue</div>
            <div>Vie</div>
            <div className="weekend">Sab</div>
            <div className="weekend">Dom</div> 
        </div>
        <div className="dates">
            {array.map(el => {
                let today = new Date().getDate(),
                    dateClass = el.h ? 'bg-secondary' : 'bg-light'

                return (
                    <div key={el.id} className={dateClass}>
                        {(el.day == today) && month ? <p>hoy</p> : ''}
                        {el.day}
                    </div>
                )
            })}
        </div>
    </div> 
    )
}
