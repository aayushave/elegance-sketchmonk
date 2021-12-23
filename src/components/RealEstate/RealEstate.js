import React from 'react'



import lineslong from './../../assets/images/horizontal-line.svg'
import r1 from './../../assets/images/r1.png'

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
                            <h5 style={{
                                color: '#fc3903',
                                textDecoration: 'underline solid #fc3903'
                            }}>
                                ENQUIRE NOW</h5>

                        </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div >
                            <div style={{borderLeft:  '1px solid black'}}>
                                    <img className="RealEstate-img"src={r1} alt="splash text"  />
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RealEstate
