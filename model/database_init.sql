\c journey 

DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Trips CASCADE;

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trips (
  id SERIAL PRIMARY KEY,
  trip_name TEXT NOT NULL,
  user_id INTEGER,
  location TEXT NOT NULL,
  hero_venue TEXT NOT NULL,
  food_venue TEXT NOT NULL,
  last_venue TEXT,
  FOREIGN KEY (user_id) REFERENCES Users(id) 
);
