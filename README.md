# dockerized-rest-api-example

**A Node.js RESTful API app running on Docker. The included REST API examples are for testing ONLY, and NOT "*production ready*" yet!**

This Node.js application is a small barebone written with pure JavaScript (ES6) and without any dependencies or frameworks. It's a good starting point for you to just go further and to build your own app.

You'll get your own app running in a Docker container with Node.js without any heavy customization in the configuration files. I left many comments in all configuration files to make changes easy for you.

You can run your Node.js app with or without Docker. If you publish your app with Docker make sure you follow at least the first steps below. The included RESTful API example is not production ready yet. But the Docker and Node.js setup is. You can find a Node.js "production ready" switch in the `Dockerfile`.

I offer two variants of how to build your app with Docker:
- [Build your app with Docker](#build-your-app-with-docker) -> This is more time consuming variant. But you can configure a lot step by step.
- [Build your app with Docker Compose](#build-your-app-with-docker-compose) -> Run your app within 2 minutes without configuration.

### Table of content

- [Prepare your app](#prepare-your-app)
- [Build your app with Docker](#build-your-app-with-docker)
    - [Start the container](#start-the-container)
    - [Watch the Docker logs](#watch-the-docker-logs)
- [Build your app with Docker Compose](#build-your-app-with-docker-compose)
- [Test the RESTful APIs](#test-the-restful-apis)
- [Further reading](#further-reading)
- [License](#license)

----

## Prepare your app

If you made any changes to your code or in the `package.json` file run the following command to make sure your Node.js app is configured well to publish it with Docker:

~~~
    $ npm install
~~~

For production usage:

~~~
    $ npm install --only=production
~~~

## Build your app with Docker

Now we are build the Docker image. In your directory where your `Dockerfile` is, run the following command to build and then import the Docker image.

- The `-t` flag lets you tag your image with a custom name to find it later easier with `docker images` command.

~~~
$ docker build -t <your name here>/dockerized-rest-api-example .
~~~

Check if your newly build image is now listed by Docker:

~~~
$ docker images
~~~

### Start the container

Let's start the container. The Node.js REST API app inside the container will start automatically every time you start the container again. Here we will map the port `8080` inside of the container to the port `44444` on your local machine or your server, or wherever you've installed Docker with this app.

- The `-p` flag redirects a public port to a private port inside the container.
- The `-d` flag runs the container in detached mode, leaving the container running in the background.

~~~
$ docker run -p 44444:8080 -d <your name here>/dockerized-rest-api-example
~~~

Check if the container is started:

~~~
$ docker ps
~~~

### Watch the Docker logs

Have a look at the Docker log file for this container to check if everything is all right. Copy the Docker container id in the following command:

~~~
$ docker logs <your container id>
~~~

The output should return that the Node.js app is running. It should say something like this for example:

> Running on http://localhost:8080

or

> Running on http://0.0.0.0:8080

## Build your app with Docker Compose

Were building the app with an already preconfigured template with the help of Docker Compose:

~~~
$ docker-compose build basic
~~~

Start your app. This is the way your start your app every time:

~~~
$ docker-compose up
~~~

Stop your app:
~~~
Press CTRL + C
~~~

## Test the RESTful APIs

You'll need the public port of your Docker container. This port you've already stated above `(Port: 44444)`. You can also type `$ docker ps` to find out the current port. Now you can use your a web browser, [cURL](https://curl.haxx.se/){:target="_blank"} as a command line tool or a professional API development tool like [Postman](https://www.getpostman.com/){:target="_blank"} (it's free for small tasks) to work with the APIs.

With a web browser:
- `http://localhost:44444` should return *Hello World*.
- `http://localhost:44444/names?Julia` should return *Hello Julia*.

With cURL you can get a more detailed output:
~~~
$ curl -i localhost:44444/names?Julia
~~~

Or get even more details of the current connection with cURL's verbose mode `-h`:

~~~
$ curl -v localhost:44444/names?Julia
~~~

You can find more APIs if you look at the code.

*Feel free to contribute or contact me.*

## Further reading

- [Official for Node.js Docker Image on GitHub](https://github.com/nodejs/docker-node){:target="_blank"}
- [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md){:target="_blank"}
- [Official Node.js Docker Image on Docker Hub](https://hub.docker.com/_/node/){:target="_blank"}
- [Productive with Docker in 20 minutes](https://engineering.circle.com/productive-with-docker-in-20-minutes-8997297a35bb){:target="_blank"}

- [HTTPS Authorized Certs with Node.js](https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2){:target="_blank"}

## License

See the [LICENSE](LICENSE){:target="_blank"} file for license rights and limitations (MIT).