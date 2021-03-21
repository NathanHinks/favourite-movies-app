--- Create
CREATE TABLE Movies (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(100),
    Rating INT,
);


-- Add Data 
INSERT INTO
    Movies (Title, Rating)
VALUES
    ('Infinity War', 5);