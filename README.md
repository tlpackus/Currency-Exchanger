# Currency Exchange Calculator

#### This application shows how much a number of USD is in other currencies.

#### By Theron Packus

## Technologies Used

* VS Code
* HTML5/CSS
* JavaScript ES6
* jQuery 3.5.1
* Bootstrap 4.5.0
* webpack 4.39.3
* clean-webpack-plugin 3.0.0
* Jest 24.9.0
* Babel/core 7.6.4
* Babel/plugin-transform-modules-commonjs 7.6.0
* eslint 6.3.0
* eslint-loader 3.0.0
* Node Package Manager 6.14.9
* popper.js

## Description

This project uses asynchronous code and an API called ExchangeRate to create a currency exchanging application. An integer input box is given for the user to enter the amount of USD they wish to find an exchange rate for. The second input box is for the user to select one of the 160 currencies available to convert to. Lastly the user can click the blue Submit button to display the conversion rate along with the name of the currency the user selected to convert to.

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _If [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Clone this project with the following command  `$ git clone <https://github.com/tlpackus/Currency-Exchanger.git>`_
* _Navigate to the top level of the repository with the command `$ cd currency-exchanger`_
* _Visit the [ExchangeRate-API](https://www.exchangerate-api.com/). Input your email address and click the "Get Free Key" button_
* _You will be prompted to create an account with your email, first name and a password. Agree to the terms os use and click "Get Started!". You'll then have access to your own API key and your remaining API calls for the month_
* _Navigate back to the top level of your repository in Terminal and create a .env file with the command `$ touch .env` to store variables you wish to keep secret_
* _Place your API token in the .env with the syntax: `API_KEY='your api key goes here no quotes'`_
* _Recreate this project's environment and install required dependencies with terminal command `$ npm install`_
* _Create the project's production environment with terminal command `$ npm run build`_
* Open the project in a development server with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Known Bugs

* _No bugs but there was a "BAD" currency option added just to test this projects error handling capabilities. Should just ask you to select another currency if it's selected_

## License

[MIT](LICENSE.txt)

Copyright © 2021 Theron Packus

All rights Reserved

## Support and Contact Information

For contact support, please email here <a href = "mailto: tlpackus@gamil.com">Send Email</a>

