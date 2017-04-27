
drop database if exists tripmates_db;

CREATE DATABASE IF NOT EXISTS tripmates_db;

 USE tripmates_db;

 CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY(id)
 );

 CREATE TABLE trips (
 	id INT NOT NULL AUTO_INCREMENT,
 	tripName VARCHAR(255),
 	destination VARCHAR(255),
 	est_cost VARCHAR(255),
 	PRIMARY KEY(id)
 );

 CREATE TABLE dates (
 	id INT NOT NULL AUTO_INCREMENT,
 	dateOption VARCHAR(255),
 	trip_id INT,
 	PRIMARY KEY(id),
 	FOREIGN KEY(trip_id) REFERENCES trips(id)
 );

 CREATE TABLE activities (
 	id INT NOT NULL AUTO_INCREMENT,
 	activityName VARCHAR(255),
 	activityDescription VARCHAR(255),
 	est_cost INT,
 	vote_count INT,
 	trip_id INT, 
 	PRIMARY KEY(id),
 	FOREIGN KEY(trip_id) REFERENCES trips(id)
 );

 CREATE TABLE comments (
 	id INT NOT NULL AUTO_INCREMENT,
 	comment VARCHAR(500),
 	createdAt TIMESTAMP, 
 	user_id INT,
 	trip_id INT,
 	PRIMARY KEY (id),
 	FOREIGN KEY(user_id) REFERENCES users(id),
 	FOREIGN KEY(trip_id) REFERENCES trips(id)
 );

 CREATE TABLE user_trips (
 	id INT NOT NULL AUTO_INCREMENT,
 	user_id INT,
 	trip_id INT,
 	PRIMARY KEY (id),
 	FOREIGN KEY (user_id) REFERENCES users(id),
 	FOREIGN KEY (trip_id) REFERENCES trips(id)
 );

 CREATE TABLE activityVotes (
 	id INT NOT NULL AUTO_INCREMENT,
 	user_id INT,
 	activity_id INT,
 	PRIMARY KEY (id),
 	FOREIGN KEY (user_id) REFERENCES users(id),
 	FOREIGN KEY (activity_id) REFERENCES activities(id)
 );

 
 CREATE TABLE dateVotes (
 	id INT NOT NULL AUTO_INCREMENT,
 	user_id INT,
 	date_id INT,
 	PRIMARY KEY (id),
 	FOREIGN KEY (user_id) REFERENCES users(id),
 	FOREIGN KEY (date_id) REFERENCES dates(id)
 );

 







