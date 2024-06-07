import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { UserContext } from '../context/UserContext'
export const Register = () => {
  const {registrarUsuario} = useContext(UserContext)
  const {register, handleSubmit} = useForm()

  return (
 
     <div className=' w-full flex  items-center justify-center'>
   <div className=' w-full md:w-1/3 flex flex-col justify-center items-center p-4 md:p-6 md:mb-4 gap-2 md:gap-4 border-2 border-black/80 rounded-md backdrop-blur-[2px] shadow-[15px_8px_50px_rgba(255,255,255,0.8)]'>
      <p className="font-bold text-3xl md:text-4xl text-center text-black  ">Registrarse</p>
      <form action="POST" onSubmit={handleSubmit((values)=>{
        registrarUsuario(values)
      })} className='flex w-full flex-col gap-4'>
      
        <div className='flex flex-col'>
        <label htmlFor="name" className='font-semibold text-lg text-black'>Name:</label>
        <input  type="text" className="p-2 rounded-lg  h-8 border border-black bg-transparent text-black placeholder:text-black" {...register('name',{required:true})} placeholder="Orlando"/>
        </div>
        <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-semibold text-lg text-black'>Email:</label>
        <input  type="email" className="p-2 rounded-lg  h-8 border border-black bg-transparent text-black placeholder:text-black" {...register('email',{required:true})} placeholder="YourEmail@company.com"/>
        </div>
        <div className='flex flex-col gap-1'>
        <label htmlFor="password" className='font-semibold text-lg text-black'>Password:</label>
        <input type="password" className="p-2 rounded-lg  h-8 border border-black bg-transparent text-black placeholder:text-black" {...register('password',{required:true})} placeholder="*******"/>
        </div>
        <button className="border border-black h-8 bg-transparent rounded-md text-black" type='submit'>Registrarse</button>     
        </form>
      </div>
      </div>
  )
}
