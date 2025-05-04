import React from 'react'
import instragram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import img3 from '../assets/images/img3.png'


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <h5 className='text-light pt-5'>About</h5>
                            <p className='pt-3'>Fotographiya is a premium AI based <br />wedding photography startup.</p>
                            <div className="foot-img pt-5 mb-3">
                                <img src={instragram} />
                                <img src={facebook} className='mx-2' />
                                <img src={img3} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-light">
                            <h5 className='pt-5'>Contact Us</h5>
                            <h6 className='pt-2'>+91-8764313323</h6>
                            <p>fotographiya@gmail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
