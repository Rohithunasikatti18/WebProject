// Select or create the database
use registration_db;

// Create the 'registrations' collection and insert a sample document
db.registrations.insertOne({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    dob: new Date("1990-01-01"),
    gender: "male",
    address: "123 Main Street, City, Country",
    created_at: new Date()
});
