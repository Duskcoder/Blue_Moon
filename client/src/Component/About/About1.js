import React from 'react';
import Footer from '../Footer';
import Header from '../Header';


export const About1 = () => {
    return (
        <>
        <Header/>
            <div id='aboutUs' className='overflow-hidden'>
                <div className='container pt-5'>
                    <div className='row '>
                        <div className="card  hello2  mt-5 col-lg-6 col-12" data-aos='fade-right' data-aos-duration='1500'>
                            <div className="card-body">
                                <div className='hello22 mt-5'data-aos-duration='1000'></div>
                                <h2 className="card-title text-center mt-5"  data-aos='fade-right'  data-aos-duration='500' style={{color:'#2a919d'}}> About Us</h2>
                                <h3 className="card-subtitle mt-4 text-center">Experience A Stay<br /> Like Never Before</h3>
                                <div className='mt-5 text-center'  data-aos='fade-right'  data-aos-duration='500'> 
                                    <p className="card-text text-dark">We will help your experience life in its true sense  </p>
                                    <p className='text-dark'>With us. from living among the residents you are </p>
                                    <p className='text-dark'> sure to walk home with memories and wonderful </p>
                                    <p className='text-dark'> moments.</p>
                                </div>
                                <div  className='hello22 mt-5 mb-5'  data-aos='fade-right'  data-aos-duration='1000'></div>


                            </div>
                        </div>

                        <div className="card hello1  col-lg-6 col-12 " data-aos='fade-left'  data-aos-duration='1500'>
                            <div className="card-body card-bodys mt-5 mb-5 text-center" data-aos='fade-left' data-aos-duration='1000'>

                                <p className="card-text1 mt-5 text-white">We are a well renowned, providing a sensational</p>
                                <p className='text-white' >staying experience eith prolific services. We give </p>
                                <p  className='text-white'>you the warmest of welcome and all the personal</p>
                                <p  className='text-white'>attention at our homestay to ensure your</p>
                                <p  className='text-white'>comfort and contentment. We are  the first choice </p>
                                <p  className='text-white'>option for the one who are looking to explore </p>
                                <p  className='text-white'>the local areas and beautiful places in</p>
                                <p  className='text-white'>Puducherry.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}
