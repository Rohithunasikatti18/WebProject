<?php
require 'vendor/autoload.php'; // Include Composer autoload

use MongoDB\Client;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connect to MongoDB
    $client = new Client("mongodb://localhost:27017");
    $collection = $client->registration_db->registrations;

    // Prepare the data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);
    $address = htmlspecialchars($_POST['address']);
    
    $document = [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'dob' => new MongoDB\BSON\UTCDateTime(new DateTime($dob)),
        'gender' => $gender,
        'address' => $address,
        'created_at' => new MongoDB\BSON\UTCDateTime()
    ];

    // Insert the data
    $result = $collection->insertOne($document);

    if ($result->getInsertedCount() === 1) {
        echo "<div>
                <p><strong>Success!</strong> Data has been saved.</p>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Date of Birth:</strong> $dob</p>
                <p><strong>Gender:</strong> $gender</p>
                <p><strong>Address:</strong> $address</p>
              </div>";
    } else {
        echo "Error saving data.";
    }
}
?>
