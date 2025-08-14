import React from 'react';

const Error = () => (
  <div className='w-full flex justify-center items-center flex-col'>
    <h1 className='font-bold text-2xl text-white mt-2'>Something went wrong</h1>
    <p className='text-gray-400 mt-2'>Please try again later.</p>
    <img src="https://via.placeholder.com/150" alt="Error" className='mt-4' />

  </div>
);

export default Error;
