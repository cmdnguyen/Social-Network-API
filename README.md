# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a Social Media API created using MongoDB and Mongoose. It can add, update and remove users and thoughts into the database. You can also create and remove friends and reactions to the associated user and thought respectively.

This API is an easy way to see how users and posts are added into a database for social media. It gives each user and thoughts an ID, which is used to create, update and delete from the database.

This was a challenge learning Mongoose after learning Sequelize, but I was able to pick it up.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To get started, users will have to use a terminal and clone the GitHub repository in their own directory.

    git@github.com:cmdnguyen/Social-Network-API.git

Once cloned, users will need [VSCode](https://code.visualstudio.com/download) and open up the directory. In the terminal, you can use the following commands:

	cd EmployeeTracker
	code .

Users will also need [NodeJS](https://nodejs.org/en) & [MongoDB](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) installed. I used the LTS version for Node.

Users will need to install the npm packages needed to run the program. Input the following command in the terminal:

    npm install

## Usage

There are two ways to start the program. You can use one of the following commands.

    npm start
    node server

Once the server is running, you can access the database. It will be empty, but you can add, delete and update users and thoughts.

In the example, I already added some users, thoughts, reaction and friends. Here's a demostration of each of the models and schema:

[Social Media User.webm](https://github.com/cmdnguyen/Social-Network-API/assets/131038401/13bea076-4924-4ba4-a7b1-10bb39345955)

[Social Media Thoughts.webm](https://github.com/cmdnguyen/Social-Network-API/assets/131038401/4863d62d-9fc6-4c17-be16-9021ac0c7043)

[Social Media Friends.webm](https://github.com/cmdnguyen/Social-Network-API/assets/131038401/d8135747-0ad5-4562-b54a-7884875c0f7e)

[Social Media Reaction.webm](https://github.com/cmdnguyen/Social-Network-API/assets/131038401/7d363590-7591-44a3-98c8-de8cb399c2f6)


## Credits

Boot Camp Tutor, Alexis Gonzalez

Boot Camp Instructor, Eli Montoya

Boot Camp TA, Chandler Green

AskBCS

ChatGPT

## License

MIT License

Copyright (c) 2023 Catherine Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
