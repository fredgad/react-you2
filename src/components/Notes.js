import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component={'ul'} className="list-group">
            {notes.map(note => {
                const noteDate = note.date.split('T');
                const noteTime = noteDate[1].split('.')
                console.log(noteTime[0], noteDate[0], )

                return (
                <CSSTransition key={note.id}
                    timeout={800}
                    classNames={'note'}>
                    <li className="list-group-item note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{`${noteTime[0]}      ${noteDate[0]}`}</small>
                        </div>
                
                        <button type="button" className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}>
                            &times; 
                        </button>
                    </li>
                </CSSTransition>)
            })}
        </TransitionGroup> 
    )
} 