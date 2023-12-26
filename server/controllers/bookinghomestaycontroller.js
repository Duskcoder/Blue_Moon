const path = require('path');
const bookhomestay = require('../models/homestaybooking')
const { sendMail } = require('../utils/sendMail');

exports.BookingHomeStay = async (req, res) => {
  try {
    const { check_in, check_out, adults, room_name, name, email, phone, address } = req.body;
    const rooms = await bookhomestay.create({
      check_in, check_out, adults, name, email, phone, address, room_name
    });
    console.log(rooms.id, "room id");
    // Send confirmation emails to admin and user
    const adminEmail = ['balaguru.duskcoder@gmail.com'];
    const adminSubject = 'New Room Booking';
    const adminHtml = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Room Booking</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                display: flex;
                align-items: center;
                textAlign: center,
                justify-content: center;
                height: 100vh;
               
            }
            .card {
                border: 1px solid black !important;
                boxShadow: 10px 5px 5px black !important;
                max-width: 400px;
                background-color: #fff;
                textAlign: center,
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
            h2 {
                color: #333;
            }
            p {
                color: #555;
                line-height: 1.6em;
            }
            ul  {
              list-style-type: none;
            }
        </style>
    </head>
    <body>
        <div class="card">
              
            <h2>New Room Booking</h2>
            <p>Hello Admin,</p>
            <p>A new room booking has been made. Here are the details:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Room Name:</strong> ${room_name}</li>
                <li><strong>Room ID:</strong> ${rooms.id}</li>
                <li><strong>Check-in:</strong> ${check_in}</li>
                <li><strong>Check-out:</strong> ${check_out}</li>
            </ul>
            <p>Contact Information:</p>
            <ul>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone Number:</strong> ${phone}</li>
            </ul>
            <p>Thank you for managing the room bookings!</p>
        </div>
    </body>
    </html>`;


    // Now you can use the adminHtml variable as needed, such as in your email sending function.
    await sendMail(adminEmail, adminSubject, adminHtml,);

    const userSubject = 'Room Booking Confirmation';
    const userHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossorigin="anonymous">
            <link rel="stylesheet" href="css.css" />
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossorigin="anonymous"></script>
            <title>Document</title>
            <style>
                .mb-black{
       border: 1px solid rgb(110, 107, 107);
    }
    .border-blacks{
        border: 1px solid black;
    }
    .text-color{
        color: #2BB8EE;
        textAlign: 'center',
    }
            </style>
        </head>
        <body>
            <div class="container mt-5 shadow-lg p-3 mb-5 bg-white rounded h-100 d-flex justify-content-center">
                <div class="text-center">
                    <h2 class="text-color ">Thank you for your booking request</h2>
                </div>
                <div class="mb-black w-100 "></div>
                <div class="align-content-center d-flex justify-content-center">
                    <table style class="table-striped-columns">
                        <tr>
                            <th>Name</th>
                            <td>${name}</td>
                        </tr>

                        <tr>
                            <th>cheak in </th>
                            <td>${check_in}</td>
                        </tr>
                        <tr>
                            <th>cheak out </th>
                            <td>${check_out}</td>
                        </tr>
                        <tr>
                            <th>Room Name</th>
                            <td>${room_name}</td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th>
                            <td>${phone}</td>
                        </tr>
                        <tr>
                            <th>Gmail:</th>
                            <td>${email}</td>
                        </tr>
                    </table>
                </div>
                <div class="mb-black w-100 "></div>
                <div class="text-center mb-3">
                    <p> We are processing your booking . please check your email for
                        a booking confirmation from the restaurant .</p>
                </div>
                <div class="text-center mb-3">
                    <p>(please note. you should hear back within 5 hours. if you
                        still havent received a confirmation please contact our
                        customer support team on 888888888)</p>
                </div>
    
                <div class="align-content-center d-flex justify-content-center">
                    <button className=" fw-bold mb-5 " id='directions'>
                        <strong>
                            <a href="https://maps.app.goo.gl/cT9y5hXsh4x8ha2M9"
                                style=" color: blue" target="_blank"
                                rel="noreferrer" className="text-white">Get
                                Direction</a>
                        </strong>
                    </button>
                </div>
            </div>
        </body>
    </html>`;
    await sendMail([email], userSubject, userHtml);

    res.json({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.customer_bookHomestay = async (req, res) => {
  try {
    console.log("heeeeeellllo")
    const roomList = await bookhomestay.findAll();
    console.log(roomList, "hhhhhhh");
    res.status(200).json(roomList);
  } catch (error) {
    // console.error('Error during country:', error);
    console.error('Error stack trace:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

