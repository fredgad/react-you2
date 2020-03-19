import React, { useState, useContext, useEffect } from 'react'
import { CalendarNote } from './CalendarNote'
import { state } from '../../context/months/state'
import { FirebaseContext } from '../../context/firebase/firebaseContext'

export const MonthTemplate = ({array}) => {
    const {calendarNotes, fetchCalendarNotes, removeCalendarNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchCalendarNotes() 
        // eslint-disable-next-line
    }, [])

    let exactMonth = (new Date().getMonth() === +array[41].day)

    const [get, set] = useState({
        visible: false,
        title: '',
        note: '',
        date: undefined,
        dataId: undefined
    })

    const countDay = (el) => {
        let thisMonth = state[Object.keys(state)[array[41].day-1]],
        day = Object.values(thisMonth)[el].day
        day =  day.length < 2 ? `0${day}` : day  
        return day
    }

    const countMonth = () => {
        let month = array[41].day
        month = month.length < 2 ? `0${+month+1}` : month
        return month
    }
    
    const addCalendarNote = (id, item) => {
        let day = countDay(id),
            month = countMonth(id)
        if (day < 1 || id === 41) {
            return
        }

        set({ 
            visible: true,
            title: item ? item.title : '',
            note: item ? item.note : '',
            date: `${day}/${month}/2020`,
            dataId: `${day}-${month}-2020`
        })
    }

    return (
    <div className="MonthTamplate">
        {get.visible && <CalendarNote set={set} get={get} title={get.title} note={get.note} date={get.date} dataId={get.dataId} />} 
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
                    currentDay = el.id !== 41 ? countDay(el.id) : 0,
                    dateClass = el.h ? 'bg-secondary' : 'bg-light',
                    currentMonth = countMonth(),
                    dateToCompare = `${currentDay}-${currentMonth}-2020`,
                    exactDay = (+el.day === today) && exactMonth,
                    existDay = el.day && el.id !== 41 ? true : false

                
                dateClass = existDay ? dateClass += ' exist' : dateClass

                let item = calendarNotes.find(el => {
                    if(dateToCompare === el.id) {
                        return el.title
                    }
                })

                return (
                    <div key={el.id} className={dateClass} 
                        onClick={() => addCalendarNote(el.id, item) }>
                        {item && <span className={exactDay ? 'noteOnToday' : ''}>+</span>}  
                        {exactDay ? <p>today</p> : ''}
                        {el.day}
                    </div>
                )
            })}
        </div>
    </div> 
    )
}
