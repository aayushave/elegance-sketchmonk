import React, { useEffect } from "react";
import './../../assets/css/custom.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import lineslong from './../../assets/images/horizontal-line.svg'

import d1 from './../../assets/images/d1.png'
import d2 from './../../assets/images/d2.png'
import d3 from './../../assets/images/d3.png'

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.8,restDelta: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

const Portfolio = () => {
    return (
        <div >
            <div className="container" >
                <div className="row" style={{ padding: '50px 0 0 0' }}>

                    <div className="col-sm-2">
                        <div >
                            <img className="portfolio-imglines" src={lineslong} alt="lines" style={{ height: '6px',float: 'left' }}></img>
                            <h1 className="ff" >PORTFOLIO</h1>

                        </div>
                    </div>
                </div>

                <div className="row " style={{ padding: '0 0 20px 0' }}>
                    <div className="col-sm-6 col-lg-3 col-xl-3 ">
                        <div className='portfolio-proj'>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 fadeInUp" >
                        <div className='portfolio-project'>
                            <div style={{ marginLeft: '10px' }}>
                                <FadeInWhenVisible>
                                <h5>LIVING AREA</h5>
                                <p style={{fontWeight: '300',fontSize:'1rem'}}>Sunny - Banglore, India</p>
                                <img src={d1} alt="splash text" width="100%" />
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 fadeInUp">
                        <div className='portfolio-project-x'>
                            <div style={{ marginLeft: '10px' }}>
                            <FadeInWhenVisible>
                                <h5>SPLASH COLOR</h5>
                                <p style={{fontWeight: '300',fontSize:'1rem'}}>Sunny - Banglore, India</p>
                                <div className='left-border-lg'>
                                    <img style={{ marginLeft: '10px' }}src={d2} alt="splash text" width="100%" />
                                    
                                </div>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 fadeInUp">
                        <div className='portfolio-project-x'>
                            <div style={{ marginLeft: '10px' }}>
                            <FadeInWhenVisible>
                                <h5>SIMPLE LINES</h5>
                                <p style={{fontWeight: '300',fontSize:'1rem'}}>Sunny - Banglore, India</p>
                                <div className='left-border-lg'>
                                    <img style={{ marginLeft: '10px' }}src={d3} alt="splash text" width="100%" />
                                </div>
                                </FadeInWhenVisible>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                <div className="col-md " id="offset-unset">
                    <h5 style={{fontFamily: 'Noto Sans,sans-serif',
                        color:'#fc3903',
                        fontWeight: '600',
                        textDecoration: 'underline solid #fc3903',
                        borderBottomWidth: '4px',
                        }}>
                            EXPLORE ALL PROJECTS</h5>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
