import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto mb-2'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
             dialloibrahima2087@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; 2025 Ibrahima Diallo. Tous droits réservés.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blanck' href='https://github.com/Ibrahime22'>Github</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/ibrahima-diallo-31b52b160/'>Linkedln</a></li>
            <li><a target='_blank' href='https://www.facebook.com/ibrahimamld.diallo/'>Fb</a></li>
            </ul>

        </div>
    </div>
  )
}

export default Footer