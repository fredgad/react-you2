import React from 'react'
import app from './base'

const SignOut = () => (
    <button onClick={() => app.auth().signOut()}>Sign Out</button>
)

export default SignOut 