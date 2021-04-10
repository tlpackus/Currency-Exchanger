import './css/styles.css';
import CurrencyExchangeRate from './currency-converter.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function showError(error) {
  $('.showErrors').show();
  $('.showErrors').text(error);
  $('.showExchangeValue').hide();
}

function getElements(response) {
  
}

$('#exchange-rate').submit(function(event) {
  event.preventDefault();
  const currency = $('#currency').val();
  const usdValue = $('#usd').val();
  (async function() {
    const response = await CurrencyExchangeRate.getConversions();
    getElements(response);
  });
});