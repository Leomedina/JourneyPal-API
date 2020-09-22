\c journey 

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text,
  password text NOT NULL
);