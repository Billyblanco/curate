INSERT INTO arrangements (user_id, vase_id)
VALUES ($1, $2)
RETURNING *;