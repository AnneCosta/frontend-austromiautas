# Austromiautas
Austromiautas is a project that connects people who want to adopt a pet to people who need to donate them.
This project is being built using Nodejs, Typescript and Nestjs.

# Settings
Before running the application, we need to configure the environment, for this follow the following steps:

## Installation
Install the project dependencies with the following code:

```bash
npm install
```

## Environment variables
To ensure that our project runs smoothly, we need to declare some environment variables, they are:

| NAME          | DESCRIPTION                                                                                 | EXAMPLES               |
|---------------|---------------------------------------------------------------------------------------------|------------------------|
| APP_HOST      | The host name that will be used to run the application.                                     | localhost              |
| APP_PORT      | The port that will be used to run the application.                                          | 3333                   |
| APP_PROTOCOL  | The protocol that will be used by the application (http or https).                          | http                   |
| DB_HOST       | The host name of the database.                                                              | localhost              |
| DB_PORT       | The database port.                                                                          | 5432                   |
| DB_USER       | The database user.                                                                          | docker                 |
| DB_PASSWORD   | The password for the database user.                                                         | docker                 |
| DB_NAME       | The name of the database.                                                                   | austromiautas          |
| REDIS_HOST    | The host name of the redis database.                                                        | localhost              |
| REDIS_PORT    | The port of the redis database.                                                             | 6379                   |
| SMTP_HOST     | The name of the SMTP host that will be used as a relay by e-mail services.                  | smtp.mailtrap.io       |
| SMTP_PORT     | The SMTP port that will be used as a relay by e-mail services.                              | 2525                   |
| SMTP_USER     | The SMTP user that will be used as a relay by e-mail services.                              | your_smtp_username     |
| SMTP_PASSWORD | The SMTP password that will be used as a relay by e-mail services.                          | your_smtp_password     |
| API_HOST      | The host name of API                                                                        | localhost              |
| API_PORT      | The port of API                                                                             | 3333                   |
| API_PROTOCOL  | The protocol that will be used by the API (http or https).                                  | http                   |
| API_SECRET    | Private key used to encrypt API data.                                                       | SomeHashedSecretString |
| X_API_TOKEN   | Passive token generated on API                                                              | someUUIDToken          |

To load them, create a file called ".env" at the root of the project and fill in the environment variables above. All of the above environment variables are mandatory.

Example of the ".env" file:
```
APP_PORT=3333
APP_HOST=localhost
APP_PROTOCOL=http
APP_SECRET=someSecretString
...
```
## Running the application
We can run the application in the following ways:

```bash
# serve with hot reload at localhost
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
