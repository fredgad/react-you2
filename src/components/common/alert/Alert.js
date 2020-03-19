import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from '../../../context/alert/alertContext'
import { FirebaseContext } from '../../../context/firebase/firebaseContext'
import './Alert.scss'

export const Alert = () => {
    const {alert, hide, show} = useContext(AlertContext)
    const {addNote} = useContext(FirebaseContext)


    return (
        <CSSTransition  
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>{ alert.text }!</strong> 
                <p onClick={() => { 
                    addNote(alert.delNote, alert.delDate) 
                    show('The note was restored', 'success', undefined, undefined)
                    }} >Restore</p>
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> 
        </CSSTransition>
    )
} 