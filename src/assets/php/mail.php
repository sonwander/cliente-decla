<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"]);
        $phone = trim($_POST["phone"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($email) OR empty($subject) OR empty($phone) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Favor preencher todos os campos.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "decla@declatecnologia.com.br";

        // Set the email subject.
        $subject = "Novo contato de $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content = "Email: $email\n";
        $email_content = "Subject: $subject\n";
        $email_content = "Phone: $phone\n";
        $email_content = "Message:$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Mensagem enviada. Obrigado!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Erro! Não foi possível enviar sua mensagem.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Houve um problema no envio de sua mensagem. Tente novamente!";
    }

?>