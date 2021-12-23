import React from 'react'
import './../../assets/css/custom.css'
import './../../assets/css/style.css'

import lineslong from './../../assets/images/horizontal-line.svg'

import d1 from './../../assets/images/d1.png'
import d2 from './../../assets/images/d2.png'
import d3 from './../../assets/images/d3.png'

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

                <div className="row" style={{ padding: '10px 0 20px 0' }}>
                    <div className="col-sm-4">
                        <div className='portfolio-proj'>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm" >
                        <div className='portfolio-project'>
                            <div style={{ marginLeft: '10px' }}>
                                <h5>Title Goes Here</h5>
                                <p>Project Name : LOREM</p>
                                <img src={d1} alt="splash text" width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='portfolio-project-x'>
                            <div style={{ marginLeft: '10px' }}>
                                <h5>Title Goes Here</h5>
                                <p>Project Name : LOREM</p>
                                <div style={{borderLeft:  '1px solid black'}}>
                                    <img style={{ marginLeft: '10px' }}src={d2} alt="splash text" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='portfolio-project-x'>
                            <div style={{ marginLeft: '10px' }}>
                                <h5>Title Goes Here</h5>
                                <p>Project Name : LOREM</p>
                                <div style={{borderLeft:  '1px solid black'}}>
                                    <img style={{ marginLeft: '10px' }}src={d3} alt="splash text" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                <div className="col-md " id="offset-unset">
                    <h5 style={{color:'#fc3903',
                        textDecoration: 'underline solid #fc3903'}}>
                            EXPLORE ALL PROJECTS</h5>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
