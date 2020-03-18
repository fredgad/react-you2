import React, { useState } from 'react'
import app from './base'
import s from './SignOut.module.scss'


const SignOut = () => {
    const [log, setLog] = useState({visible: false})

    return (
        <>
            <button className={s.signOutButton} onClick={() => setLog({visible: true})}>Sign Out</button>
            {log.visible ?
            <div className={s.signOut} onClick={() => setLog({visible: false})}>
                <div>
                    <button onClick={() => app.auth().signOut()}>Log Out</button>
                    <button onClick={() => setLog({visible: false})}>Cansel</button>
                </div>
            </div> : <></>
            }
        </>
    )
}

export default SignOut 