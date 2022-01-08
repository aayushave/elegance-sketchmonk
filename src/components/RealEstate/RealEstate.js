import React ,  { useEffect }from 'react'
import './../../assets/css/custom.css'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import lineslong from './../../assets/images/horizontal-line.svg'
import r1 from './../../assets/images/r1.png'

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


const RealEstate = () => {
    return (
        <div>
            <div class="container" >

                <div class="row" style={{ padding: '50px 0 0 0' }}>

                    <div class="col-sm-4">
                        <div >
                            <img className="portfolio-imglines" src={lineslong} alt="lines" style={{ height: '8px', float: 'left' }}></img>
                            <h1 className="ffRealEstate">REAL ESTATE STAGING</h1>
                            <div className='RealEstate-project'>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            <h5 style={{fontFamily: 'Noto Sans,sans-serif',
                                    color:'#fc3903',
                                    fontWeight: '600',
                                    textDecoration: 'underline solid #fc3903',
                                    borderBottomWidth: '4px',
                                    }}>
                                ENQUIRE NOW</h5>

                        </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div >
                            <div style={{borderLeft:  '1px solid black' ,position: 'relative' }}>
                                    <FadeInWhenVisible>
                                    <img className="RealEstate-img"src={r1} alt="splash text"  />
                                    <div class="bottom-left">Lorem ipsum sub text goes here as referrence or sub points 2</div>
                                    <div class="top-right">Lorem ipsum sub text goes here as referrence or sub points 2</div>
                                    </FadeInWhenVisible>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RealEstate
