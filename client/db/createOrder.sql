INSERT INTO orders (arrangement_id)
SELECT arrangement_id FROM arrangements_flower WHERE user_id = $1;
UPDATE orders 
SET user_id = $1
WHERE user_id is null;

SELECT * FROM orders
WHERE user_id = $1;

