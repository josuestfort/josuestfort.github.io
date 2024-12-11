<script>
  // Set up PayPal button
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '50.00' // Set your service price here dynamically if needed
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Transaction completed by ' + details.payer.name.given_name);
        // Submit the form after successful payment
        document.getElementById('submitBtn').click();
      });
    },
    onCancel: function(data) {
      alert('Payment cancelled.');
    },
    onError: function(err) {
      console.error('PayPal error: ', err);
      alert('An error occurred with your payment. Please try again.');
    }
  }).render('#paypal-button-container'); // Display PayPal button in this container
</script>
