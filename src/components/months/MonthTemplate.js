import React from 'react'

export const MonthTemplate = ({array}) => {
    let month = (new Date().getMonth() == array[41].day)

    const calendarNote = (a, b) => {
        console.log(a, array[41].day)
    }

    return (<div className="MonthTamplate">
        <div className="days">
            <div>Mon</div>
            <div>Tue</div>
            <div>Weв</div>
            <div>Thu</div>
            <div>Fri</div>
            <div className="weekend">Sat</div>
            <div className="weekend">Sun</div> 
        </div>
        <div className="dates">
            {array.map(el => {
                let today = new Date().getDate(),
                    dateClass = el.h ? 'bg-secondary' : 'bg-light'

                return (
                    <div key={el.id} className={dateClass} onClick={() => calendarNote(el.id, array[41].day) }>
                        {(el.day == today) && month ? <p>today</p> : ''}
                        {el.day}
                    </div>
                )
            })}
        </div>
    </div> 
    )
}
