CREATE TABLE Clients (
    Id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
    Name VARCHAR(50),
    Private VARCHAR(50) NOT NULL
);