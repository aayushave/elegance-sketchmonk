import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {TextField, Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


import lineslong from './../../assets/images/horizontal-line.svg'

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
                                <h5>Contact Us <img className="portfolio-imglines" src={lineslong} alt="lines" style={{ height: '4px'}}></img>
                            </h5>
                                <div>
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Full Name"
                                        variant="standard"
                                        sx={{width:"100%"}}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Company Name"
                                        variant="standard"
                                        sx={{width:"100%"}}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Email Address"
                                        variant="standard"
                                        sx={{width:"100%"}}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Enter Your Message"
                                        variant="standard"
                                        sx={{width:"100%"}}
                                    />

                                <Button variant="text" 
                                sx={{paddingTop:'20px', width:'100%', justifyContent: "flex-start", color:'black',borderBottom:'2px solid black'}}
                                endIcon={<SendIcon />}>
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
