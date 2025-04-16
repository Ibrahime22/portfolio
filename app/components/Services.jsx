import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
      id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1}}
    >
        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo'
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          C'est que j'offre
        </motion.h4>
        <motion.h2 
          className='text-center text-5xl font-Ovo'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Mes services
        </motion.h2>

        <motion.p 
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Je propose une gamme complète de services de développement web, 
          y compris la création de sites web, d'applications web et mobiles, 
          ainsi que l'intégration de systèmes tiers.
        </motion.p>

        <motion.div 
          className='grid grid-cols-auto sm:grid-cols-4 gap-6 my-10'
          initial={{opacity: 0 }}
          whileInView={{opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
            
            whileHover={{scale : 1.05}}
           
              key={index} 
              className='border border-gray-400 roundede-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-amber-100 hover:-translate-x-1 duration-500'
            >
              <Image src={icon} alt='' className='w-10' />
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>
                {description}
              </p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                En savoir plus <Image src={assets.right_arrow} alt='' className='w-4' />
              </a>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Services