UPDATE users 
SET password = $2
WHERE id = $1;
SELECT * FROM users
WHERE id = $1;