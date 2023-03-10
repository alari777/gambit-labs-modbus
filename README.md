# Table of content

[Getting Started](#getting_started)
- [Spoiler](#spoiler)
- [Introduction](#introduction)

[How to start](#how_to_start)  
[How it works](#how_it_works)  
[Authentication](#auth0_authentication)  
[Tests](#tests)  
[GitHub actions](#github_actions)

[In conclusion](#in_conclusion)  
[Thank you!](#thank_you)

# <a name="getting_started">Getting Started</a>

## <a name="spoiler">Spoiler</a>
It is spoiler. You can see how this application works here:
- [Gambit-labs Modbus project at custom my instance](http://34.23.45.250/).
- [Gambit-labs Modbus project at Vercel](https://gambit-labs-modbus.vercel.app/).

## <a name="introduction">Introduction</a>

TUF-2000M is an ultrasonic energy meter that has a Modbus interface described in docs/tuf-2000m.pdf.

Gambit has access to one of these meters and it is providing you a [live text feed](http://tuftuf.gambitlabs.fi/feed.txt) that shows the time of the reading followed by the first 100 register values.

My task. Create UI for showing the data for user:
- Modern javascript frameworks or maybe a mobile app.
- Easily deployable and testable.
- UX will be also a key factor on this.
- Authentication.

# <a name="how_to_start">How to start</a>

This public project works at `NextJS` framework with TypeScript supporting.

You have few ways how to run this application:
- You can open:
    - Or [Gambit-labs Modbus project at custom my instance](http://34.23.45.250/).  
      It is custom instance at `google.cloud` where is running docker container with this project inside.  
      That is a better way to see how this application works.
    - Or [Gambit-labs Modbus project at Vercel](https://gambit-labs-modbus.vercel.app/)..  
      It is subdomain of `Vercel` company.  
      [Vercel](https://vercel.com/), which provides and supports NextJS._    
      This application was deployed at this subdomain too.
- Next way is on local machine. Create a new folder on your local machine.
    - System Requirements:
        - [NodeJS](https://nodejs.org/en/).  
          Open your terminal and type `node --version`.  
          It has to be 14.6.0 or higher.
    - Go inside this folder and run next commands: 
```
# Clone this repository  
git clone https://github.com/alari777/gambit-labs-modbus .

# Install all dependencies   
npm ci

# In order to start this application in DEV MODE
# This application will start on [http://localhost:3000](http://localhost:3000)    
npm run dev 

# In order to build application run  
npm run build  
npm start
```
- Using `Docker` on the LOCAL MACHINE
  For this one you need to install Docker on your machine/server.
  _What is [Docker](https://docs.docker.com/get-docker/) you can find here._  
  Then go on `https://github.com/alari777/gambit-labs-modbus/pkgs/container/gambit-labs-modbus%2Fgambit-labs-modbus`.    
  Open your terminal and please run next commands:
```bash
# To pull latest docker image of this project
sudo docker pull ghcr.io/alari777/gambit-labs-modbus/gambit-labs-modbus:latest

# To see docker images
sudo docker images

# To start docker container based on this image 
# map port 3000 in the container to port 3000 on the Docker host
# name of container `gambit-labs-modbus`
# "-d" flag causes Docker to start the container in "detached" mode
sudo docker run -p 3000:3000 -d --name gambit-labs-modbus ghcr.io/alari777/gambit-labs-modbus/gambit-labs-modbus:latest

# To see running containers
sudo docker ps

# To see logs (for example last 300 log-records) in real time for this container called `bird`
sudo docker logs --tail 300 -f gambit-labs-modbus
``` 
P.S.  
Remind that you can open and see how this application works at:
[Gambit-labs Modbus project at custom my instance](http://34.23.45.250/)

# <a name="auth0_authentication">Authentication</a>
Authentication works using `Auth0`.  
[Auth0](https://auth0.com/) provides this service. There I created an auth-application and implemented it at this project.  
You can see how it works:
- Start this project or open it at `Vercel`/`Custom instance`
- Find in `header` link named `Login`. Click at it.
- Follow next instructions.
- After successful authentication you can see the `Protected page`. Actually it is a clone page of the `index` page.
- You can click `Logout` in order to close your Authentication session.

I want to add that this `Authentication application` provides permissions only on next domains:
- https://*.vercel.app
- http://localhost:3000
- http://34.23.45.250

For this reason you can start docker container of this project with `authentication`   ONLY at the LOCAL MACHINE.

# <a name="how_it_works">How it works</a>

As I understand feed gives a generic raw binary data. 
JS provides few approaches how to work with the same data. 
I decided to use `ArrayBuffer` and `DataView`. 
The first one creates a new `ArrayBuffer` of the given length in bytes. 
The second one provides a low-level interface for reading and writing multiple number types in a binary `ArrayBuffer`. 
As I see from documentation there are some types like: `REAL4`, `LONG`, `INTEGER` and other. 
All these types can be to calculate via methods of `DataView`. 
For example `setUint8`/`getUint8`, `setUint16`/`getUint16` and others. 
It depends on what kind of type of Modbus the current register is using. My functions just wrappers the work with `ArrayBuffer` and `DataView`.

# <a name="tests">Tests</a>

To start tests: `npm run test`  
To start coverage of tests: `npm run test:coverage`  

# <a name="github_actions">GitHub actions</a>

After creating new `pull request` two GitHub actions: `run_tests` and `push_docker` are run.  
You can find them in folder `.github/workflows/`:
- Action `run_tests` runs tests.
- Action `push_docker` creates Docker image of this project and pushes it in GitHub package.  
  You can find it here: `https://github.com/alari777/gambit-labs-modbus/pkgs/container/gambit-labs-modbus%2Fgambit-labs-modbus`.  
  This action depends on `run_tests`.

# <a name="in_conclusion">In conclusion</a>

It is interesting task.  
I have learned new things and protocol Modbus is very useful.  
I think I will figure out more information how it works and how can I implement it.

# <a name="thank_you">Thank you!</a>
