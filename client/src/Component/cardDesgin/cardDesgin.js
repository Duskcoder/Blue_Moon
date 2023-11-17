
import React from 'react'
import "../compenets/carddesgin.css"

function CardDesgin() {

    return (
        <div className='container mt-3 '>
            <div className='sounds shadow-lg p-3 mb-5 bg-body rounded'>
                <h5>Check In<hr /></h5>
                <form>
                    <div class="mb-3 ">
                        <label for="" class="form-label">Name</label>
                        <input type="Name" class="form-control " id="form-control" aria-describedby="" />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Contact#</label>
                        <input type="Contact" class="form-control" id="form-control" />
                    </div>


                    {/* this date inputfield section */}
                    <div class="mb-3">
                        <label for="meeting-date" class="form-label">Check-in Date</label>
                        <input type="date" class="form-control" id="meeting-date" name="meeting-date" required />

                    </div>


                    {/* this time inputfield section  */}
                    <div class="mb-3">
                        <label for="meeting-time" class="form-label">Check-in Time</label>
                        <input type="time" class="form-control" id="meeting-time" name="meeting-time" required />
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">Days of Stay</label>
                        <input type="Days of Stay" class="form-control" id="form-control" />
                        <hr />
                    </div>

                    <div class="fop d-grid gap-2 d-md-block text-end">
                        <button class="btn btn-primary ms-1" type="button">Save</button>
                        <button class="fear btn btn-secondary ms-1" type="button">Cancel</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default CardDesgin