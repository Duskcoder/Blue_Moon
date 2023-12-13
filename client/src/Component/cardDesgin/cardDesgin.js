
import React from 'react'
import "../compenets/carddesgin.css"

function CardDesgin() {

    return (
        <div className='container mt-3 '>
            <div className='sounds shadow-lg p-3 mb-5 bg-body rounded'>
                <h5>Check In<hr /></h5>
                <form>
                    <div className="mb-3 ">
                        <label for="" className="form-label">Name</label>
                        <input type="Name" className="form-control " id="form-control" aria-describedby="" />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Contact#</label>
                        <input type="Contact" className="form-control" id="form-control" />
                    </div>


                    {/* this date inputfield section */}
                    <div className="mb-3">
                        <label for="meeting-date" className="form-label">Check-in Date</label>
                        <input type="date" className="form-control" id="meeting-date" name="meeting-date" required />

                    </div>


                    {/* this time inputfield section  */}
                    <div className="mb-3">
                        <label for="meeting-time" className="form-label">Check-in Time</label>
                        <input type="time" className="form-control" id="meeting-time" name="meeting-time" required />
                    </div>

                    <div className="mb-3">
                        <label for="" className="form-label">Days of Stay</label>
                        <input type="Days of Stay" className="form-control" id="form-control" />
                        <hr />
                    </div>

                    <div className="fop d-grid gap-2 d-md-block text-end">
                        <button className="btn btn-primary ms-1" type="button">Save</button>
                        <button className="fear btn btn-secondary ms-1" type="button">Cancel</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default CardDesgin