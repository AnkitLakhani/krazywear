import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directorylist/directory.component'

const HomePage = ()=>{
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    )
}

export default HomePage