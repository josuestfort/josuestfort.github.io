<?php
// payment.php

session_start();

// Fetch order details from the session
if (!isset($_SESSION['order'])) {
    die("Order not found.");
}

$order = $_SESSION['order'];
$total_price = number_format($order['total_price'], 2); // Format price for PayPal

// PayPal redirection
$paypal_url = "https://www.paypal.com/cgi-bin/webscr"; // PayPal sandbox or live URL
$business_email = "your-paypal-email@example.com"; // Your PayPal business email

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
</head>
<body>
    <h1>Proceed to Payment</h1>
    <form action="<?= $paypal_url ?>" method="post">
        <!-- Identify your business so that you can collect the payments. -->
        <input type="hidden" name="business" value="<?= $business_email ?>">

        <!-- Specify a Buy Now button. -->
        <input type="hidden" name="cmd" value="_xclick">

        <!-- Specify details about the item that buyers will purchase. -->
        <input type="hidden" name="item_name" value="Translation Service">
        <input type="hidden" name="amount" value="<?= $total_price ?>">
        <input type="hidden" name="currency_code" value="USD">

        <!-- Specify URLs -->
        <input type="hidden" name="return" value="http://yourdomain.com/success.php">
        <input type="hidden" name="cancel_return" value="http://yourdomain.com/cancel.php">

        <!-- Display the payment button. -->
        <input type="submit" value="Pay Now with PayPal">
    </form>
</body>
</html>
