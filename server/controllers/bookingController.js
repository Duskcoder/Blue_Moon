 const book = require('../models/booking');
const { sendMail } = require('../utils/sendMail');
// const {sendEmail1} = require('../utils/sendMail/sendMail1')

exports.Booking = async (req, res) => {
  try {
    const { check_in, check_out, adults, room_name, name, email, phone, address } = req.body;
    
    // Assuming book.create returns a promise
    const rooms = await book.create({
      check_in, check_out, adults, name, email, phone, address, room_name
    });

    // Send confirmation emails to admin and user
    const adminEmail = ['balaguru.duskcoder@gmail.com'];
    const adminSubject = 'New Room Booking';
    const adminHtml = `<p>New room booking from ${name}.</p><p>Booking Details:</p><p>Room Name: ${room_name}</p><p>Check-in: ${check_in}, Check-out: ${check_out} </p><p>Contact Info:<br/>Email:${email}<br/>Phone.no: ${phone}</p>`;
    await sendMail(adminEmail, adminSubject, adminHtml);

    const userSubject = 'Room Booking Confirmation';
    const userHtml = `<!DOCTYPE html>
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
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.customer_book= async (req, res) => {
    try {
      console.log("heeeeeellllo")
      const roomList = await book.findAll();
      console.log(roomList, "hhhhhhh");
      res.status(200).json(roomList);
    } catch (error) {
      // console.error('Error during country:', error);
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

   