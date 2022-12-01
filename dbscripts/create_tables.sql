CREATE TABLE IF NOT EXISTS products(
  id SERIAL,
  sku UNIQUE VARCHAR (50),
  brand VARCHAR (250),
  list_price DECIMAL(4,2),
  product_name VARCHAR (250)
);

CREATE TABLE IF NOT EXISTS users(
  id SERIAL,
  username VARCHAR (250),
  password BINARY(60),
  address VARCHAR (250),
  first_name VARCHAR (100),
  last_name VARCHAR (100),
  dob DATE
);

CREATE TABLE IF NOT EXISTS ingredients(
  id SERIAL,
  name VARCHAR (250),
  rating INT,
  category VARCHAR (50),
  product_SKU VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS categories(
  id SERIAL,
  name VARCHAR (50),
  product VARCHAR (250),
  sku VARCHAR (50)
);

