import React from 'react'

const Footer = ({ pageNumber }) => {
    // const currentDate = new Date().toLocaleDateString()
    const date = new Date;
    const month = date.getMonth() + 1;
    const currentDate = date.getDate() + "/" + month + "/" + date.getFullYear()
  return (
    <div className='bottom'>
        <div className='bg-gray-300 p-[2px] rounded mx-5'></div>
        <div className='flex justify-between mx-5'>
            <div className='text-[12px]'>Issue Date: {currentDate}</div>
            <div className='text-[12px]'>1 University Avenue, Berekuso E/R, Ghana</div>
            <div className='text-[12px]'>Page {pageNumber} of 2</div>
        </div>
    </div>
  )
}

export default Footer