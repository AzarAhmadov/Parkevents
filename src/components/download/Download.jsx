import React from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import GetDownload from './GetDownload'
import Cards from './Cards'
import { useEffect } from 'react'
import { memo } from 'react';

const Download = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <GlobalBanner title='Mobil tədbiq endir' linkTo='/' linkName='Mobil tədbiq' />
            <GetDownload />
            <Cards />
        </main>
    )
}

export default memo(Download)