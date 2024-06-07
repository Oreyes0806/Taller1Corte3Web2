import React from 'react'

export const ViewInfoUser = ({info}) => {
  return (
    <div className='w-1/2 border-2 border-black rounded-md h-auto p-8 flex flex-col '>
      <h1 className='font-bold text-3xl md:text-4xl text-center text-black'>Informacion del usuario</h1>
        <div className='flex w-[45%] flex-col'>
        <label htmlFor="name" className='font-semibold text-lg text-black'>Id:</label>
        <label  type="text" className="p-2 rounded-lg  h-8 font-bold bg-transparent text-black ">{info.idusers}</label>
        </div>
        <div className='flex w-[45%] flex-col'>
        <label htmlFor="name" className='font-semibold text-lg text-black'>Nombre:</label>
        <label  type="text" className="p-2 rounded-lg  h-8 font-bold border-black bg-transparent tex text-black ">{info.name}</label>
        </div>
        <div className='flex w-[45%] flex-col'>
        <label htmlFor="name" className='font-semibold text-lg text-black'>Email:</label>
        <label  type="text" className="p-2 rounded-lg  h-8 font-bold bg-transparent text-black ">{info.email}</label>
        </div>
        <div className='flex w-[45%] flex-col'>
        <label htmlFor="name" className='font-semibold text-lg text-black'>Password:</label>
        <label  type="text" className="p-2 rounded-lg  h-8 font-bold bg-transparent text-black ">{info.password}</label>
        </div>
    </div>
  )
}
