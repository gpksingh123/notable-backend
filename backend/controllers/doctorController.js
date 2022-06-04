const fs = require("fs");
let database = fs.readFileSync("data.json");
let data = JSON.parse(database);

// @desc    Get list of all doctor names
// @route   GET /doctors
const getDoctors = (req, res) => {
  let doctors = [];
  for (doctorId in data) {
    doctors.push({ name: data[doctorId]["Name"], id: doctorId });
  }
  res.status(200).json(doctors);
};

// @desc    Get appointments for a doctor
// @route   GET /doctor/appointment
// @example: http://localhost:3000/doctors/appointment/1/05-06-05
const getDoctorAppointments = (req, res) => {

//Assuming doctor exists and date is valid format, we search the database for matching
//doctor id and booking date
 const id = req.params.id;
 const date = req.params.date;
 const doctorAppointments = data[id]["Appointments"]

  doctorAppointments.forEach(appointments => {
      if(appointments.date === date){
        res.send(appointments.bookings)
      }
  });

};


module.exports = {
  getDoctors,
  getDoctorAppointments,
};
