<?php
// success.php

session_start();

// Clear session to remove order details
if (isset($_SESSION['order'])) {
    $order = $_SESSION['order'];
    // Mark order as paid (you can update your database here)

    // Clear session
    unset($_SESSION['order']);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Successful</title>
</head>
<body>
    <h1>Thank you! Your payment was successful.</h1>
    <p>Your translation request has been received, and we will begin processing it shortly.</p>
</body>
</html>
