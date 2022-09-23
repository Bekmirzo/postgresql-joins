CREATE TABLE cars
(
    id bigserial PRIMARY KEY,
    brand VARCHAR(100),
    model VARCHAR(100),
    year int,
    price int
);

CREATE TABLE users
(
    id bigserial PRIMARY KEY,
    fullname VARCHAR(100),
    email VARCHAR(50),
    password VARCHAR(100),
    car_id BIGINT REFERENCES cars(id)
);