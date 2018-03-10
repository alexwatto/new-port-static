<?php 
$errors = '';
$myemail = 'alexwatto96@gmail.com';
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email_address\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
header('Refresh:5; url=http://www.alexwatto.co.uk/');
}
else {echo "$errors";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Form Submitted!</title>
</head>
<body>
<h1>Your E-mail has been submitted!</h1>
<h3>You will be directed back to www.alexwatto.co.uk momentarily</h3>
</body>
</html>