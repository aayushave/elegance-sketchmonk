import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div class="footer" style={{backgroundColor:"#212721", color:'white'}}>
            <div class="container" >

                <div class="row " >

                    <div class="col-md-8  ">
                        <div className='footer-project'>
                            <div style={{ marginLeft: '10px' }}>
                                <h5>Elegance</h5>
                                <p>Get in touch with us and tell us the story you would like to create.</p>
                                <SocialIcon url="https://twitter.com/" style={{ height: 25, width: 25, margin: '0 10px 0 0' }} />
                                <SocialIcon url="https://facebook.com/" network="facebook" style={{ height: 25, width: 25, margin: '0 10px' }} />
                                <SocialIcon url="https://instagram.com/"network="instagram" style={{ height: 25, width: 25, margin: '0 10px' }} />
                                <SocialIcon url="https://reddit.com/"network="reddit" style={{ height: 25, width: 25, margin: '0 10px' }} />

                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-md-4 ">
                            <div class="box-body">
                                <form action="#" method="post">
                                    <div class="form-group " >
                                        <input type="text" className="transparent form-control" name="" placeholder="Full Name" size="30"  />
                                    </div>
                                    <div class="form-group " >
                                        <input type="email" className="transparent form-control" name="" placeholder="E-mail Address" size="30"  />
                                    </div>
                                    <div class="form-group " >
                                        <textarea name="" rows="2" className="transparent form-control" size="30" placeholder="Message" ></textarea>
                                    </div>
                                    <button disabled type="submit" className="transparent btn btn-secondary btn-msg-send" style={{marginTop:'10px',  float:'left'}}>Send Message</button>
                                </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
