import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

{/*https://youtu.be/0fYi8SGA20k?si=F5T2D7INFap9OMtf&t=3702*/}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Left line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-transparent" />
        </div>
        {/* Introduction */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Bonjour, je suis <span className="text-accent" > Danaé</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-100 bg-[rgba(0,0,0,0.5)] py-2 rounded-[20px] px-5`}>
            Développeuse full stack, je développe des applications <br className="sm:block hidden"/>
            et créer des interfaces et visuels divers.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="">

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero