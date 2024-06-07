import React, { useContext} from 'react'
import {useForm} from 'react-hook-form'
import { UserContext } from '../context/UserContext'
export const Login = () => {
  const {iniciarSesion} = useContext(UserContext)
  const {register, handleSubmit} = useForm()

  return (
    <div className=' w-full flex  items-center justify-center'>
    <div className=" w-full md:w-1/3 h-[400px] flex flex-col justify-center p-6 my-8 gap-4 border-2 border-black/80 rounded-md backdrop-blur-[2px] shadow-[15px_8px_50px_rgba(255,255,255,0.8)]">
      <p className="font-bold text-4xl text-center text-black shadow-md drop-shadow-md">Iniciar Sesion</p>
      <form action="POST" onSubmit={handleSubmit((values)=>{
        iniciarSesion(values)
      })} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-semibold text-lg text-black '>Email:</label>
        <input type="email" className="pl-2 rounded-lg h-8 border border-black bg-transparent text-black placeholder:text-black" {...register('email',{required:true})} placeholder="Hola@dado.com"/>
        </div>
        <div className='flex flex-col'>
        <label htmlFor="password" className='font-semibold text-lg text-black'>Password:</label>
        <input  type="password" className="pl-2 rounded-lg h-8 border border-black bg-transparent text-black placeholder:text-black" {...register('password',{required:true})} placeholder="*******"/>
        </div>
        <button className="border-2 border-black rounded-md font-semibold text-black text-xl" type='submit'>Log in</button>
        </form>
    </div>
    </div>
  )
}
