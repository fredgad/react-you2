import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { REMOVE_NOTE, SHOW_LOADER, ADD_NOTE, FETCH_NOTES,
        ADD_CALENDAR_NOTE, REMOVE_CALENDAR_NOTE, FETCH_CALENDAR_NOTES } from '../types'

// const url = process.env.REACT_APP_DB_URL
// const url = 'https://margarita-regalo.firebaseio.com'  
const url = 'https://regalo-margarita.firebaseio.com'

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        calendarNotes: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`) 
        
        const payload = Object.keys(res.data || []).map(key => ({
            ...res.data[key],
            id: key
        }))
        dispatch({type: FETCH_NOTES, payload})
    }

    const addNote = async (title, date = new Date().toJSON()) => {
        const note = {
            title, date
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note) 
            const payload = {
                ...note, 
                id: res.data.name
            }

            dispatch({type: ADD_NOTE, payload}) 
        } catch(e) {
            throw new Error(e.message) 
        }
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({
            type: REMOVE_NOTE,
            payload: id 
        })
    }

    const fetchCalendarNotes = async () => {
        const res = await axios.get(`${url}/calendarNotes.json`) 
        
        const payload = Object.keys(res.data || []).map(key => ({
            ...res.data[key],
            id: key
        }))
        dispatch({type: FETCH_CALENDAR_NOTES, payload})
    }

    const addCalendarNote = async (title, dataId, date = new Date().toJSON()) => {
        const note = {
            title, date
        }
        try {
            const res = await axios.put(`${url}/calendarNotes/${dataId}.json`, note) 
            const payload = {
                ...note, 
                id: res.data.name
            }

            dispatch({type: ADD_CALENDAR_NOTE, payload}) 
        } catch(e) {
            throw new Error(e.message) 
        }
    }

    const removeCalendarNote = async id => {
        await axios.delete(`${url}/calendarNotes/${id}.json`)
        dispatch({
            type: REMOVE_CALENDAR_NOTE,
            payload: id 
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            fetchCalendarNotes, addCalendarNote, removeCalendarNote,
            loading: state.loading,
            notes: state.notes,
            calendarNotes: state.calendarNotes
        }}>
            {children}
        </FirebaseContext.Provider> 
    )
}