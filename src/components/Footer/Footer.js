import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div class="footer">
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
                                <form >
                                    <div class="form-group " >
                                        <input type="text" name="" placeholder="Full Name" size="30" class="form-control" />
                                    </div>
                                    <div class="form-group " >
                                        <input type="email" name="" placeholder="E-mail Address" size="30"class="form-control" />
                                    </div>
                                    <div class="form-group " >
                                        <textarea name="" rows="2" size="30" placeholder="Message" class="form-control"></textarea>
                                    </div>
                                    <button disabled type="submit" class="btn btn-light btn-msg-send" style={{marginTop:'10px',  float:'left'}}>Send</button>
                                </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
