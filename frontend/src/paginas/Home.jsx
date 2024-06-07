import React from 'react'
import imghome from '../assets/img-home.jpg'
export const Home = () => {
  return (
    <div className='flex items-center'>
      <div className=' w-[50%]'>
        <img src={imghome} alt="Img Home" />
      </div>
      <div className=' w-[45%] pl-4 flex flex-col items-center justify-center gap-2'>
        <h1 className=' font-bold text-6xl text-center'>Bienvenido</h1>
        <p className='p-2 text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur voluptatibus perspiciatis dignissimos tempore deserunt qui explicabo accusantium voluptate neque error, blanditiis in! Eveniet, natus cumque quibusdam veniam obcaecati voluptates?</p>
        
      </div>
    </div>
  )
}
