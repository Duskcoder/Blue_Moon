import React from 'react';
import Header from './Header';
import Footer from './Footer';

export const
  ContactUs = () => {
    return (
      <div>
        <Header />
        <div id='contactus' className='contactus overflow-hidden'>

          <div className='contact col-sm-12'>
            <div className='contactt'>
              <h1 className='text-center pt-5 ' style={{ color: ' #1E5F75' }} data-aos='fade-left' data-aos-duration='500'>Contact Us</h1>
            </div>
            <div className=' line' data-aos='fade-left' data-aos-duration='500'></div>
            <div className='mt-4 text-center' style={{ color: ' #1E5F75' }} data-aos='fade-right' data-aos-duration='500'>
              <p className='p-3'>Do you want to enquire about our pricing, current offers and <br />
                arrangements we can help you with? Give us a call or send in your<br />
                concerns through the form below.</p>
            </div>
          </div>

          <div className='mobile ' id='sysmail' >
            <div className='detail  pt-5  '>
              <p className='number text-center' data-aos='fade-left' data-aos-duration='1000' style={{ color: ' white' }}>+91 8015522535</p>
              <h5 className='text-center' data-aos='fade-right' data-aos-duration='1000'>bluemoonbungalow19@gmail.com</h5>
            </div>
          </div>
          <div className='mobile' id='mobmail' >
            <div className='detai align-items-center  '>
              <p className='number text-center' data-aos='fade-left' data-aos-duration='1000' style={{ color: ' white' }}>+91  8015522535</p>
              <h5 className='text-center  ' style={{fontSize:'17px'}} data-aos='fade-right' data-aos-duration='1000'>bluemoonbungalow19@gmail.com</h5>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
