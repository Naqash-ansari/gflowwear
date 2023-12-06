"use client"

// import React from 'react'
import SessionHeading from '../heading/SessionHeading'
// import Script from 'next/script'
import CurrentLocation from './CurrentLocation';


const GeoLocation = () => {
  return (
    <div className='mt-5 w-full  max-w-screen-xl items-center justify-between mx-auto p-4 mt-5 lg:mt-20 xl:mt-20 sm:mt-10'>
        <SessionHeading title='Current Location' />
      

        <CurrentLocation />
    </div>
  )
}

export default GeoLocation