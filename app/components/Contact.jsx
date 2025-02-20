import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
    const [result, setResult] = useState("");
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <motion.div
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
    id={'contact'} className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>
      <motion.h2
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>
      <motion.p
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Looking for a skilled Full-Stack Developer to bring your project to life? Whether you need a responsive front-end, a powerful back-end, or a full-stack solution, I’m here to help! Let’s collaborate to build scalable, high-performance applications tailored to your needs.
      </motion.p>
      <motion.p
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Feel free to reach out—I’d love to discuss your project and explore how we can work together! 🚀
      </motion.p>

      <motion.form
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.9}}
       onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <motion.input
            initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.6, delay:1.1}}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="text" placeholder='Enter your name' name='name' required/>
            <motion.input
            initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.6, delay:1.2}}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type="email" placeholder='Enter your email address' name='email' required/>
            
        </div>
        <motion.textarea
        initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay:1.3}}
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows='6' placeholder='Enter your message' name='message' required></motion.textarea>
        <motion.button
        whileHover={{scale: 1.05}} transition={{duration: 0.3}}
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>Submit Now
            <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
