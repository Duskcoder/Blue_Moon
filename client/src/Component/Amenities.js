import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Amenities = () => {

    const navigate = useNavigate();
    

    return (
        <>
        <Header/>
            <div id='Amenities' className='d-flex align-items-center'>
                <div className='container  '>
                    <h1 className='htaga' data-aos='fade-left' data-aos-duration='1000'>Amenities & Facilities</h1>
                    <h5 className='col-sm-4 fs-4 ptaga' data-aos='fade-right' data-aos-duration='1000'>We do not give you just rooms to stay.we give you an environment so you can experience the best while on a holiday with us.Walk into our homestay and enjoy a refreshing,rejuvenating, day off with us. </h5>
                </div>

            </div>
            <div className='container 'id='systemamen'>
                <div className='mt-5 d-flex align-items-center justify-content-between'>
                    <div >
                        <h2 style={{ color: '#294f70' }}>Amenities</h2>
                    </div>
                    <div className='w-20'>
                        <button className='amen-btn'
                        
                        ><a href='https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0'>Get Bookings</a></button>
                    </div>
                </div>
            </div>
            <div className='container ' id='mobileamen'>
                <div className='d-flex  justify-content-between'>
                    <div >
                        <h2 style={{ color: '#294f70' }}>Amenities</h2>
                    </div>
                    <div className='w-20 mt-5'>
                        <button className='amen-btn'
                        
                        ><a href='https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0'>Get Bookings</a></button>
                    </div>
                </div>
            </div>
            
            <div className="container mt-4 mb-5">
                <div className="d-flex justify-content-center text-primary">
                    {/* <h3>Amenities & Facilities</h3> */}
                </div>
                <div class="row mt-4">
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                                <img className='img-butha' src={require('../images/white1.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Selfie Spot</h4>
                                <p class="card-text">
                                    Cherish Each and every moment and make those moments memorable.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                                <img className='img-butha' src={require('../images/champ.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Camp Fire</h4>
                                <p class="card-text">
                                    Gather wood, Build a fire, and Stay up all night with fire & stars. The fire is the main comfort of the camp.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                                <img className='img-butha' src={require('../images/white.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Hut</h4>
                                <p class="card-text">
                                    A space for solitude seekers peace lovers and nature lovers.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                                <img className='image-responsive' src={require('../images/butha.jpg')} alt="" width='100%' height='195px' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Water Fountain</h4>
                                <p class="card-text">
                                    A kind heart is a fountain of gladness, making everything in its vicinity freshen into smiles.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5 mb-4'>
                <div className='row'>
                    <div class="col-sm-12 col-lg-6 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                            <img className='img-butha1' src={require('../images/bath-tub.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Deep Soaking Bath-tub</h4>
                                <p class="card-text">
                                    Take a dip into these special bath-tubs to soak into a refereshing vacation mode that you've wanted.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                            <img className='img-butha1 hover-zoom' src={require('../images/white1.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>24 Hours Hot Water Facility</h4>
                                <p class="card-text">
                                    We offer 24 hours hot water Facility. In each and every room has power backup and unlimited internet, LED tv with Ott (Prime & Hotstar).
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-4'>
                <div className='enquiry
                mt-5'>
                    <div style={{ color: '#294f70' }}>
                        <h2 >Others Perks & Facilities</h2>
                        <p className='col-lg-6'>Looking for now? Well, we believe that every guest walks into our homestay for the best experince. And, we are determined to do that. </p>

                    </div>
                    <div className='w-20 mb-5'>
                    {/* <Link to="https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0" className='amen-btn mb-4'>
                    Get Enquiry
                    </Link> */}
                        <button className='amen-btn mb-4'><a href='https://api.whatsapp.com/message/LZP5RQYXTGMHM1?autoload=1&app_absent=0'>Get Enquiry</a></button>
                    </div>
                </div>
            </div>
            <div className="container mt-4 mb-5">
                <div className="d-flex justify-content-center text-primary">
                    {/* <h3>Amenities & Facilities</h3> */}
                </div>
                <div class="row mt-4" style={{ color: '#294f70' }}>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                            <img className='img-butha' src={require('../images/kitchen(1).jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Kitchen</h4>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                            <img className='img-butha' src={require('../images/dinning.jpg')} alt="" width='100%' height='100%' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Dinning Table</h4>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='card-image'>
                            <img className='img-butha' src={require('../images/side.jpg')} alt="" width='100%' height='195px' />
                            </div>
                            <div class="card-body text-center">
                                <h4>Parking Area</h4>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-3 mb-3 mb-sm-0">
                        <div class="card card-amen">
                            <div className='hover-zoom'>
                                <div className='card-image'>
                                <img className='img-butha hover-zoom' src={require('../images/front.jpg')} alt="" width='100%' height='50%' />
                                </div>
                            </div>
                            <div class="card-body text-center">
                                <h4>CCTV survelliance</h4>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
