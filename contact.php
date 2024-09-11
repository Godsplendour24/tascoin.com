<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    if (!empty($name) && !empty($email)) {
        $to = "admin@tascoin.com"; // Replace with your email address
        $subject = "New Subscription from TASCOIN Website";
        $message = "Name: $name\nEmail: $email";
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo "Subscription successful!";
        } else {
            echo "Failed to send subscription.";
        }
    } else {
        echo "Please fill in all fields.";
    }
}
?>
