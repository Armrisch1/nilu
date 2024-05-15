<?php
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

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

//// Validate length constraints
if (strlen($name) < 2 || strlen($name) > 50 ||
    strlen($subject) < 2 || strlen($subject) > 50 ||
    strlen($message) < 1 || strlen($message) > 1500) {
    http_response_code(400);
    echo "Invalid data length";
    die();
}

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'admin@nilu27.com';
    $mail->Password   = 'smrw bfik fsft pgmt';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('admin@nilu27.com', "nilu27.com");
    $mail->addAddress('info@nilu27.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Contact Form: $subject'";
    $mail->Body = "
        <strong>Name:</strong> $name <br>
        <strong>Email:</strong> $email <br><br>
        $message
    ";

    $mail->send();
    echo "Email successfully sent";
} catch (Exception $e) {
    http_response_code(500);
    echo "Failed to send email";
}

die();