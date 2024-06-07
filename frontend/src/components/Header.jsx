import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Header = () => {
   const navigate = useNavigate()
   const {user, cerrarSesion} = useContext(UserContext)
  return (
    <>
    <header className='flex flex-col justify-between items-center w-full h-28 px-8 md:px-12 md:flex-row'>
    <div className='flex justify-center items-center w-1/3'>
        <label onClick={()=>navigate('/')}  className='font-bold text-2xl text-black cursor-pointer'>JWT Login</label>
    </div>
    <nav className='flex w-full justify-center md:justify-end items-center'>
        <ul className='flex justify-end items-center gap-6 md:gap-8'>
            <li className='text-black text-lg font-medium'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='text-black text-lg font-medium'>
                <Link to={'/viewInfoUser'}>Ver mi perfil</Link>
            </li>
            {
               
                !user?(
                    <>
                    <li className='text-black text-lg font-medium'>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li className='text-black text-lg font-medium'>
                        <Link to={'/register'}>Register</Link>
                    </li>
                    </>
                ):(
                    <>
                    <img width="42" height="42" src="https://img.icons8.com/ios-filled/42/user.png" alt="user"/>
                    <p>{user.name}</p>
                    <p onClick={()=>cerrarSesion()}>CerrarSesion</p>
                    </>
                )
               
                
            }
            
            </ul>
            </nav>
          </header>
            <Outlet/>
            </>
  )
}
