import React from 'react'
import GlobalBanner from './GlobalBanner'
import GetDownload from './GetDownload'
import Cards from './Cards'
import { useEffect } from 'react'

const Download = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <GlobalBanner />
            <GetDownload />
            <Cards />
        </main>
    )
}

export default Download