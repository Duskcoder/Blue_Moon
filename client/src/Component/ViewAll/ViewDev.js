import React from 'react'
import { useNavigate } from 'react-router-dom'

function ViewDev() {
    const navigate=useNavigate()
    return (
        <div className='container'>
            <div className='add'>
            <div className='row'>
                <div className='wrapper d-flex justify-content-evenly'>
                    <div className='use col-lg-4 col-md-12'>
                        <div className='tiger'>
                            <h2 className='mt-5'>Rooms</h2>
                            <button className='btn' onClick={()=>navigate('/stay')}>View All</button>
                        </div>
                    </div>
                    <div className='parentned col-lg-4 col-md-12'>
                        <div className='child bg-one'>Standard Room 1</div>
                    </div>
                    <div className='parentned col-lg-4 col-md-12'>
                        <div className='child bg-two'>Double BedRoom Apartment ground Floor</div>
                    </div>
                </div>
            </div>
            </div>

            <div className='even'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='sound '>
                        <div className='use col-lg-4 col-md-12'>
                            <div className='tiger'>
                                <h2 className='mt-5'>Rooms</h2>
                                <button className='btn w-auto'>View All</button>
                            </div>
                        </div>
                        <div className='parentned col-lg-4 col-md-12'>
                            <div className='child bg-one'></div>
                        </div>
                        <div className='parentned col-lg-4 col-md-12'>
                            <div className='child bg-two'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewDev