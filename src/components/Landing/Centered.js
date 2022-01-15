import React, {useEffect, useState} from 'react'
import './../../assets/css/custom.css'
import floatTable from './../../assets/images/float-table.png'
import chandelier from './../../assets/images/chandelier.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function TranslateTable({ children }) {
  
    return (
      <motion.div
        initial={{ transform:'translateY(-20px)', transition: {type: 'tween', duration: 2 } } }
        animate={{  
            delay: 1,transform:'translateY(10px)', transition: {type: 'tween', duration: 2,repeatType: "mirror",repeatDelay: 2 ,repeat: Infinity} } }
            onHover={{
                scale: 1.1}}
                >    
        {children}
      </motion.div>
    );
  }

  function TranslateChandelier({ children }) {
  
    return (
      <motion.div
        initial={{ transform:'translateY(-20px)', transition: {type: 'tween', duration: 2 } } }
        animate={{  onHover:{
            scale: 1.1},
                transform:'translateY(10px)', transition: {delay: 1.5,type: 'tween', duration: 2,repeatType: "mirror",repeatDelay: 2.2 ,repeat: Infinity} } }
        
        
        >    
        
        {children}
      </motion.div>
    );
  }


const Centered = () => {
    return (
        <div className="centered">
            <span className="centered-style">LOREM IPSUM TITLE GOES HERE</span>
            <TranslateChandelier>
                <img className='chandelier'alt="floating-table" src={chandelier}></img>
            </TranslateChandelier>
            <TranslateTable>
                <img className='float-table'alt="floating-table" src={floatTable}></img>
            </TranslateTable>
        </div>
    )
}



export default Centered
