<h1 align="center">Jobs Find Backend<br>-RESTful API with Node.js-</h1>

![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/Cloud%20Storage-Amazon%20Web%20Service-orange.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<!--
# Express Boilerplate

--- -->

<!-- ## Table of Contents

- [Introduction](#introduction)
- [Prerequiste](#prerequiste)
- [Configuration](#configuration)
- [Installation](#installation)
  - [Clone](#clone)
  - [Environment](#create-environment-variable)
  - [Start](#start-development-server)
- [Dependencies](#dependencies)
- [License](#license)

--- -->

## Introduction

Jobs Find Backend API is an API that allow the users get list of jobs and company information data from database. obs Find Backend API also allow users to read, create, update and delete a job ,company,category information into/from database.

This documentation outlines the Jobs Find Backend API functionality.

---

## Prerequiste

<!-- - Node.js - Download and Install [Node.js](https://nodejs.org/en/) - Simple bash script to manage multiple active node.js versions.

- Nodemon - Download and Install [Nodemon](https://nodemon.io/) - nodemon is a tool that automatically restarting the node application when file changes in the directory are detected. -->

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. <a href="https://expressjs.com/en/starter/installing.html">Express JS </a>
3. <a href="https://www.getpostman.com/">Postman</a>
4. <a href="https://nodemon.io/">Nodemon</a>
5. Web Server (ex. localhost)

---

## Getting Started

![node.js](https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png)

### Node.js

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

![express](https://expressjs.com/images/express-facebook-share.png)

### Express.js

Express.js

![restful api](https://s3.amazonaws.com/kinlane-productions/salesforce/salesforce-rest-api.png)

### RESTFul API

A RESTful API is an

### HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `GET` Get a resource or list of resources
- `POST` Create a resource
- `PUT/PATCH` Update a resource
- `DELETE` Delete a resource

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

| Code  | Status               | Description                                                                         |
| :---- | :------------------- | :---------------------------------------------------------------------------------- |
| `200` | `OK`                 | The request was successful                                                          |
| `400` | `Bad Request`        | There was a problem with the request (security, malformed, data validation, etc.)   |
| `401` | `Unauthorized`       | The supplied API credentials are invalid                                            |
| `403` | `Forbidden`          | The credentials provided do not have permission to access the requested resource    |
| `404` | `Not found`          | An attempt was made to access a resource that does not exist in the API             |
| `405` | `Method not allowed` | The resource being accessed doesn't support the method specified (GET, POST, etc.). |
| `500` | `Server Error`       | An error on the server occurred                                                     |

<!-- ## Configuration

<ol>
  <li>Basic Configuration</li>
  <li>Structured</li>
  <li>File Handling
  </li>
  <li>Auth with JWT</li>
  <li>Unit Testing</li>
  <li>Redis Implementation</li>
</ol>

--- -->

## Installation

### Clone

```bash
$ git clone https://github.com/mahendrabp/expressjs-crud-boilerplate.git
$ cd expressjs-crud-boilerplate
$ npm install
```

---

### Create Environment Variable

```bash
$ cp .env.example .env
$ nano .env
```

---

### Start Development Server

```bash
$ npm start
```

---

## Other Dependencies

- [mysql](#)
- [bcrypt](#)
- [jsonwebtoken](#)
- etc.

---

## License and Support

For API support, please contact me
[mahendrabp](https://github.com/mahendrabp 'mahendrabp')

---
