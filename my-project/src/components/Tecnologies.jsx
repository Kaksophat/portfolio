import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion} from "framer-motion"

const Technologies = () => {
    const icon = (duration)=>({
        initial : { y: -10},
        animate: {
            y: [10,-20],
            transition:{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },

        },
    });
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <motion.div 
        whileInView={{ opacity: 1, x:0}}
        initial={{ opacity: 0 , x: 0}}
        transition={{ duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={icon(2.5)}
        initial= "initial"
        animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssFill className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
         variants={icon(3)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsFill className='text-7xl text-cyan-400 '/>
        </motion.div>
        <motion.div 
         variants={icon(5)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className='text-7xl text-green-500 '/>
        </motion.div>
        <motion.div 
         variants={icon(4)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-7xl text-green-400 '/>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies