DROP TABLE IF EXISTS products;

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(80),
    price INTEGER,
    image_url TEXT
)