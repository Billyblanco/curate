UPDATE users 
SET username = $2
WHERE id = $1;
SELECT * FROM users
WHERE id = $1;