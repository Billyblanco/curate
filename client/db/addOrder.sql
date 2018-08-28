INSERT INTO orders (user_id, vase_id)
VALUES ($1, $2) 
RETURNING *;