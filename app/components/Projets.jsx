import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projets = () => {
  return (
    <motion.div 
      id='projet' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo'
          initial={{y : -20, opacity: 0 }}
          whileInView={{ y:0 ,opacity: 1 }}
          transition={{ duration: 0.5, delay : 0.3 }}
        >
          Mon portfolio
        </motion.h4>
        <motion.h2 
          className='text-center text-5xl font-Ovo'
          initial={{ y:-20,opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Mes projets récents
        </motion.h2>
        <motion.p 
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Je suis fier de mes projets récents, qui comprennent des applications web et mobiles, ainsi que des intégrations de systèmes tiers. 
          Vous pouvez consulter mon portfolio pour voir quelques-uns de mes travaux les plus récents.
        </motion.p>

        <motion.div 
          className='grid grid-cols-auto sm:grid-cols-4 my-10 gap-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {workData.map((projet, index) => (
            <motion.div 
            whileHover={{scale : 1.05}}
            transition={{ duration: 0.3 }}
              key={index} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{ backgroundImage: `url(${projet.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{projet.title}</h2>
                  <p className='text-sm text-gray-700'>{projet.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='' className='w-5' />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.a 
          href='' 
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-100 duration-500'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Savoir Plus <Image src={assets.right_arrow_bold} alt='fleche droite' className='w-4' />
        </motion.a>
    </motion.div>
  )
}

export default Projets