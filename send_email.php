<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $inquiry = htmlspecialchars(trim($_POST['inquiry']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Recipient email address
    $to = "haitiancreolevoicesnmore@outlook.com";

    // Email subject
    $subject = "New Inquiry from $name - $inquiry";

    // Email body
    $email_body = "
    You have received a new message from the contact form:
    
    Name: $name
    Email: $email
    Inquiry Type: $inquiry
    Message:
    $message
    ";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for contacting us, $name. Your message has been sent successfully!";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    // Redirect if the form wasn't submitted
    header("Location: contactUs.html");
    exit;
}
?>
