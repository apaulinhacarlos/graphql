DROP DATABASE IF EXISTS GraphqlDB;

CREATE DATABASE IF NOT EXISTS GraphqlDB;

USE GraphqlDB;

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  genero VARCHAR(50) NOT NULL,
  autor VARCHAR(100) NOT NULL
);

INSERT INTO livros (titulo, genero, autor) VALUES
  ('O Instituto', 'Terror', 'Stephen King'),
  ('Jantar Secreto', 'Terror', 'Raphael Montes'),
  ('A Verdade Sobre o Caso Harry Quebert', 'Suspense', 'Joël Dicker'),
  ('Outsider', 'Terror', 'Stephen King'),
  ('Verity', 'Romance', 'Colleen Hoover'),
  ('Mr. Mercedes', 'Suspense', 'Stephen King'),
  ('O Enigma do Quarto 622', 'Suspense', 'Joël Dicker');
