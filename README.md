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
| APP_HOST      | The host name that will be used to run the application.                                     | 0.0.0.0                |
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

## Docker
[Docker](https://www.docker.com/) is a powerful virtualization tool, with which we can upload applications in containers quickly and easily using just a few commands. This project is configured to be used in a Dockerized environment.
After installing Docker and setting the environment variables, we can run the following command:

```bash
docker-compose up
```

On linux-based systems we need to give some permissions to the "docker/entrypoint.sh" file. To do this, run the following command:

```bash
sudo chmod +x docker/entrypoint.sh
```

and then:

```bash
sudo docker-compose up
```

This should ensure adequate permissions to run the application.

### Comments
It is recommended to use docker-compose only in development environments.

When running the project with the docker-compose you must change some environment variables. For example: DB_HOST and REDIS_HOST must match the name of their respective containers declared in the "docker-compose.yml" file, that is, they must have the following values:

```env
DB_HOST=postgresdb
REDIS_HOST=redisdb
...
```

The migrations and seeders must be executed through the container terminal, because the environment variables are declared in the context of the containers and our host machine does not have explicit access to them. To access the container we need to follow the following steps:

#### List active containers
After uploading the container with docker-compose, we can list all active containers with the following command:

```bash
docker container ls
```

We will see something like this:

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES                      |
|--------------|-------|---------|---------|--------|-------|----------------------------|
| cd4ba6f0b5df | *     | *       | *       | *      | *     | austromiautas_api_v1_1     |
| 704e637b969e | *     | *       | *       | *      | *     | austromiautas_redisdb_1    |
| 8f977fa32b94 | *     | *       | *       | *      | *     | austromiautas_postgresdb_1 |

There are 3 active containers, the first is our API, the second from the Redis database and the third from the Postgres database.

#### Accessing the container shell
To access the container shell, copy the API container id, then execute the following code:

```bash
docker exec -it apiContainerId /bin/ash
```

replace "apiContainerId" with the id you copied, the command should look like:

```bash
docker exec -it cd4ba6f0b5df /bin/ash
```

This will open the container shell in the "/usr/app" directory where the project files are located, from here you can already execute the codes to run the migrations and seeders. There are:

```bash
yarn migration:run
yarn seeder:seed
```