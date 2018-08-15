INSERT INTO arrangements_flowers (arrangement_id, flower_id)
VALUES ($1, $2)
RETURNING *;