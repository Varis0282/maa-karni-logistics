import React from 'react'
import { Navbar } from '../navbar'

const PageWithNavbar = ({ children }) => {
    return (
        <div>
            <div className='width-[80%] flex justify-center'>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default PageWithNavbar
