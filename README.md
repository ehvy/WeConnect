# WeConnect

[![Build Status](https://www.travis-ci.org/ehvy/WeConnect.svg?branch=travis)](https://www.travis-ci.org/ehvy/WeConnect) [![Coverage Status](https://coveralls.io/repos/github/ehvy/WeConnect/badge.svg?branch=server-with-ci)](https://coveralls.io/github/ehvy/WeConnect?branch=server-with-ci) [![Maintainability](https://api.codeclimate.com/v1/badges/269160eeda305992e887/maintainability)](https://codeclimate.com/github/ehvy/WeConnect/maintainability)

A business application for connecting business bodies with consumers. This application will ensure business transactions between parties are well documented with feedbacks. Go here to access the app https://ehvy.github.io/WeConnect/template/index.html

# Table of Contents
- [Description](#description)

- [Layout](#layout)

- [Tech stack](#tech-stack)

- [Installation-and-Setup](#installation-and-setup)

- [Licence](#licence)

# Description
The application is one that is able to carryout CRUD operations, and only authorised users will be able to make use of these features. Unauthorised users will be able to view and serach for businesses only.

# Tech stack
1 Bootstrap

2 NodeJS

3 ExpressJS

4 Postgresql

# Installation-and-Setup
1 $ git Clone https://github.com/ehvy/WeConnect.git


2 cd WeConnect

3 $ npm install

4 create .env file for environmental variables in your root directory like the    .env.sample file  

5 $ node_modules/.bin/sequelize db:migrate

6 $ npm start

# License
ISE 