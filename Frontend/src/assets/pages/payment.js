jQuery(document).ready(function($) {
  
    setInterval(checkContainerSize, 1000);
    
    braintree.client.create({
        authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b"
      },
      function(err, clientInstance) {
        if (clientInstance) {
          braintree.hostedFields.create({
            client: clientInstance,
            styles: {
              'input': {
                'color': '#000',
                'font-size': '16px',
                'font-family': 'helvetica, tahoma, calibri, sans-serif'
              }
            },
            fields: {
              number: {
                selector: '#bfwc-card-number',
                placeholder: '4111 1111 1111 1111'
              },
              cvv: {
                selector: '#bfwc-cvv',
                placeholder: '123'
              },
              expirationMonth: {
                selector: '#bfwc-expiration-month',
                placeholder: 'MM'
              },
              expirationYear: {
                selector: '#bfwc-expiration-year',
                placeholder: 'YY'
              },
              postalCode: {
                selector: '#bfwc-postal-code',
                placeholder: '11111'
              }
            }
          }, function(err, hostedFieldsInstance) {
            if (err) {
              return;
            }
            hostedFieldsInstance.on("cardTypeChange", bfwcCardTypeChange);
          });
        }
      });
  
    function bfwcCardTypeChange(event) {
      debugger;
      if (event.cards.length === 1) {
        $('.bfwc-card-type').addClass(event.cards[0].type);
        window.current_card_type = event.cards[0].type;
      } else {
        $('.bfwc-card-type').removeClass(window.current_card_type);
      }
    }
    
    function checkContainerSize(){
      if($('.bfwc-card-form').width() < 345){
       $('.bfwc-card-form').addClass('bfwc-small-form');
      }else{
        $('.bfwc-card-form').removeClass('bfwc-small-form');
      }
    }
  
    $.fn.braintreeInvalidField = function() {
      $(this).addClass('braintree-hosted-fields-invalid');
    }
  
  });