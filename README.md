# Job Posting APP API

> RESTful API with nodejs for Job Posting App

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Node JS" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>
<p align="center">
  <a href="https://expressjs.com/">
    <img title="Restful API" src="https://expressjs.com/images/express-facebook-share.png">
  </a>
</p>

---

## Introduction

Jobs Posting Backend API is an API that allow the users get list of jobs and company information data from database. obs Find Backend API also allow users to read, create, update and delete a job ,company,category information into/from database.

This documentation outlines the Jobs Find Backend API functionality.

## Table of contents

- [Job Posting App API](#job-posting-app-api)

  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Stacks](#stacks)
  - [Build Setup](#build-setup)
  - [HTTP Response Code](#http-response-code)
  - [API Docs](#api-docs)
    - [Base Url](#base-url)
    - [Jobs](#jobs)
    - [Company](#company)
    - [Category](#category)
    - [User](#user)
    - [Auth](#auth)
  - [License and Support](#license-and-support)

## Feature

- [x] CRUD Jobs
- [x] CRUD Companies
- [x] Validation schema
- [x] Search job by name
- [x] Sort job by name, company, and date updated
- [x] Pagination
- [x] Upload logo
- [x] Allowed CORS
- [x] Authentication with JWT
- [x] Caching with redis

## Stacks

- NodeJS
- MySQL
- ExpressJS
- JWT
- Redis
- Bcryptjs
- multer

## Build Setup

1. Clone repository
   `$ git clone https://github.com/mahendrabp/expressjs-crud-boilerplate`

2. Install depedencies

```bash
# with npm
$ npm install

# or with yarn
$ yarn install
```

3. Setup your environment variable in `.env` files (if not exists, create your own).

```env

# DATABASE
PORT = 'port for express'

DB_HOST = 'your_db_host'
DB_USER = 'your_db_user'
DB_PASSWORD = 'your_password_db'
DB_NAME = 'database_name'
DB_PORT = ''

# SECRET KEY
API_JWT_SECRET=''
```

<!-- 4. Run database migrations (with shortcut scripts with `yarn` or `npm run`)

```bash

```

5. Start API server

```bash

``` -->

## HTTP Response Code

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

## API Docs

### Base Url 
```bash
https://crownhire.site/
```

### Jobs

| Method | Endpoint        | Description       | Request Param       | Request Body                                                                                                        | Request Query                                                                                         |
| ------ | --------------- | ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | api/v1/jobs    | Get jobs          | -                   | -                                                                                                                   | `name`: STRING, `company`: STRING,`limit`: NUMBER, `page`: NUMBER, `sortby`: STRING,`orderby`: STRING |
| GET    | api/v1/jobs:id | Get one job by id | `id`: STRING (UUID) | -                                                                                                                   | -                                                                                                     |
| POST   | api/v1/jobs    | Create new job    | -                   | `name`: STRING,`location`: STRING,`salary`:STRING,`description`: STRING ,`category_id`: STRING, `compant_id`:STRING | -                                                                                                     |
| PATCH  | api/v1/jobs:id | Update job        | `id`: STRING (UUID) | `name`: STRING,`location`: STRING,`salary`:STRING,`description`: STRING ,`category_id`: STRING, `compant_id`:STRING | -                                                                                                     |
| DELETE | api/v1/jobs:id | Delete job        | `id`: STRING (UUID) | -                                                                                                                   | -                                                                                                     |

### Company

| Method | Endpoint              | Description        | Request Param       | Request Body                                                                   |
| ------ | --------------------- | ------------------ | ------------------- | ------------------------------------------------------------------------------ |
| GET    | api/v1/companies     | Get company        | -                   | -                                                                              |
| GET    | api/v1/companies/:id | Get one company    | `id`: STRING (UUID) | -                                                                              |
| POST   | api/v1/companies     | Create new company | -                   | `name`: STRING,`location`: STRING,`logo`: STRING (IMAGE),`description`: STRING |
| PATCH  | api/v1/companies/:id | Update company     | `id`: STRING (UUID) | `name`: STRING,`location`: STRING,`logo`: STRING (IMAGE),`description`: STRING |
| DELETE | api/v1/companies/:id | Delete company     | `id`: STRING (UUID) | -                                                                              |

### Category

| Method | Endpoint               | Description         | Request Param | Request Body       |
| ------ | ---------------------- | ------------------- | ------------- | ------------------ |
| GET    | api/v1/categories     | Get category        | -             | -                  |
| GET    | api/v1/categories/:id | Get one category    | `id`: INT     | -                  |
| POST   | api/v1/categories     | Create new category | -             | `category`: STRING |
| PATCH  | api/v1/categories/:id | Update category     | `id`: INT     | `category`: STRING |
| DELETE | api/v1/categories/:id | Delete category     | `id`: INT     | -                  |

### User

| Method | Endpoint          | Description  | Request Param       | Request Body                        | Request Headers |
| ------ | ----------------- | ------------ | ------------------- | ----------------------------------- | --------------- |
| GET    | api/v1/users     | Get all user | `id`: STRING (UUID) | -                                   | -               |
| GET    | api/v1/users/:id | Get one user | `id`: STRING (UUID) | -                                   | -               |
| PATCH  | api/v1/users/:id | Get one user | `id`: STRING (UUID) | `email`: STRING, `password`: STRING | `bearer`: token |
| DELETE | api/v1/users/:id | Get one user | `id`: STRING (UUID) | -                                   | -               |

### Auth

| Method | Endpoint                | Description   | Request Headers | Request Body                        |
| ------ | ----------------------- | ------------- | --------------- | ----------------------------------- |
| POST   | api/v1/users/login/    | Login user    | -               | `email`: STRING, `password`: STRING |
| POST   | api/v1/users/register/ | Register user | -               | `email`: STRING, `password`: STRING |

---

## License and Support

For API support, please contact me
[mahendrabp](https://github.com/mahendrabp 'mahendrabp')

Copyright © 2019 by Mahendra Bimantara Putra
