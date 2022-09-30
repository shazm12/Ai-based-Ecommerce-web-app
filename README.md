# Ai-based-Ecommerce-web-app

[![npm version](https://img.shields.io/npm/v/if-node-version.svg)](https://www.npmjs.com/package/if-node-version)
[![Build Status](https://travis-ci.org/mysticatea/if-node-version.svg?branch=master)](https://travis-ci.org/mysticatea/if-node-version)
  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
 [![GitHub last commit](https://img.shields.io/github/last-commit/shazm12/Ai-based-Ecommerce-web-app?style=social&logo=git)](https://github.com/shazm12/Ai-based-Ecommerce-web-app)
 
So I have built an AI-based Shopping system that uses a chatbot to perform all operations from adding, removing items to proceeding to checkout. This will be a web application with a backend server as well. This project is an attempt to provide the advantages of online shopping to customers of a real shop. It helps to buy the products in the shop anywhere through the internet by using the website. The customer will be provided the service of online shopping and home delivery by using this website application. This system can be implemented in any shop in the locality or to multinational branded shops having retail outlet chains.

The web app was made using React, Node, Express, MongoDB and Alan.ai which is platform to build chatbots and integrate with your web and native apps.  I recommend you to go through the [docs](https://alan.app/docs/) before getting started to work on my project.


# Preview and Working of the Web App ⚒️

## Preview of the Web App
[web-app-preview.webm](https://user-images.githubusercontent.com/64892076/193142474-2c9bca1c-56ae-4895-9f8b-95b6e53c4f6a.webm)


## Level 1 DFD Diagram to understand the architecture of the Project
![level1dfd](https://user-images.githubusercontent.com/64892076/142622747-9260fa0d-486b-4e02-9d4f-852585c49eef.png)



## Release History

We had some previous releases too that we did not initially commit to the repo.

* 0.1.0
    * CHANGE: Update docs (module code remains unchanged)
* 0.1.1
    * CHANGE: Made `Alan Ai Listeners for different voice commands`
    * ADD: Add `getItems(), openCart(), CloseCart()`
* 0.1.2
    * FIX: Multiple Listeners when calling `Alan AI listener module` 
* 0.1.3
    * CHANGE:Made `server.js`
    * ADD: `Mongo DB, Node config`  
* 0.1.4
    * CHANGE:Made `User.js,Model.js,Authcontroller.js,Ordercontroller.js`
    * ADD: `User Schema, Order Schema, Login(), Register(), MakeOrder()`  
* 0.2.0
    * The first proper release
    * CHANGE: Add `OrderDetails(),CancelOrder()`
* 0.2.1
    * Work in progress

## Development setup
Developement setup is pretty simple, first you just need to install all dependencies which is already given in package.json file and then kust run the web app with the commands given below.

- For Client -

```sh
cd client
npm install
npm start
```
- For server - 
```sh
cd server
npm install
npm start
```

Make sure in client/src/utils and then in axios.js make the baseURL as url of the Node's Localhost server.

I have made a dummy test account for to login - 
Username - test
Password  - 1234

For more in depth setup details go to [Contribution Guidelines.](CONTRIBUTING.md)

# Some important point to go through (MUST READ)

1. Most of the issues I will be posting will be related to the client or the frontend side at first.
2. I will be deploying the final web app with all the commited changes in the end to see how much we have improved the web app from its initial version.




# Maintainer

- Shamik Bera [@shazm12](https://github.com/shazm12) [email](mailto:shamik.bera2019@vitstudent.ac.in)



# Contrubtion Guildines 
1. Join the [discord](https://discord.gg/mq97kSm6) server for queries and more info.
2. To contrubute to the project by issuing some bug and even by fixing it or suggest some changes for improving the project but before 
that do not forget to read the guidelines here - [Contribution Guidelines.](CONTRIBUTING.md)

