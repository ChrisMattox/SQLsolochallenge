CREATE TABLE treats (
id SERIAL PRIMARY KEY,
name VARCHAR(80) NOT NULL,
description VARCHAR(300) NOT NULL,
pic VARCHAR(90)
);

INSERT INTO treats (name, description, pic)
VALUES ('Pizza', 'PIZZA IS GOD', 'http://www.cicis.com/media/1138/pizza_trad_pepperoni.png'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
