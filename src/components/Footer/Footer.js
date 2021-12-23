import React from 'react'
import { SocialIcon } from 'react-social-icons';
import splash from './../../assets/images/splash.jpg'
const Footer = () => {
    return (
        <div class="footer">
            <div class="container" >
               
                <div class="row justify-content-between" >
                    
                    <div class="col-sm-8">
                        <div className='footer-project'>
                            <div style={{ marginLeft: '10px' }}>
                                <h5>Elegance</h5>
                                <p>Contact Us @email</p>
                                <SocialIcon url="https://twitter.com/" style={{ height: 25, width: 25,    margin: '0 10px'}} />
                                <SocialIcon network="facebook" style={{ height: 25, width: 25,    margin: '0 10px' }}/>
                                <SocialIcon network="instagram" style={{ height: 25, width: 25,    margin: '0 10px' }}/>
                                <SocialIcon network="reddit" style={{ height: 25, width: 25,    margin: '0 10px' }}/>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div className='footer-project'>
                            <div >
                                <h5>Contact Us</h5>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
