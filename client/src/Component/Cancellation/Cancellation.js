import React from 'react'
import "../../Component/Rooms/Room.css";
import Header1 from '../Header1'
import Footer1 from '../HomeStay/Footer1'
function Cancellation() {
    return (
        <>
            <Header1 />
            <div className="room col-6 col-lg-12 htags pt-5 mx-5 overflow-hidden">

                <h1 className style={{ color: ' #2a919d' }} data-aos='fade-left' data-aos-duration='500'>Rooms</h1>

                <div className='mt-4 ' style={{ color: ' #2a919d' }} data-aos='fade-right' data-aos-duration='500'>
                    <p className="ptag">
                        If you are looking for a home away from home, just walk in
                        here.
                        <br /> You can get both, an incredible and relaxing experience
                        while you are on a holiday
                    </p>   </div>
            </div>
            <div className="room col-6 col-lg-12 htagsMob mx-5">
                <h1 className=" htagr" style={{ color: ' #2a919d' }} data-aos='fade-left' data-aos-duration='500'>Rooms</h1>
                <p className="ptag "id='cancelp' style={{ color: ' #2a919d' }} data-aos='fade-left' data-aos-duration='500'>
                    If you are looking for a home away from home, just walk in
                    here.
                    <br /> You can get both, an incredible and relaxing experience
                    while you are on a holiday
                </p>
            </div>

            <Footer1 />


        </>
    )
}

export default Cancellation