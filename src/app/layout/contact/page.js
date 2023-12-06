import React from 'react'
import UserDetail from './userDetail'
import DetailCounter from './DetailCounter'

const page = () => {
  return (
    <div class="grid grid-cols-2 gap-4 relative w-full  max-w-screen-xl items-center justify-between mx-auto p-4 mt-5 lg:mt-20 xl:mt-20 sm:mt-10">
      <div>
      </div>
      <div className='col-span-2'>
        <UserDetail />
        <DetailCounter />
      </div>
    </div>
  )
}

export default page