------------------------------------------------------------------------------------------------------------------------
--         CREATE TABLE                                                                                               --
------------------------------------------------------------------------------------------------------------------------

CREATE TABLE articles (
  id_art SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) UNIQUE NOT NULL ,
  content TEXT UNIQUE NOT NULL 
);

CREATE TABLE comment (
  id_com SERIAL PRIMARY KEY NOT NULL,
  id_art integer NOT NULL,
  title VARCHAR(50) UNIQUE NOT NULL ,
  content TEXT UNIQUE NOT NULL ,
  auteur VARCHAR(30) NOT NULL,
  ip inet NOT NULL,
  email VARCHAR(50),
  FOREIGN KEY(id_art)
  REFERENCES articles
  ON DELETE CASCADE
  ON UPDATE CASCADE
);

CREATE TABLE projects (
  id_project SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) UNIQUE NOT NULL ,
  descr TEXT UNIQUE NOT NULL 
);


