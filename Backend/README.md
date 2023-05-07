This repository contains the code for the REST API, for the embedded system, and for testing the database/mocking the sensors.
The REST API makes use of change stream for a live conncection to the MongoDB database, so you will have to set up a replica set. The following instructions are tested on Ubuntu 20.04:

##Starting DB:

If you already set up a replica set following the steps below, you can just run the three mongod instances using:
sudo mongod --dbpath /data/rs1 --replSet rs0 --port 27018
sudo mongod --dbpath /data/rs2 --replSet rs0 --port 27019
sudo mongod --dbpath /data/rs3 --replSet rs0 --port 27020

If it doesn' work, check if mongod service is running:
sudo systemctl status mongodb
If not, start the service:
sudo systemctl start mongodb
If it still does not work, stop the service:
sudo systemctl status mongodb
Remove all the data directories:
sudo rm -rf /data/rs1/*
sudo rm -rf /data/rs2/*
sudo rm -rf /data/rs3/*
Start the service again: 
sudo systemctl start mongodb
Follow steps below to create and start a replica set (under Setting up databse/Create and start a replica set)



##Setting up the databse/replica set:
	Installing MongoDB:
		First update:
		sudo apt-get update
		Then install:
		sudo apt-get install mongodb
		
		Then you can start the mongodb servive by:
		sudo systemctl start mongodb
		See if it works by:
		sudo systemctl status mongodb
		If you ever have to stop the service use:
		sudo systemctl status mongodb
	
	Create and start a replica set:
		Next we need a replica set https://www.mongodb.com/docs/manual/replication/ (which is required to make change streans work)

		First, create 3 directories to store the data for each mongod instance (node):
		mkdir -p /data/rs1 /data/rs2 /data/rs3
		
		Create the 3 mongod instances all belonging to the replica set "rs0" (no need to create a directory rs0, it is just the name).
		Every command should run in one terminal.
		sudo mongod --dbpath /data/rs1 --replSet rs0 --port 27018
		sudo mongod --dbpath /data/rs2 --replSet rs0 --port 27019
		sudo mongod --dbpath /data/rs3 --replSet rs0 --port 27020
	
	Initiate the replica set
		Connect to one of the instances using the MongoDB shell by running:
		mongo --port 27018
		Then initiate the replica set:
		> rs.initiate()
		
	Configure the database in the backend:
	
		Now go to .../db.config.js and change the url to point to your data base. If you followed the steps above and want your database to be 
		named 'test', just leave it as: 'mongodb://localhost:27018,localhost:27019,localhost:27020/test?replicaSet=rs0'
		If you used different ports for you mongod instances, replace the ports and if you want a different name, replace 'test' with that name
	
	
##Starting the REST API/Server
Open a terminal in the REST_API folder and run:
npm install
node server.js

##Testing the DB
Under DB_test are files for loading data to the data base and mocking sensors (to test live-functionality).

##Running the front end
The front end is found in the dashboard_planning repository. If you followed the steps here to set up a replica set, start it and starting the server, you can follow the instructions there to run the angular app which uses the backend.
