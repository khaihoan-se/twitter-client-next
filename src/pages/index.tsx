import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
   return (
      <React.Fragment>
         <div className='h-[200px] w-[200px] shadow-tt-shadow rounded-md flex items-center justify-center'>
            Home Page
         </div>
      </React.Fragment>
   )
}

export default HomePage