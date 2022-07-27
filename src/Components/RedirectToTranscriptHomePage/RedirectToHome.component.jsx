import React from 'react'
import Loading from '../Loading/Loading.component'

const RedirectToHome = () => {
    window.location.href="https://apps.ashesi.edu.gh/exp_transcript"
    return (
        <Loading height='500px' />
    )
}

export default RedirectToHome