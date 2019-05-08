use hotelbookings;
db.dropDatabase();

db.bookings.insertMany([
{
  name: "Jim Bob",
  email: "jimbob@jombob.com",
  status: true
},

{
  name: "Jim Bob Jr",
  email: "jimbobjr@jombob.com",
  status: true
},
])
