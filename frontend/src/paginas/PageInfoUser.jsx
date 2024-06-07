import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { ViewInfoUser } from '../components/ViewInfoUser'

export const PageInfoUser = () => {
    const [userInfoCompleta, setuserInfoCompleta] = useState()
    const {InfoTotalUser} = useContext(UserContext)
    const handleInfoUser = async()=>{
        const userInfo = await InfoTotalUser()
        setuserInfoCompleta(userInfo)
    }
  return (
    <div>
        {
           userInfoCompleta?(
            <div className='w-full flex flex-col items-center justify-center'>
            <ViewInfoUser info={userInfoCompleta}/>
            </div>
          ):(
            <div className='flex items-center justify-center'>
            <button onClick={()=>handleInfoUser()} className='border-2 border-black rounded-md h-12 px-12'>Ver informacion de mi perfil</button>
            </div>
          )
        }
    </div>
  )
}
