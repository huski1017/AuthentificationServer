CREATE TABLE ClientsUsers (
    Id UUID NOT NULL DEFAULT uuid_generate_v4 (),
    ClientId UUID NOT NULL,
    UserName VARCHAR(50) NOT NULL,
    DisplayName VARCHAR(50),
    Password VARCHAR NOT NULL,
    IsAdmin INT DEFAULT 0,
    CONSTRAINT PK_Users PRIMARY KEY (Id, ClientId)
);