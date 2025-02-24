import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div initial={{scale: 0}} whileInView={{scale:1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image src={assets.prof_pic} alt="" className='rounded-full w-32'/>
      </motion.div>
      <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay:0.3}} className='flex items-add gap-3 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Isaya Danice  
            <Image src={assets.hand_icon} alt="" className='w-6'/>
        </motion.h3>

        <motion.h1
        initial={{y: -30, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.8, delay:0.5}}
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Fullstack web developer based in Melbourne FL
        </motion.h1>
        <motion.p
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay:0.6}}
        className='max-w-3xl mx-auto font-Ovo'>
                I am a results-driven Full-Stack Developer with a strong foundation in front-end and back-end development, specializing in React.js, Node.js, Django, and cloud-based deployments. I am passionate about creating seamless user experiences, solving complex problems, and continuously learning new technologies. Let's collaborate to develop impactful solutions that drive efficiency and engagement.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
            initial={{y: 30, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay:1}}
            href="#contact" className='px-10 py-3 border rounded-full items-center gap-2 border-white bg-black text-white flex dark:bg-transparent'>Contact Me <Image src={assets.right_arrow_white} alt="" className='w-4'/></motion.a>
            <motion.a
            initial={{y: 30, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay:1.2}}
            href="/Danice-res.pdf" download className='px-10 py-3 border rounded-full items-center gap-2 border-gray-500 flex dark:text-black bg-white'>My Resume <Image src={assets.download_icon} alt="" className='w-4'/></motion.a>
        </div>
            
    </div>
  )
}

export default Header
