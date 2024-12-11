<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $languagePair = htmlspecialchars($_POST['language_pair']);
    $documentType = htmlspecialchars($_POST['document_type']);
    $wordCount = (int)$_POST['word_count'];
    $deadline = htmlspecialchars($_POST['deadline']);
    $unitPrice = 0.25; // Price per word in dollars
    $totalPrice = $wordCount * $unitPrice;

    // Translation process description
    $translationDetails = "
        <h2>Translation Request Summary</h2>
        <p>Thank you for submitting your request! Here are the details:</p>
        <ul>
            <li><strong>Language Pair:</strong> $languagePair</li>
            <li><strong>Document Type:</strong> $documentType</li>
            <li><strong>Word Count:</strong> $wordCount</li>
            <li><strong>Deadline:</strong> $deadline</li>
            <li><strong>Total Price:</strong> \$$totalPrice USD</li>
        </ul>
        <p>
            Our team will begin the translation process once payment is confirmed. You will receive regular updates.
        </p>
        <p>If you have any questions, feel free to <a href='contactUs.html'>contact us</a>.</p>
    ";

    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Translation Summary</title>
        <link rel='stylesheet' href='styles.css'>
    </head>
       <!-- Header and Navigation -->
  <header>

    <div class="container">
      <div class="navbar">
                          <!-- Logo -->
                          <div class="logo">
                           <img src="logo/logo_mod.png" alt="Haitian Creole Voices n more Logo" width="150" height="100" position="left">
                         </div>
       <!-- Navigation Bar -->
       <div class="nav-links" style="float:right;">
         <a href="index.html">Home</a>
         <a href="about.html">About</a>
         <a href="team.html">Our Team</a>
         <div class="dropdown">
           <button class="dropbtn">Our Services
             <i class="fa fa-caret-down"></i>
           </button>
           <div class="dropdown-content">
              <div class="has-submenu">

              </div>
             <a href="voice-talent.html">Voice Talent</a>
             <a href="translation.html">Translation</a>
             
           </div>
         </div>
        
         <div class="dropdown">
          <button class="dropbtn">Resources
            <i class="fa fa-caret-down"></i>
          </button>
     
           <div class="dropdown-content">
            <a href="video.html">Learning with Us</a>
            <a href="alphabet.html">Haitian Creole Alphabet</a>
            <a href="dictionary.html">Haitian Creole Dictionary</a>

           </div>
        </div>
         <a href="contactUs.html">Contact Us</a>
         <button class="request-translation"><a href="request-translation.html">Request Translation</a></button>
         <button class="request-voiceover"> <a href="request-voiceover.html">Request Voiceover</a></button>
         
         
       </div>
           <!-- Hamburger Menu Icon -->
    <div class="hamburger-menu">
      <i class="fa fa-bars"></i>
    </div>
     </div>
   </div>
     <script src="script.js"></script>
   </header>
    <body>
        <div class='translation-summary'>
            $translationDetails
            <button onclick='redirectToEscrow()' class='btn'>Start Contract</button>
        </div>
        <script>
            function redirectToEscrow() {
                window.location.href = 'https://my.escrow.com/partner.asp?pid=20042';
            }
        </script>
    </body>
    </html>
    ";
} else {
    // Redirect to form if accessed improperly
    header('Location: request-translation.html');
    exit;
}
?>

