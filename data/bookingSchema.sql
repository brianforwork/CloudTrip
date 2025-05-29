CREATE TABLE User (
  user_id VARCHAR(20) PRIMARY KEY,
  user_name VARCHAR(50),
  user_email VARCHAR(100),
  user_phone VARCHAR(15),
  user_created_at DATETIME
);

CREATE TABLE Airport (
  airport_id VARCHAR(10) PRIMARY KEY,
  airport_name VARCHAR(50),
  airport_code CHAR(3),
  city VARCHAR(50),
  country VARCHAR(50)
);

CREATE TABLE Flight (
  flight_id VARCHAR(10) PRIMARY KEY,
  flight_number VARCHAR(20),
  origin_airport_id VARCHAR(10),
  dest_airport_id VARCHAR(10),
  departure_time DATETIME,
  arrival_time DATETIME,
  ticket_price DECIMAL(10,2),
  status CHAR(1),
  FOREIGN KEY (origin_airport_id) REFERENCES Airport(airport_id),
  FOREIGN KEY (dest_airport_id) REFERENCES Airport(airport_id)
);

CREATE TABLE Booking (
  booking_id VARCHAR(10) PRIMARY KEY,
  user_id VARCHAR(20),
  flight_id VARCHAR(10),
  booking_price DECIMAL(10,2),
  booking_created_at DATETIME,
  status CHAR(1),
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (flight_id) REFERENCES Flight(flight_id)
);

CREATE TABLE Passenger (
  passenger_id VARCHAR(10) PRIMARY KEY,
  booking_id VARCHAR(10),
  name VARCHAR(50),
  dob DATE,
  passport_number VARCHAR(20),
  gender CHAR(1),
  FOREIGN KEY (booking_id) REFERENCES Booking(booking_id)
);

CREATE TABLE Payment (
  payment_id VARCHAR(10) PRIMARY KEY,
  booking_id VARCHAR(10),
  payment_method CHAR(1), -- consider ENUM
  payment_amount DECIMAL(10,2),
  payment_status CHAR(1),
  payment_created_at DATETIME,
  FOREIGN KEY (booking_id) REFERENCES Booking(booking_id)
);