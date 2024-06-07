import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './paginas/Home'
import { Login } from './components/Login'
import {Register} from './components/Register'
import { Header } from './components/Header'
import { PageInfoUser } from './paginas/PageInfoUser'

export const AppRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/viewInfoUser' element={<PageInfoUser/>}/>
    </Routes>
    </>
  )
}
