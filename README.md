
## Running locally

### Prerequisites
* Node is installed (14.13.1 confirmed working)
* Npm is installed (6.14.8 confirmed working)
* docker and docker-compose are installed

### Run
At the project root, run the following commands:
* `npm install` to install node project dependencies
* `docker-compose up -d` to spin up the postgres DB instance. the -d flag runs it in detached mode, essentially making it a background process. You could optionally run `docker-compose up` in a seperate terminal tab.
* `npm run start:dev` to start the project.

### Making model (entity) changes
* In order to create new models or update an existing model and have those changes reflected in the database, Typeorm takes care of some of the heavy lifting. You'll need an environment variable set `ENVIRONMENT=local`. Then, after making your changes, just run `npm run sync`

Note: this step is wrapped up into the `npm run start:dev` script, so everytime the app is run locally it will be synced with the DB.

### Helpful docker commands
* If you're running your postgres container with the `-d` flag, you'll have to run a `docker-compose down` command to kill your running container. Otherwise, if you're not running with `-d`, you can ctrl-c to end the terminal process as you normally would. 
* To cleanup your environment, you can run `docker system prune` to remove all unused containers, images, and networks. You can add the `--volumes` flag to remove your volumes as well, but this is where the actual postgres data is stored so pruning your volumes will give you a fresh db instance.
* You can open a `psql` shell in the running docker container by running
`docker exec -ti postgres_items psql -U local localdb`

### API Documentation
* When running the application, navigate to `http://localhost:3000/swagger` in your browser to view the application's swagger docs
