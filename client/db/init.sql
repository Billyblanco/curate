CREATE TABLE users (
id SERIAL PRIMARY KEY,
auth_id VARCHAR,
name VARCHAR,
email VARCHAR,
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
auth_id TEXT,
email VARCHAR(80),
name VARCHAR(80)
);

CREATE TABLE vases (
id SERIAL PRIMARY KEY,
name VARCHAR,
image_url TEXT,
price REAL
);

CREATE TABLE flowers (
id SERIAL PRIMARY KEY,
name VARCHAR,
image_url TEXT,
price REAL
);

CREATE TABLE decor (
id SERIAL PRIMARY KEY,
name VARCHAR,
image_url TEXT,
price REAL
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users
);



CREATE TABLE orders_decor (
id SERIAL PRIMARY KEY,
decor_id INTEGER REFERENCES decor,
order_id INTEGER REFERENCES orders
);

CREATE TABLE arrangements (
id SERIAL PRIMARY KEY,
vase_id INTEGER REFERENCES vases
);

CREATE TABLE flower_arrangements (
id SERIAL PRIMARY KEY,
arrangement_id INTEGER REFERENCES arrangements,
flower_id INTEGER REFERENCES flowers
);

CREATE TABLE orders_arrangements (
id SERIAL PRIMARY KEY,
order_id INTEGER REFERENCES orders,
arrangement_id INTEGER REFERENCES arrangements,
flower_arrangement_id INTEGER REFERENCES flower_arrangements
);
