import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d0fc32b4-eb1b-4b74-bee6-0dc96c4f659a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Formulaire envoyé avec succès !");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div 
          id='contact' 
          className='w-full px-[12%] py-10 srcoll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <motion.h4 
              className='text-center mb-2 text-lg font-Ovo'
              initial={{y:-20, opacity: 0 }}
              whileInView={{y:0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Contactez-moi
            </motion.h4>
            <motion.h2 
              className='text-center text-5xl font-Ovo'
              initial={{y:-20, opacity: 0 }}
              whileInView={{y:0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Entrez en contact
            </motion.h2>
            <motion.p 
              className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités. 
              Si vous souhaitez discuter d'un projet ou d'une collaboration, n'hésitez pas à me contacter !
            </motion.p>
            <motion.form 
              onSubmit={onSubmit} 
              className='max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input 
                      type="text" 
                      placeholder="Nom" 
                      required 
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' 
                      name='nom'
                      initial={{ x:-50, opacity: 0 }}
                      whileInView={{x:0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    />
                    <motion.input 
                      type="text" 
                      placeholder="Email" 
                      required 
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' 
                      name='email'
                      initial={{ x:50, opacity: 0 }}
                      whileInView={{x:0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    />
                </div>
                <motion.textarea 
                  rows='6' 
                  placeholder='Votre message' 
                  required 
                  className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' 
                  name='message'
                  initial={{ y:100, opacity: 0 }}
                  whileInView={{y:0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                ></motion.textarea>

                <motion.button 
               
                whileHover={{ scale : 1.05}}
                transition={{ duration: 0.3 }}
                  type='submit' 
                  className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/100 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'
                >
                    Envoyer <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact