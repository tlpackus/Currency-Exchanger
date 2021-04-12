import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './services/currency-exchange-rate.js';
import ExchangeRate from './js/exchange-rate.js';

function showError(text) {
  $('.showErrors').show();
  $('.showErrors').text(text);
  $('.showExchangeValue').hide();
}

// function getElements(response, usd, currency) {
//   const exchange = new ExchangeRate();
//   if (response.result === "success") {
//     if (currency in response.conversion_rates) {
//       const returnString = exchange.calcCurrency(usd, currency, response.conversion_rates[currency]);
//       $('.showExchangeValue').show();
//       $('.showExchangeValue').text(returnString);
//       $('.showErrors').hide();
//     } else {
//       $('.showErrors').show();
//       $('.showErrors').text(`${currency} is not a valid currency. Please enter a another currency.`);
//       $('.showExchangeValue').hide();
//     }
//   } else if (response.result === "error") {
//     $('.showErrors').show();
//     $('.showErrors').text(`Error: ${response["error-type"]}`);
//     $('.showExchangeValue').hide();
//   } else {
//     $('.showErrors').show();
//     $('.showErrors').text(response);
//     $('.showExchangeValue').hide();
//   }
// }

function getElements(response, usd, currency) {
  const exchange = new ExchangeRate();
  if (response.result === "success") {
    if (currency in response.conversion_rates) {
      const returnString = exchange.calcCurrency(usd, currency, response.conversion_rates[currency]);
      $('.showExchangeValue').show();
      $('.showExchangeValue').text(returnString);
      $('.showErrors').hide();
    } else {
      showError(`${currency} is not a valid currency. Please select another.`);
    }
  } else if (response.result === "error") {
    showError(`Error: ${response["error-type"]}`);
  } else {
    showError(`Error: ${response}`);
  }
}

$(document).ready(function() {
  $('#exchange-rate').submit(function(event) {
    event.preventDefault();
    const usd = parseInt($('#usd-value').val());
    const currency = $('#currency').val().toUpperCase();
    (async function() {
      const response = await CurrencyExchangeRate.getConversions();
      getElements(response, usd, currency);
    });
  });
});



// $('#exchange-rate').submit(function(event) {
//   event.preventDefault();
//   const currency = $('#currency').val();
//   const usd = $('#usd-value').val();
//   (async function() {
//     const response = await CurrencyExchangeRate.getConversions();
//     getElements(response, usd, currency);
//   });
// });