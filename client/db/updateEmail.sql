UPDATE users 
SET email = $2
WHERE id = $1;
SELECT * FROM users
WHERE id = $1;