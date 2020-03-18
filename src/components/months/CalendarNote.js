import React, { useContext } from 'react'
import { FirebaseContext } from '../../context/firebase/firebaseContext'
import { AlertContext } from '../../context/alert/alertContext'
import s from './CalendarNote.module.scss'
import { Alert } from '../Alert'

export const CalendarNote = ({get, set, title, note, date, dataId}) => {
    const {addCalendarNote, fetchCalendarNotes, removeCalendarNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    const submit = event => {
        event.preventDefault()
        addCalendarNote(event.target.elements.title.value.trim(), dataId)
            .then(() => {
                fetchCalendarNotes() 
                console.log('The note was created') 
                alert.show(`The note on ${date} was created`, 'success') 
            })
            .catch(() => { 
                console.log('Something went wrong') 
                alert.show('Something went wrong', 'danger') 
            })
    }

    const deleteCalendarNote = (dataId) => {
        removeCalendarNote(dataId)
            .then(() => {
                fetchCalendarNotes().then(() => {
                    console.log('The note was deleted') 
                    alert.show(`The note on ${date} was deleted`, 'deleted') 
                    console.log(get) 
                })
            })
            .catch(() => { 
                console.log('Something went wrong') 
                alert.show('Something went wrong', 'danger') 
            })
    } 

    return (
        <>
            <button onClick={() => set({visible: false})}type="button" className={s.btn + " btn btn-outline-danger btn-sm"}>×</button>
            <form onSubmit={submit} className={s.note}> 
                <Alert /> 
                <span>The note on {date}.</span>
                <input className="form-control" name="title" type="text" defaultValue={title} placeholder="Title"></input>
                <input className="form-control" name="note" type="textarea" defaultValue={note} placeholder="Note"></input>
                    {(title || note) ?
                        <b>
                            <button className={s.save}>Update</button> 
                            <div onClick={() => deleteCalendarNote(dataId)} className={s.delete}>Delete</div> 
                        </b> :
                        <button className={s.save}>Create</button> 
                    }
            </form>
        </>
    ) 
}

