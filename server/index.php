<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(404);
    echo "404 Not Found";
    exit();
}

// Validate POST data
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
$subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

if (!$email || !$name || !$subject || !$message) {
    http_response_code(400);
    echo "Invalid data provided";
    die();
}

// Validate length constraints
if (strlen($name) < 2 || strlen($name) > 50 ||
    strlen($subject) < 2 || strlen($subject) > 50 ||
    strlen($message) < 1 || strlen($message) > 1500) {
    http_response_code(400);
    echo "Invalid data length";
    die();
}

// Send email
// $to = 'info@nilu27.com';
// $subject = "Contact Form: $subject";
// $message = "$message";
// $headers = "From: $email";
//
// if (mail($to, $subject, $message, $headers)) {
//     echo "Email sent successfully";
// } else {
//     http_response_code(500);
//     echo "Failed to send email";
// }


// Send email using SMTP
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com'; // Your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your_username';     // SMTP username
    $mail->Password   = 'your_password';     // SMTP password
    $mail->SMTPSecure = 'tls';               // Enable TLS encryption
    $mail->Port       = 587;                 // TCP port to connect to

    $mail->setFrom('contact@nilu27.com', "nilu.com");
    $mail->addAddress('info@nilu27.com');

    // Content
    $mail->isHTML(false);
    $mail->Subject = "Contact Form: $subject";
    $mail->Body    = "
        Name: $name\n
        Email: $email\n\n
        $message
    ";

    $mail->send();
    echo "Email sent successfully";
} catch (Exception $e) {
    http_response_code(500);
    print_r("Failed to send email: {$mail->ErrorInfo}");
    echo 1;
}

die();