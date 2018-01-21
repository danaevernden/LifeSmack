<?php
// Required if your environment does not handle autoloading
// require __DIR__ . '/vendor/autoload.php';

// Use the REST API Client to make requests to the Twilio REST API
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$sid = 'AC16c9e0113d07849c6dbfe7d69bf0fd31';
$token = 'd9a99fb3acf24558201f56f8d6d7fe11';
$client = new Client($sid, $token);

// Use the client to do fun stuff like send text messages!
$client->messages->create(
    // the number you'd like to send the message to
    '+17742929235',
    array(
        // A Twilio phone number you purchased at twilio.com/console
        'from' => '+15596662836',
        // the body of the text message you'd like to send
        'body' => 'Hi its Dana - I just got SMS messaging to work through Twilio! Thanks for the tip!'
    )
);

echo "<html>";
Echo "<title>HTML with PHP</title>";
Echo "<b>My Example</b>";
